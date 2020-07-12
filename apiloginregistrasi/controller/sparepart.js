const sparepart = require('../model/sparepart')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.InputDataSparepart = (data, gambar) =>
    new Promise(async (resolve, reject)=>{

        const sparepartBaru = new sparepart({
            kodeBarang : data.kodeBarang,
            jenisBarang : data.jenisBarang,
            jumlahBarang :data.jumlahBarang,
            hargaBarang : data.hargaBarang,
            gambar : gambar
        })
       await sparepart.findOne({kodeBarang: data.kodeBarang})
            .then(sparepart => {
                if (sparepart){
                    reject(response.commonErrorMsg('kode barang sudah digunakan'))
                }else {
                    sparepartBaru.save()
                        .then(r=>{
                            resolve(response.commonSuccesMsg('Berhasil menginput data'))
                        }).catch(err => {
                            reject(response.commonErrorMsg('Mohon Maaf, Input sparepart Gagal'))
                    })
                }
            }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })
    })

exports.lihatDataSparepart = () =>
    new Promise(async (resolve, reject) =>{
        await sparepart.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.lihatDetailDataSparepart = (kodeBarang) =>
    new Promise(async (resolve, reject) =>{
        await sparepart.findOne({kodeBarang: kodeBarang})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami')))
    })

exports.updateSparepart = (id, data, gambar) =>
    new Promise(async (resolve, reject) =>{
       await sparepart.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodeBarang : data.kodeBarang,
                    jenisBarang : data.jenisBarang,
                    jumlahBarang :data.jumlahBarang,
                    hargaBarang : data.hargaBarang,
                    gambar : gambar
                }
            }
        ).then(sparepart => {
            resolve(response.commonSuccesMsg('Berhasil mengubah data'))
        }).catch(err => {
            reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
        })

    })

exports.hapusSparepart = (_id) =>
    new Promise(async (resolve, reject)=>{
        await sparepart.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.commonSuccesMsg('Berhasil menghapus data'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf Terjadi Kesalahan Pada Server Kami'))
            })
    })