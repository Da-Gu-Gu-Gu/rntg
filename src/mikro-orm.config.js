"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.default = {
    migrations: {
        path: "./migrations", // path to the folder with migrations
    },
    entities: [Post_1.Post],
    dbName: "lireddit",
    debug: !constants_1.__prod__,
    type: "postgresql",
};
