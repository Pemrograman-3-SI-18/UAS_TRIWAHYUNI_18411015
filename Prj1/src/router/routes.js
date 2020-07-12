
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/home/DataBarang.vue') },
      { path: 'inputdatabarang', component: () => import('pages/home/InputDataBarang.vue') },
      { path: 'editdatabarang/:id', component: () => import('pages/home/EditDataBarang.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') },
      { path: 'penjualan', component: () => import('pages/home/Penjualan.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/pembeli/databarang/DataBarang.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/Transaksi/InputTransaksi') },
      { path: 'penilaian', component: () => import('pages/pembeli/penilaian/BeriPenilaian') },
      { path: 'tentang', component: () => import('pages/pembeli/tentang/Tentang') },
      { path: 'alur', component: () => import('pages/pembeli/alur/Alur') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') },
      { path: 'auth/LoginAdmin', component: () => import('pages/users/LoginAdmin.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
