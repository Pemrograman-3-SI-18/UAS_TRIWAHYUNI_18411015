const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String
    },
    namaLengkap: {
        type: String
    },
    email: {
        type: String
    },
    noTelepon: {
        type: String
    },
    role: {
        type: Number
    },
    password: {
        type: String
    }

})

module.exports = mongoose.model('transaksi',userSchema)
