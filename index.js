var express = require('express')
var app = express()
var port = 3000

app.use(express.static('src'))
app.use(express.static('src/assets'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
