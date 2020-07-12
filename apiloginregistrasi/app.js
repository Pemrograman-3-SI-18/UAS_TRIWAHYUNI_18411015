const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose  = require('mongoose')
const port = process.env.PORT || 5050
const dbConfig = require('./config/DbConfig')
const cors = require('cors')
const path = require('path')
app.use('/transaksi', require('./Routes/transaksi'))

mongoose.connect(dbConfig.mongoURL,{
    useNewUrlParser: true
}).then(() => console.log("connect mongodb"))
    .catch(err => console.log(err))

app.use(cors());

app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))

app.use('/gambar', express.static(path.join(__dirname, 'gambar')))
app.use( '/transaksi', require('./routes/User'))
app.use('/sparepart', require('./routes/sparepart'))

app.listen(port, function(){
    console.log('Server Berjalan di Port '+port)
})
