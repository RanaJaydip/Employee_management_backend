import app from './app.js'
import { connectDB } from "./db.js";

await connectDB();

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("listening port is", PORT)
})