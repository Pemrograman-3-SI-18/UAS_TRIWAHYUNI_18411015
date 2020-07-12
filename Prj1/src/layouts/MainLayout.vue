<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="glossy">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="absolute-center">
          <div class="text-white">
            <div class="text-weight-bold">
              <marquee direction="right" scollamount="5" align="center">WELCOME TO THE CAR SPARE PARTS APLICATION</marquee>
            </div>
          </div>
        </q-toolbar-title>
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">User</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{DataTransaksi.userName}}</div>
                  <div>{{DataTransaksi.namaLengkap}}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img src="statics/foto.jpg">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="teal"
                  label="Keluar"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold">
            <q-item-section>
              MENU ADMIN
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/foto.jpg" alt="">
              </q-avatar>
              <div class="text-weight-bold">{{DataTransaksi.userName}}</div>
              <div>{{DataTransaksi.namaLengkap}}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Master Barang
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Data Barang
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/inputdatabarang">
            <q-item-section avatar>
              <q-icon name="get_app" />
            </q-item-section>
            <q-item-section>
              Input Data Barang
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/datatransaksi">
            <q-item-section avatar>
              <q-icon name="swap_horiz" />
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/penjualan">
            <q-item-section avatar>
              <q-icon name="local_shipping" />
            </q-item-section>
            <q-item-section>
              Penjualan
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
          </q-item-label>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      DataTransaksi: this.$q.localStorage.getItem('DataTransaksi')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}
</script>
