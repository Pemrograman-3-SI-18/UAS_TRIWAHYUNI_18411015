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
          <q-btn color="primary" label="Tambah Data Barang" to="/inputDataBarang"/>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Barang" to="/inputDataBarang"/>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeBarang" :props="props">
              {{ props.row.kodeBarang }}
            </q-td>
            <q-td key="jenisBarang" :props="props">{{ props.row.jenisBarang }}</q-td>
            <q-td key="jumlahBarang" :props="props">{{ props.row.jumlahBarang }}</q-td>
            <q-td key="hargaBarang" :props="props">{{ props.row.hargaBarang }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeBarang)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataSparepart(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodeBarang',
          required: true,
          label: 'Kode Barang',
          align: 'left',
          field: row => row.kodeBarang,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'jenisBarang', align: 'center', label: 'Jenis Barang', field: 'jenisBarang', sortable: true },
        { name: 'jumlahBarang', align: 'center', label: 'Jumlah Barang', field: 'jumlahBarang' },
        { name: 'hargaBarang', align: 'center', label: 'Harga Barang', field: 'hargaBarang' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataSparepart () {
      this.$axios.get('/sparepart/DataSparepart')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataSparepart (id) {
      this.$axios.delete('/sparepart/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataSparepart()
        })
    },
    edit (kodeBarang) {
      this.$router.push('/editdatabarang/' + kodeBarang)
    }
  },
  mounted () {
    this.getDataSparepart()
  }
}
</script>
