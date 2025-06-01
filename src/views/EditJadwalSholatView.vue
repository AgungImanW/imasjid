<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" @reset="handleReset" class="form-card">
      <h2 class="form-title">Edit Jadwal dan Imam</h2>
      
      <div class="form-content">
        <div class="form-group">
          <label for="sholat" class="form-label">Sholat</label>
          <input
            id="sholat"
            v-model="form.nama"
            type="text"
            placeholder="Masukan Jenis Sholat"
            class="form-input"
            readonly
          />
        </div>
        
        <div class="form-group">
          <label for="waktu" class="form-label">Waktu</label>
          <input
            id="waktu"
            v-model="form.jam"
            type="text"
            placeholder="Masukan Waktu"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="imam" class="form-label">Imam</label>
          <input
            id="imam"
            v-model="form.imam"
            type="text"
            placeholder="Masukan Nama Imam"
            class="form-input"
          />
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="form-actions">
        <button type="reset" class="btn-cancel" @click="goBack">
          Batalkan
        </button>
        <button type="submit" class="btn-submit">
          Ubah
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditJadwalImam',
  data() {
    return {
      form: {
        nama: '',
        jam: '',
        imam: '',
        index: null
      }
    }
  },
  created() {
    // Get data from route query
    if (this.$route.query) {
      this.form.index = parseInt(this.$route.query.index)
      this.form.nama = this.$route.query.nama || ''
      this.form.jam = this.$route.query.jam || ''
      this.form.imam = this.$route.query.imam || ''
    }
  },
  methods: {
    handleSubmit() {
      // Validasi form
      if (!this.form.nama || !this.form.jam || !this.form.imam) {
        alert('Semua field harus diisi!')
        return
      }

      // Load existing data from localStorage
      let jadwalSholat = JSON.parse(localStorage.getItem('jadwalSholat')) || [
        { icon: "🌤️", nama: "Subuh", jam: "04.14", imam: "Ust. Jalaluddin" },
        { icon: "☀️", nama: "Dzuhur", jam: "11.29", imam: "Ust. Jalaluddin" },
        { icon: "🌥️", nama: "Ashar", jam: "14.50", imam: "Ust. Jalaluddin" },
        { icon: "🌇", nama: "Maghrib", jam: "17.22", imam: "Ust. Jalaluddin" },
        { icon: "🌙", nama: "Isya", jam: "18.34", imam: "Ust. Jalaluddin" }
      ];

      // Update the specific jadwal
      if (this.form.index !== null && this.form.index >= 0 && this.form.index < jadwalSholat.length) {
        jadwalSholat[this.form.index].jam = this.form.jam
        jadwalSholat[this.form.index].imam = this.form.imam
      }

      // Save back to localStorage
      localStorage.setItem('jadwalSholat', JSON.stringify(jadwalSholat))
      
      alert('Data jadwal berhasil diubah!')
      
      // Redirect back to kegiatan page
      this.$router.push('/kegiatan')
    },
    
    handleReset() {
      // Reset form data to original values
      this.form.jam = this.$route.query.jam || ''
      this.form.imam = this.$route.query.imam || ''
    },
    
    goBack() {
      this.$router.push('/kegiatan')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.container {
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.form-card {
  max-width: 700px;
  width: 100%;
  background: transparent;
  border: 1px solid #6b7280;
  border-radius: 12px;
  padding: 32px;
  color: white;
}

.form-title {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 32px;
  margin-top: 0;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  color: white;
}

.form-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #6b7280;
  font-size: 12px;
  color: white;
  padding: 8px 0;
  outline: none;
}

.form-input[readonly] {
  color: #888;
  border-bottom: 1px dashed #6b7280;
}

.form-input::placeholder {
  color: rgba(117, 117, 117, 0.6);
}

.form-input:focus {
  border-bottom-color: #9ca3af;
}

.form-actions {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}

.btn-cancel {
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  padding: 8px 24px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover {
  background: white;
  color: black;
}

.btn-submit {
  font-size: 12px;
  font-weight: 600;
  background: #5A4B43;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 8px 24px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background: #7a665d;
}
</style>