import { configDotenv } from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

configDotenv({ path: "./.env" })

const PORT = process.env.PORT || 5000;
const MONGODB_STRING = process.env.MONGODB_URL_STRING;


async function startServer() {
    try {
        await connectDB(MONGODB_STRING)
        app.listen(PORT, () => console.log(`APP Running on PORT ${PORT}`))
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

startServer()