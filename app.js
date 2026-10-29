import express from "express";
import employeeRoutes from "./routes/employee.route.js"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173/"
}))

app.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        message: "Employee management system"
    })
})

app.use("/api", employeeRoutes);

export default app;