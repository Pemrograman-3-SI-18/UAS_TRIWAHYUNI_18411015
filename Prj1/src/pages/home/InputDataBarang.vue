<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Input Data Barang</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Barang"
            lazy-rules
            color="teal"
            v-model="form.kodeBarang"
            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="code"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Barang"
            lazy-rules
            color="teal"
            v-model="form.jenisBarang"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="merge_type"/>
            </template>
          </q-input>

          <q-input
            label="Jumlah Barang"
            lazy-rules
            color="teal"
            v-model="form.jumlahBarang"
            :rules="[
           val => val !== null && val !== '' || 'Jumlah Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="account_balance_wallet"/>
            </template>
          </q-input>

          <q-input
            label="Harga Barang"
            lazy-rules
            color="teal"
            v-model="form.hargaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Harga Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih Gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="Tambah Data Barang"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        jenisBarang: null,
        kodeBarang: null,
        jumlahBarang: null,
        hargaBarang: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('jenisBarang', this.form.jenisBarang)
      formData.append('kodeBarang', this.form.kodeBarang)
      formData.append('jumlahBarang', this.form.jumlahBarang)
      formData.append('hargaBarang', this.form.hargaBarang)
      this.$axios.post('/sparepart/input', formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
