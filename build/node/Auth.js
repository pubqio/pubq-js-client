"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jwt_1 = require("./utils/jwt");
const time_1 = require("./utils/time");
const Http_1 = require("./Http");
const WebSocket_1 = require("./WebSocket");
const OptionsManager_1 = require("./OptionsManager");
class Auth {
    static instance;
    options;
    http;
    client;
    ws = WebSocket_1.WebSocket.getInstance();
    refreshTokenIntervalId;
    constructor() {
        this.options = OptionsManager_1.OptionsManager.getInstance().get();
        this.http = new Http_1.Http();
        this.client = this.http.getClient();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Auth();
        }
        return this.instance;
    }
    getAuthMethod() {
        if (typeof this.options.authUrl !== "undefined" &&
            this.options.authUrl) {
            return "Bearer";
        }
        else if (typeof this.options.key !== "undefined" &&
            this.options.key) {
            return "Basic";
        }
        return false;
    }
    getKeyOrToken() {
        if (!this.options.authTokenName) {
            throw new Error("Auth token name can not be empty.");
        }
        if (this.options.authUrl) {
            return (0, jwt_1.getSignedAuthToken)(this.options.authTokenName);
        }
        else if (this.options.key) {
            return this.getKeyBase64();
        }
        return false;
    }
    getKey() {
        if (this.options.key) {
            return this.options.key;
        }
        throw new Error("API key has not been specified.");
    }
    getKeyBase64() {
        return Buffer.from(this.getKey()).toString("base64");
    }
    makeAuthorizationHeader() {
        if (this.getAuthMethod() && this.getKeyOrToken()) {
            return `${this.getAuthMethod()} ${this.getKeyOrToken()}`;
        }
        throw new Error("Auth method has not been specified.");
    }
    basicAuth() {
        const socket = this.ws.getSocket();
        const credentials = {};
        credentials.key = this.getKey();
        socket.invoke("#basicAuth", credentials);
    }
    async authenticate(body = {}, headers = {}) {
        if (!this.ws) {
            this.ws = WebSocket_1.WebSocket.getInstance();
        }
        const socket = this.ws.getSocket();
        const authMethod = this.getAuthMethod();
        if (authMethod === "Basic") {
            this.basicAuth();
        }
        else if (authMethod === "Bearer") {
            const tokenData = await this.requestToken();
            socket.authenticate(tokenData.token);
        }
    }
    deauthenticate() {
        const socket = this.ws.getSocket();
        this.requestRevoke();
        socket.deauthenticate();
    }
    async requestToken() {
        if (this.options.authUrl && this.options.authTokenName) {
            try {
                const response = await this.client.post(this.options.authUrl, this.options.authBody, { headers: this.options.authHeaders });
                localStorage.setItem(this.options.authTokenName, response.data.data.token);
                return response.data.data;
            }
            catch (error) {
                console.error("Error in requestToken:", error);
                throw error;
            }
        }
        throw new Error("Auth URL has not been provided.");
    }
    async requestRefresh() {
        if (this.options.refreshUrl && this.options.authTokenName) {
            try {
                const body = {
                    ...this.options.authBody,
                    ...{
                        token: (0, jwt_1.getSignedAuthToken)(this.options.authTokenName),
                    },
                };
                const response = await this.client.post(this.options.refreshUrl, body, {
                    headers: this.options.authHeaders,
                });
                localStorage.setItem(this.options.authTokenName, response.data.data.token);
                return response.data.data;
            }
            catch (error) {
                console.error("Error in requestRefresh:", error);
                throw error;
            }
        }
        throw new Error("Refresh URL has not been provided.");
    }
    async requestRevoke() {
        if (this.options.revokeUrl && this.options.authTokenName) {
            try {
                const body = {
                    ...this.options.authBody,
                    ...{
                        token: (0, jwt_1.getSignedAuthToken)(this.options.authTokenName),
                    },
                };
                const response = await this.client.post(this.options.revokeUrl, body, {
                    headers: this.options.authHeaders,
                });
                localStorage.removeItem(this.options.authTokenName);
                return response.data.data;
            }
            catch (error) {
                console.error("Error in requestRevoke:", error);
                throw error;
            }
        }
        throw new Error("Revoke URL has not been provided.");
    }
    startRefreshTokenInterval() {
        if (this.getAuthMethod() === "Bearer") {
            // Stop if any refresh token interval is exist
            this.stopRefreshTokenInterval();
            this.refreshTokenIntervalId = setInterval(() => {
                if (this.options.authTokenName) {
                    const token = (0, jwt_1.getSignedAuthToken)(this.options.authTokenName);
                    const authToken = (0, jwt_1.getJwtPayload)(token);
                    if (authToken) {
                        const remainingSeconds = (0, time_1.getRemainingSeconds)(authToken.exp);
                        if (remainingSeconds <= 60) {
                            this.requestRefresh();
                        }
                    }
                }
            }, this.options.refreshTokenInterval);
        }
    }
    stopRefreshTokenInterval() {
        if (this.refreshTokenIntervalId) {
            clearInterval(this.refreshTokenIntervalId);
        }
    }
    destroy() {
        this.stopRefreshTokenInterval();
        if (this.options.authTokenName) {
            localStorage.removeItem(this.options.authTokenName);
        }
        Auth.instance = undefined;
    }
}
exports.Auth = Auth;
