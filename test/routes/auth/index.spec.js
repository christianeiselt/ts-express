"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("server"));
var app = server_1.default();
describe("auth routes", function () {
    it("/auth responds with 200", function (done) {
        supertest_1.default(app).get("/auth").expect(200, done);
    });
});
