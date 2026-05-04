import express from "express";
import cors from "cors";
import employeeRouter from "./routes/employee.routes.js"


const app = express()

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
));

app.use("/uploads", express.static('uploads'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/employee', employeeRouter)
app.get('/', (req, res) => {
    res.send('Hello')
})


export default app;