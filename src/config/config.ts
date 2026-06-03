import { SupportedDatabaseTypes } from "../core/databaseConfig.js";
import { config as dotenvConfig } from "dotenv";
import { Config } from "../interface/config.js";
dotenvConfig();


export default {
    token: process.env.Token,
    embedColor: "#06c2fb",
    defaultLanguage: "en",
    debugMode: true,
  //  allowedServers: ["1158846168957210635", "1399471603003428966"], // Example server IDs
    prefix: "!",
    developers: ["294614958329561088"],
    database: {
        type: SupportedDatabaseTypes.MongoDB,
        url: "mongodb+srv://sloth:<db_password>@sloth.zelum5o.mongodb.net/?appName=sloth",
    },


} as Config
