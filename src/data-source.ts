import "reflect-metadata"
import { DataSource } from "typeorm"
import { UmidadeBifinho } from "./entity/UmidadeBifinho"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "root",
    password: "root",
    database: "processos_qualidade",
    synchronize: true,
    logging: false,
    entities: [UmidadeBifinho],
    migrations: [],
    subscribers: [],
})
