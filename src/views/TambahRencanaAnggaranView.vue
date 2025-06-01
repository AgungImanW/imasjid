<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" @reset="handleReset" class="form-card">
      <h2 class="form-title">Tambah Rencana Anggaran</h2>
      
      <div class="form-content">
        <div class="form-group">
          <label for="nama" class="form-label">Nama</label>
          <input
            id="nama"
            v-model="form.nama"
            type="text"
            placeholder="Masukan Nama Rencana Anggaran"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="targetTanggal" class="form-label">Target Tanggal</label>
          <input
            id="targetTanggal"
            v-model="form.targetTanggal"
            type="text"
            placeholder="Masukan Target Tanggal Rencana"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="targetNominal" class="form-label">Target Nominal</label>
          <input
            id="targetNominal"
            v-model="form.targetNominal"
            type="text"
            placeholder="Masukan Target Nominal Anggaran"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="nominalTerkumpul" class="form-label">Nominal Terkumpul</label>
          <input
            id="nominalTerkumpul"
            v-model="form.nominalTerkumpul"
            type="text"
            placeholder="Masukan Nominal Anggaran yang Terkumpul"
            class="form-input"
          />
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="form-actions">
        <button type="reset" class="btn-cancel">
          Batalkan
        </button>
        <button type="submit" class="btn-submit">
          Tambah
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'FormTambahRencanaAnggaran',
  setup() {
    const router = useRouter()

    // Reactive form data
    const form = reactive({
      nama: '',
      targetTanggal: '',
      targetNominal: '',
      nominalTerkumpul: ''
    })
    
    // Methods
    const handleSubmit = async () => {
      // Validasi form
      if (!form.nama || !form.targetTanggal || !form.targetNominal) {
        alert('Nama, target tanggal, dan target nominal harus diisi!')
        return
      }
      
      // Prepare data rencana anggaran
      const newRencanaAnggaran = {
        nama: form.nama,
        targetTanggal: form.targetTanggal,
        targetNominal: form.targetNominal,
        nominalTerkumpul: form.nominalTerkumpul || '0'
      }

      // Simpan ke local storage untuk sementara
      const existingRencana = JSON.parse(localStorage.getItem('rencanaAnggaranList') || '[]')
      existingRencana.push(newRencanaAnggaran)
      localStorage.setItem('rencanaAnggaranList', JSON.stringify(existingRencana))
      
      alert('Data rencana anggaran berhasil ditambahkan!')
      
      // Redirect ke halaman keuangan
      router.push('/keuangan')
    }
    
    const handleReset = () => {
      // Reset form data
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      // Navigate back to inventory page
      router.push('/keuangan')
    }
    
    return {
      form,
      handleSubmit,
      handleReset
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
  max-width: 800px;
  width: 100%;
  background: transparent;
  border: 1px solid #6b7280;
  border-radius: 8px;
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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.full-width {
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
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