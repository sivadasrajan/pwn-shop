"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PWNSHOP_HOST,
    port: 5432,
    username: process.env.PWNSHOP_USER,
    password: process.env.PWNSHOP_PASSWORD,
    database: process.env.PWNSHOP_DATABASE,
    synchronize: true,
    ssl: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map