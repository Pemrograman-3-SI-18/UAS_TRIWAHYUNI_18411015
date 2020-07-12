const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    kodeBarang: {
        type: String
    },
    jenisBarang: {
        type: String
    },
    jumlahBarang: {
        type: String
    },
    hargaBarang: {
        type: String
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('sparepart', userSchema)
