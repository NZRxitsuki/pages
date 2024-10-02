import express from "express"
import fs from "fs"
import os from "os"
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from "cors"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 5000
const chat = path.join(os.homedir(),"/storage/downloads/Memories/index.html")
const public_file = path.join(os.homedir(),"/storage/downloads/Memories")
const html = path.join(__dirname,"/public/index.html")
const jsx = path.join(__dirname,"/index.jsx")
//const file = fs.readFileSync(os.homedir() +"/storage/downloads/pacar.png")
const json = {name: "Nazril", age: "17", hobby: "coding"}

app.use(cors())
app.use(express.static(public_file))
app.get("/jsx",(req,res) => res.sendFile(__dirname + "/public/index.jsx"))
app.get("/chat2",(req,res) => {res.sendFile(html)})
app.get("/chat",(req,res) => res.sendFile(chat))
app.get("/name",(req,res) => res.json(JSON.stringify(json)))
app.listen(port,() => console.log("server berjalan"))
