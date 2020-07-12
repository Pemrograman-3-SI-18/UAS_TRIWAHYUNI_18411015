const multer = require('multer')
const fs = require('fs')
const router = require('express').Router()
const transaksi = require('../controller/transaksi')

var storage = multer.diskStorage({
    filename : function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
    destination : function (req, file, cb) {
        cb(null, './gambar')
    }
})

var upload = multer({storage : storage}).single("gambar")

router.post("/input", (req, res) => {
    transaksi.inputDataTransaksi(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/show", (req, res) => {
    transaksi.lihatDataTransaksi()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.post("/update/:id", (req, res) => {
    transaksi.updateTransaksi(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/show/:id", (req, res) => {
    transaksi.lihatDetailDataTransaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/transaksi/:id", (req, res) => {
    transaksi.transaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.post("/add", (req, res) => {
    transaksi.tambahKeKeranjang(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/ubah/:id", (req, res) => {
    transaksi.hapusDataTransaksi(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router
