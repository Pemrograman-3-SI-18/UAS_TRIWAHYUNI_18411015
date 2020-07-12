<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="primary" :disable="loading" label="Data Transaksi" to="/admin/DataTransaksi"/>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'jenisBarang', align: 'center', label: 'Jenis Barang', field: 'jenisBarang', sortable: true },
        { name: 'jumlahBeli', align: 'center', label: 'Jumlah Beli', field: 'jumlahBeli' },
        { name: 'hargaBarang', align: 'center', label: 'Harga Barang', field: 'hargaBarang' },
        { name: 'total', align: 'center', label: 'Total', field: 'total' }
      ],
      data: [
        {
          kodeTransaksi: 'Ta01',
          namaPembeli: 'Aqshal Roihan',
          jenisBarang: 'Ban Mobl',
          hargaBarang: 'Rp. 125.000',
          jumlahBeli: '3',
          total: 'Rp. 375.000'
        },
        {
          kodeTransaksi: 'Ta02',
          namaPembeli: 'Kurniawan',
          jenisBarang: 'Aki Mobil',
          hargaBarang: 'Rp. 25.000',
          jumlahBeli: '1',
          total: 'Rp. 25.000'
        },
        {
          kodeTransaksi: 'Ta03',
          namaPembeli: 'Irfan Affandi',
          jenisBarang: 'Ban Mobl',
          hargaBarang: 'Rp. 125.000',
          jumlahBeli: '2',
          total: 'Rp. 250.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
