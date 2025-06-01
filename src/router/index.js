import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Dashboard from '@/views/DashboardView.vue';
import Kegiatan from '@/views/KegiatanView.vue'; 
import Inventaris from '@/views/InventarisView.vue'; 
import Keuangan from '@/views/KeuanganView.vue';
import TambahKegiatan from '@/views/TambahKegiatanView.vue';
import EditKegiatan from '@/views/EditKegiatanView.vue';
import TambahInventaris from '@/views/TambahInventarisView.vue';
import EditInventaris from '@/views/EditInventarisView.vue';
import TambahPenyumbang from '@/views/TambahPenyumbangView.vue';
import EditPenyumbang from '@/views/EditPenyumbangView.vue';
import TambahKeluarMasuk from '@/views/TambahKeluarMasukView.vue';
import EditKeluarMasuk from '@/views/EditKeluarMasukView.vue';
import TambahRencanaAnggaran from '@/views/TambahRencanaAnggaranView.vue';
import EditRencanaAnggaran from '@/views/EditRencanaAnggaranView.vue';
import TambahTransaksi from '@/views/TambahTransaksiView.vue';
import EditTransaksi from '@/views/EditTransaksiView.vue';
import EditJadwalSholat from '@/views/EditJadwalSholatView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/kegiatan',
    name: 'Kegiatan',
    component: Kegiatan,
  },
  {
    path: '/inventaris',
    name: 'Inventaris',
    component: Inventaris,
  },
  {    path: '/keuangan',    name: 'Keuangan',    component: Keuangan,  },
  {
    path: '/keuangan/transaksi/tambah',
    name: 'TambahTransaksi',
    component: TambahTransaksi,
  },
  {
    path: '/keuangan/transaksi/edit/:id',
    name: 'EditTransaksi',
    component: EditTransaksi,
  },
  {
    path: '/inventaris/penyumbang/tambah',
    name: 'TambahPenyumbang',
    component: TambahPenyumbang,
  },
  {
    path: '/inventaris/penyumbang/edit/:id',
    name: 'EditPenyumbang',
    component: EditPenyumbang,
  },
  {
    path: '/kegiatan/tambah',
    name: 'TambahKegiatan',
    component: TambahKegiatan,
  },
  {
    path: '/kegiatan/edit/:id',
    name: 'EditKegiatan',
    component: EditKegiatan,
  },
  {
    path: '/inventaris/tambah',
    name: 'TambahInventaris',
    component: TambahInventaris,
  },
  {
    path: '/inventaris/edit/:id',
    name: 'EditInventaris',
    component: EditInventaris,
  },
  {
    path: '/inventaris/keluar-masuk/tambah',
    name: 'TambahKeluarMasuk',
    component: TambahKeluarMasuk,
  },
  {
    path: '/inventaris/keluar-masuk/edit/:id',
    name: 'EditKeluarMasuk',
    component: EditKeluarMasuk,
  },
  {
    path: '/keuangan/rencana-anggaran/tambah',
    name: 'TambahRencanaAnggaran',
    component: TambahRencanaAnggaran,
  },
  {
    path: '/keuangan/rencana-anggaran/edit/:id',
    name: 'EditRencanaAnggaran',
    component: EditRencanaAnggaran,
  },
  {
    path: '/edit-jadwal',
    name: 'EditJadwalSholat',
    component: EditJadwalSholat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
