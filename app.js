const express = require('express')
const router = require('./routers');
const app = express()
const port = 3000

app.set(`view engine`, 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static("assets"));

app.use('/', router)


app.use((req, res) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`911 palsu listening on port ${port}`)
})