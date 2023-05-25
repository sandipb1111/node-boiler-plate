import { config } from "dotenv"
import cors from "cors"
import express, { Request, Response } from "express"
import crypto from "crypto"

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
