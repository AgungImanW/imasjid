<template>
  <div class="dashboard-wrapper">
    <div class="dashboard" id="dashboard-container">
      <header class="header">
        <div class="logo-container" @click="refreshDashboard">
          <img src="@/assets/icon/mosque-logo.png" alt="Mosque Logo" class="mosque-logo" />
          <div class="logo">iMasjidHub</div>
        </div>
        <nav class="nav">
          <router-link to="/dashboard" class="nav-link" :class="{ 'active': $route.path === '/dashboard' }">Dashboard</router-link>
          <router-link to="/kegiatan" class="nav-link">Kegiatan</router-link>
          <router-link to="/inventaris" class="nav-link">Inventaris</router-link>
          <router-link to="/keuangan" class="nav-link">Keuangan</router-link>
        </nav>

        <div class="search-notif-profile">
          <input type="text" placeholder="Search..." />
          <button class="notif">🔔</button>
          <img class="avatar" src="@/assets/icon/profile.png" alt="User" />
        </div>
      </header>
      
      <div class="welcome">
        <div>
          <h2>Selamat Datang, Zulfikar</h2>
          <small>Admin, Masjid Al-Waqar</small>
        </div>
        <div class="date">Selasa, 31 Desember 2024</div>
      </div>

      <section class="inventaris">
        <h3>Inventaris</h3>
        <div class="inventaris-cards">
          <div class="card" v-for="item in inventaris" :key="item.label">
            <div class="icon">{{ item.icon }}</div>
            <div class="label">{{ item.label }}</div>
            <div class="jumlah">{{ item.jumlah }}</div>
          </div>
        </div>
      </section>

      <section class="keuangan">
        <div class="ringkasan">
          <div class="icon">📈</div>
          <div>
            <div class="jumlah">Rp. 4.000.000</div>
            <div class="label">Pemasukan</div>
          </div>
        </div>
        <div class="ringkasan">
          <div class="icon">📉</div>
          <div>
            <div class="jumlah">Rp. 2.000.000</div>
            <div class="label">Pengeluaran</div>
          </div>
        </div>
      </section>

      <section class="jadwal">
        <h3>Jadwal Sholat dan Imam</h3>
        <ul>
          <li v-for="(j, i) in jadwalSholat" :key="i">
            <span class="icon">{{ j.icon }}</span>
            <span class="nama">{{ j.nama }}</span>
            <span class="jam">{{ j.jam }}</span>
            <span class="imam">{{ j.imam }}</span>
          </li>
        </ul>
      </section>

      <section class="permintaan">
        <h3>Permintaan Inventaris</h3>
        <div class="request" style="padding: 0 20px; display: grid; grid-template-columns: auto 1fr; gap: 40px; align-items: center;">
          <img class="avatar" src="@/assets/icon/profile.png" alt="User" style="pointer-events: none; margin-top: -140px !important;" />
          <div class="request-text" style="margin-top: -140px !important; display: grid; grid-template-columns: auto auto auto; gap: 32px; align-items: center;">
            <span class="name">Muhammad Zulfikar</span><span class="item">Mic (2)</span><span class="time">19.00</span>
          </div>
        </div>
      </section>

      <section class="berita">
        <h3>Berita</h3>
        <ul>
          <li>
            <strong>• Eid al-Adha 2025: A Day of Sacrifice</strong><br />
            <small>22 April 2025</small>
          </li>
        </ul>
      </section>

      <section class="acara">
        <h3>Acara Terdekat</h3>
        <div class="event">
          <span>• Pengajian Rutin</span>
          <span>15 Mei 14.00</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventaris: [
        { icon: "⚡", label: "Elektronik", jumlah: 21 },
        { icon: "🕌", label: "Alat Sholat", jumlah: 21 },
        { icon: "🧹", label: "Alat Kebersihan", jumlah: 21 },
        { icon: "🪜", label: "Perabotan", jumlah: 21 },
        { icon: "💺", label: "Inventaris Acara", jumlah: 21 },
      ],
      jadwalSholat: [
        { icon: "🌤️", nama: "Subuh", jam: "04.14", imam: "Ust. Jalaluddin" },
        { icon: "☀️", nama: "Dzuhur", jam: "11.29", imam: "Ust. Jalaluddin" },
        { icon: "🌥️", nama: "Ashar", jam: "14.50", imam: "Ust. Jalaluddin" },
        { icon: "🌇", nama: "Maghrib", jam: "17.22", imam: "Ust. Jalaluddin" },
        { icon: "🌙", nama: "Isya", jam: "18.34", imam: "Ust. Jalaluddin" },
      ],
    };
  },
  created() {
    // Load jadwal sholat from localStorage if exists
    const savedJadwal = localStorage.getItem('jadwalSholat')
    if (savedJadwal) {
      this.jadwalSholat = JSON.parse(savedJadwal)
    } else {
      // If no saved data, save current data to localStorage
      localStorage.setItem('jadwalSholat', JSON.stringify(this.jadwalSholat))
    }
  },
  methods: {
    refreshDashboard() {
      this.$router.go(0);
    },
    updateJadwalSholat(index, updatedJadwal) {
      this.jadwalSholat[index] = updatedJadwal;
      localStorage.setItem('jadwalSholat', JSON.stringify(this.jadwalSholat));
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Global Reset yang lebih kuat */
*, *::before, *::after {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

/* Root elements - Full screen tanpa gap */
html, body {
  margin: 0 !important;
  padding: 0 !important;
  height: 100vh !important;
  width: 100vw !important;
  background-color: #121212 !important;
  font-family: 'Poppins', sans-serif;
  overflow: hidden !important; /* Hapus scroll */
}

#app {
  margin: 0 !important;
  padding: 0 !important;
  height: 100vh !important;
  width: 100vw !important;
  background-color: #121212 !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden !important;
}

/* Tambahan untuk Vue Router */
.router-view {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #121212 !important;
  height: 100vh !important;
  overflow: hidden !important;
}

.dashboard-wrapper {
  background-color: #121212;
  height: 100vh !important;
  width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden !important;
}

.dashboard {
  color: #fff;
  padding: 12px !important;
  display: grid;
  grid-template-columns: 1fr 1fr 350px;
  grid-template-rows: auto auto 1fr 1fr auto;
  gap: 12px;
  height: 100vh !important;
  max-width: 1400px;
  margin: 0 auto !important;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden !important;
}

/* Header - Compact */
.header {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 8px !important;
  margin-bottom: 0 !important;
  height: 50px;
  flex-shrink: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  background: #1c1816;
  border-radius: 8px;
  padding: 6px 12px !important;
  cursor: pointer;
}

.mosque-logo {
  width: 20px;
  height: 20px;
  margin-right: 8px !important;
}

.logo {
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
}

.nav {
  display: flex;
  gap: 30px;
  font-weight: 500;
  font-size: 0.85rem;
}

.nav-link {
  color: #ccc;
  text-decoration: none;
  padding: 6px 0 !important;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav-link.active, .nav-link:hover {
  color: #fff;
  border-color: #fff;
}

.search-notif-profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-notif-profile input {
  background: #1c1816;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 6px 12px !important;
  width: 250px;
  color: white;
  font-size: 0.8rem;
}

.search-notif-profile input::placeholder {
  color: #888;
}

.notif {
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s ease;
  padding: 3px !important;
}

.notif:hover {
  color: #fff;
}

.avatar {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 2px solid #333;
}

/* Welcome - Compact */
.welcome {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0 !important;
  height: 40px;
  flex-shrink: 0;
}

.welcome h2 {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 2px !important;
}

.welcome small {
  color: #aaa;
  font-weight: 400;
  font-size: 0.8rem;
}

.date {
  font-size: 0.8rem;
  color: #aaa;
  font-weight: 400;
}

/* Inventaris - Compact */
.inventaris {
  grid-column: 1 / 3;
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.inventaris h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px !important;
  color: #fff;
  flex-shrink: 0;
}

.inventaris-cards {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex: 1;
  align-items: stretch;
}

.card {
  flex: 1;
  background: #2a2320;
  border-radius: 12px;
  padding: 12px 8px !important;
  border: 1px solid #444;
  text-align: center;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
}

.card:hover {
  transform: translateY(-2px);
}

.card .icon {
  font-size: 1.5rem;
  margin-bottom: 8px !important;
}

.card .label {
  font-weight: 400;
  font-size: 0.75rem;
  color: #ccc;
  margin-bottom: 6px !important;
}

.card .jumlah {
  font-weight: 600;
  font-size: 1.2rem;
  color: #fff;
}

/* Keuangan - Compact */
.keuangan {
  grid-column: 3;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ringkasan {
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-height: 0;
}

.ringkasan .icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.ringkasan .jumlah {
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 3px !important;
}

.ringkasan .label {
  font-size: 0.75rem;
  color: #aaa;
  font-weight: 400;
}

/* Jadwal - Compact */
.jadwal {
  grid-column: 1;
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.jadwal h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px !important;
  color: #fff;
  flex-shrink: 0;
}

.jadwal ul {
  list-style: none;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

.jadwal li {
  display: flex;
  align-items: center;
  padding: 6px 0 !important;
  border-bottom: 1px solid #333;
  font-size: 0.85rem;
}

.jadwal li:last-child {
  border-bottom: none;
}

.jadwal .icon {
  font-size: 1rem;
  width: 30px;
  text-align: center;
  flex-shrink: 0;
}

.jadwal .nama {
  flex: 1;
  font-weight: 500;
  margin-left: 8px !important;
}

.jadwal .jam {
  width: 50px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
}

.jadwal .imam {
  width: 100px;
  text-align: right;
  font-weight: 400;
  color: #aaa;
  font-size: 0.75rem;
  flex-shrink: 0;
}

/* Permintaan - Compact */
.permintaan {
  grid-column: 2;
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.permintaan h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px !important;
  color: #fff;
  flex-shrink: 0;
}

.request {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0 !important;
  font-size: 0.85rem;
  flex: 1;
}

.request .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #333;
  flex-shrink: 0;
}

.request .name {
  flex: 1;
  font-weight: 500;
}

.request .item {
  font-weight: 400;
  color: #ccc;
  flex-shrink: 0;
}

.request .time {
  font-weight: 500;
  color: #fff;
  margin-left: 8px !important;
  flex-shrink: 0;
}

/* Berita - Compact */
.berita {
  grid-column: 3;
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.berita h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px !important;
  color: #fff;
  flex-shrink: 0;
}

.berita ul {
  list-style: none;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

.berita li {
  font-size: 0.8rem;
  line-height: 1.4;
  color: #ccc;
}

.berita strong {
  color: #fff;
  font-weight: 500;
}

.berita small {
  color: #888;
  font-size: 0.7rem;
}

/* Acara - Compact */
.acara {
  grid-column: 1 / 3;
  background: #1c1816;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 16px !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.acara h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px !important;
  color: #fff;
  flex-shrink: 0;
}

.acara .event {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 !important;
  font-weight: 500;
  font-size: 0.85rem;
  flex: 1;
}

.acara .event span:first-child {
  color: #fff;
}

.acara .event span:last-child {
  color: #ccc;
  font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px !important;
  }
  
  .keuangan {
    grid-column: 1 / -1;
    flex-direction: row;
  }
  
  .berita {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 8px !important;
  }
  
  .header {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    height: auto;
  }
  
  .nav {
    justify-content: space-around;
    font-size: 0.8rem;
    gap: 15px;
  }
  
  .search-notif-profile {
    justify-content: space-between;
  }
  
  .search-notif-profile input {
    width: 150px;
  }
  
  .inventaris-cards {
    flex-wrap: wrap;
  }
  
  .card {
    min-width: calc(50% - 6px);
  }
  
  .keuangan {
    flex-direction: column;
  }
}
</style>
