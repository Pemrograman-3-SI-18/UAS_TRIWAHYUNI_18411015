<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Input Transaksi</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="Kode Barang"
            lazy-rules
            color="teal"
            v-model="kodeBarang"
            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="code"/>
            </template>
          </q-input>
          <q-input
            label="pembeli"
            lazy-rules
            color="teal"
            v-model="pembeli"
            :rules="[
           val => val !== null && val !== '' || 'Pembeli Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Barang"
            lazy-rules
            color="teal"
            v-model="jenisBarang"
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
            v-model="jumlahBarang"
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
            v-model="hargaBarang"
            :rules="[
           val => val !== null && val !== '' || 'Harga Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-input
            label="Total"
            lazy-rules
            color="teal"
            v-model="total"
            :rules="[
           val => val !== null && val !== '' || 'total Barang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <div>
            <q-input
              label="Alamat"
              lazy-rules
              color="black"
              v-model="alamat"
              :rules="[
           val => val !== null && val !== '' || 'ALAMAT DI BUTUHKAN'
           ]">
              <template v-slot:append>
                <q-icon name="location_city"/>
              </template>
            </q-input>
            <q-select
              filled
              label="Pembayaran"
              lazy-rules
              color="black"
              v-model="pembayaran"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="options"
              @filter="filterFn"
              @input-value="setModel"
              style="width: 1000px; padding-bottom: 10px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    <template v-slot:append>
                    </template>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-btn label="BAYAR" color="primary" @click="tambahkan = true"/>
            <q-dialog v-model="tambahkan">
              <q-card>
                <q-card-section>
                  <div class="text-h6">WARNING !!!</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  SUCCES
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup/>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
const stringOptions = [
  ' Alfamart', 'Indomart', 'Bank Mandiri Syariah', 'Gopay', 'Bank BRI', 'Cash on Delivery'
].reduce((acc, opt) => {
  for (let i = 1; i <= 1; i++) {
    acc.push(opt + ' ')
  }
  return acc
}, [])
export default {
  data () {
    return {
      options: stringOptions,
      tambahkan: false
    }
  },
  methods: {
    filterFn (val, update) {
      update(() => {
        const needle = val.toLocaleLowerCase()
        this.options = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      })
    },

    setModel (val) {
    }
  }
}
</script>
<style scoped>

</style>
