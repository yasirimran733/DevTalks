import express from "express"
import { createDB } from "./config/db.js"
import cors from "cors"

const app = express()

app.use(express.json())

// app.use(cors())

app.get("/api", (req, res) => {
    res.send("Conneted")
})


createDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is running!")
    })
})

