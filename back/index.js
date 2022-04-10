const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.status(301).redirect("http://127.0.0.1:8080/")
  })

 app.get("/backend", (req, res) => {
    res.status(301).redirect("http://127.0.0.1:8080/index2.html")
  })

app.listen(port, () => {
  console.log(`Your first Express app is successfully running! You can view the output of this app at http://localhost:${port}`)
})