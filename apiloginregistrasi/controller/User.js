const userModel = require('../model/User.js')
const response = require('../config/response')
const bcrypt = require('bcrypt')

exports.registrasi = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({userName: data.userName})
            .then(transaksi =>{
                if (transaksi){
                    resolve(response.commonErrorMsg( 'User Name sudah digunakan'))
                }else{
                    bcrypt.hash(data.password, 10, (err, hash)=>{
                        if (err){
                            reject(response.commonErrorMsg)
                        }else{
                            data.password = hash
                            userModel.create(data)
                                .then(() => resolve(response.commonSuccesMsg('Berhasil Registrasi')))
                                .catch(() => reject(response.commonErrorMsg('Mohon Maaf, Registrasi Gagal')))
                        }
                    })
                }
            }) .catch(() => reject(response.commonError))

    })
exports.login = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({
            userName: data.userName
        }).then(transaksi => {
            if(transaksi){
                if (bcrypt.compareSync(data.password, transaksi.password)) {
                    resolve(response.commonResult(transaksi))
                }else {
                    reject(response.commonErrorMsg('Password Salah'))
                }
            }else{
                reject(response.commonErrorMsg('User Name Tidak di Temukan'))
            }
        })
    })

