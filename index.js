const express = require("express")
const app = express()
const port = 3000

app.use(express.static("res"))

app.get("/", (req, res) =>{
  res.send("Hello World!")
})

app.listen(port,()=> {
  console.log(`listening on port ${port}.`)
})