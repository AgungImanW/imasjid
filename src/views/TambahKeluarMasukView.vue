<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" @reset="handleReset" class="form-card">
      <h2 class="form-title">Tambah Keluar Masuk Inventaris</h2>
      
      <div class="form-content">
        <div class="form-column single-column">
          <div class="form-group">
            <label for="nama" class="form-label">Nama</label>
            <input
              id="nama"
              v-model="form.nama"
              type="text"
              placeholder="Masukan Nama Barang"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="jumlah" class="form-label">Jumlah</label>
            <input
              id="jumlah"
              v-model="form.jumlah"
              type="text"
              placeholder="Masukan Jumlah Barang"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="tanggal" class="form-label">Tanggal</label>
            <input
              id="tanggal"
              v-model="form.tanggal"
              type="text"
              placeholder="Masukan Tanggal"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="status" class="form-label">Status</label>
            <div class="select-container">
              <select
                id="status"
                v-model="form.status"
                class="form-select"
              >
                <option value="" disabled>Pilih Status</option>
                <option value="masuk">Masuk</option>
                <option value="keluar">Keluar</option>
              </select>
              <div class="select-arrow">▼</div>
            </div>
          </div>
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
  name: 'FormTambahInventaris',
  setup() {
    const router = useRouter()

    // Reactive form data
    const form = reactive({
      nama: '',
      jumlah: '',
      tanggal: '',
      status: ''
    })
    
    // Methods
    const handleSubmit = async () => {
      // Validasi form
      if (!form.nama || !form.jumlah || !form.tanggal || !form.status) {
        alert('Nama, jumlah, tanggal, dan status harus diisi!')
        return
      }

      // Prepare data keluar masuk
      const newMovement = {
        itemName: form.nama,
        date: form.tanggal,
        status: form.status,
        statusClass: form.status === 'masuk' ? 'status-masuk' : 'status-keluar'
      }

      // Simpan ke local storage
      const existingMovements = JSON.parse(localStorage.getItem('movementList') || '[]')
      existingMovements.push(newMovement)
      localStorage.setItem('movementList', JSON.stringify(existingMovements))
      
      alert('Data keluar masuk berhasil ditambahkan!')
      
      // Redirect ke halaman inventaris
      router.push('/inventaris')
    }
    
    const handleReset = () => {
      // Reset form data
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      // Navigate back to inventory page
      router.push('/inventaris')
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