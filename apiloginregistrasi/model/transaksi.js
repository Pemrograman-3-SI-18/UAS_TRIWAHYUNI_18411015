const mongoose = require('mongoose');
const objectId = mongoose.Schema.ObjectId

const userSchema = mongoose.Schema({
    kodeBarang : {
        type : objectId
    },
    jenisBarang : {
        type : String
    },
    jumlahBarang : {
        type : String
    },
    hargaBarang : {
        type : String
    }
})

module.exports = mongoose.model('transaksiPembeli', userSchema)
