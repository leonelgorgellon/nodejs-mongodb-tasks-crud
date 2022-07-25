import { config } from "dotenv";

config()

//le ponemos || /test para que si no encuentra la base de datos MONGODB_URI se conecte a una base de datos de mi localhost y q la nombre como test
//y asi vemos si se encuentra conectada a nuetra base de datos o a otra 
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = process.env.PORT || 3000;