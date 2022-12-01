const express = require('express')
const router = require('./routes/index');
const app = express()
const port = 3000

app.set(`view engine`, 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static("styles"));

app.use('/', router)

app.listen(port, () => {
  console.log(`911 palsu listening on port ${port}`)
})