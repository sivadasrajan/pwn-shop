import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PWNSHOP_HOST,
    port: 5432,
    username: process.env.PWNSHOP_USER,
    password: process.env.PWNSHOP_PASSWORD,
    database: process.env.PWNSHOP_DATABASE,
    synchronize: true,
    ssl:true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
