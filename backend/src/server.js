import express from "express"
import connectDB from "./config/db.js"

const app = express()

app.get("/api", (req, res) => {
    res.send("Conneted")
})

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is running!")
    })
})

