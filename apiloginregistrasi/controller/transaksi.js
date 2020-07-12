const transaksi = require('../model/transaksi')
const response = require('../config/response')
const sparepart = require('../model/sparepart')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDatatransaksi = (id, data) =>
    new Promise(async (resolve, reject) => {
        const transaksiBaru = new transaksi({
            id : ObjectId(id),
            fullnameTransaksi : data.fullnameTransaksi,
            kodeBarang : data.kodeBarang,
            jenisBarang : data.jenisBarang,
            jumlahBarang :data.jumlahBarang,
            hargaBarang : data.hargaBarang
        })

        transaksiBaru.save()
            .then(r => {
                resolve(response.commonSuccessMsg('yeah... berhasil input data'))
            }).catch(err => {
            reject(response.commonErrorMsg('Opps... gagal input data'))
        })

    })

exports.lihatDataTransaksi = () =>
    new Promise(async (resolve, reject) => {
        transaksi.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.')))
    })

exports.updateTransaksi = (id, data) =>
    new Promise(async (resolve, reject) => {
        transaksi.updateOne(
            {_id : ObjectId(id)}, {
                fullnameTransaksi : data.fullnameTransaksi,
                kodeBarang : data.kodeBarang,
                jenisBarang : data.jenisBarang,
                jumlahBarang :data.jumlahBarang,
                hargaBarang : data.hargaBarang
            }
        ).then(transaksi => {
            resolve(response.commonSuccessMsg('yeah... berhasil mengubah data.'))
        }).catch(err => {
            reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.'))
        })
    })

exports.lihatDetailDataTransaksi = (id) =>
    new Promise(async (resolve, reject) => {
        transaksi.findOne({_id : ObjectId(id)})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.')))
    })

exports.transaksi = (id) =>
    new Promise(async (resolve, reject) => {
        transaksi.findOne({_id : ObjectId(id)})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.')))
    })

exports.addTransaksi = (id) =>
    new Promise(async (resolve, reject) => {
        transaksi.findOne({_id : ObjectId(id)})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.')))
    })

exports.tambahKeKeranjang = (data) =>
    new Promise(async (resolve, reject) => {
        const jumlahBarangBaru = Number(data.jumlahBarang) - Number(data.qtyBuyer)
        try {
            await transaksi.create(data)
                .then(async result => {
                    await sparepart.updateOne({
                        _id: ObjectId(data.id)
                    },{
                        qty: jumlahBarangBaru.toString()
                    })
                        .then(() => {
                            resolve(response.commonResult(result))
                        })
                })
                .catch(() => reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server.')))
        } catch (e) {
            console.log(e)
        }
    })

exports.deleteDataTransaksi = (id) =>
    new Promise(async (resolve, reject) => {
        await transaksi.remove({_id : ObjectId(id)})
            .then(() => {
                resolve(response.commonSuccessMsg('Yeah... berhasil menghapus data.'))
            }).catch(() => {
                reject(response.commonErrorMsg('Opps... terjadi kesalahan pada server'))
            })
    })
