<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md" v-for="(sparepart, i) in data" :key="i">
          <q-card flat class="bg-white text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
               {{ sparepart.jenisBarang}}
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 48%; max-width: 48%" :src="baseUrl + sparepart.gambar"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga : Rp. {{ sparepart.hargaBarang }}
              </div>
            </q-card-section>
            <q-card-section>
              <div>
                Kode Barang : {{ sparepart.kodeBarang }}
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang" type="submit" unelevated color="teal"  to="/pembeli/transaksi"/>
          </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataBarang',
  data () {
    return {
      data: null,
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataSparepart () {
      this.$axios.get('/sparepart/DataSparepart')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataSparepart()
  }
}
</script>

<style scoped>

</style>
