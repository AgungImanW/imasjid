<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" @reset="handleReset" class="form-card">
      <h2 class="form-title">Edit Keluar Masuk Inventaris</h2>
      
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
          Ubah
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'FormEditKeluarMasuk',
  setup() {
    const router = useRouter()
    const route = useRoute()

    // Reactive form data
    const form = reactive({
      nama: '',
      jumlah: '',
      tanggal: '',
      status: ''
    })
    
    // Load existing data saat component mounted
    onMounted(() => {
      const movementId = route.params.id
      const movementList = JSON.parse(localStorage.getItem('movementList') || '[]')
      const movement = movementList[movementId]

      if (movement) {
        // Map data existing ke form
        form.nama = movement.itemName || ''
        form.jumlah = movement.quantity || movement.jumlah || '' // Check both possible field names
        form.tanggal = movement.date || ''
        form.status = movement.status || ''
      } else {
        alert('Data keluar masuk tidak ditemukan!')
        router.push('/inventaris')
      }
    })
    
    // Methods
    const handleSubmit = async () => {
      // Validasi form
      if (!form.nama || !form.tanggal || !form.status) {
        alert('Nama, tanggal, dan status harus diisi!')
        return
      }

      // Update data keluar masuk
      const movementId = route.params.id
      const movementList = JSON.parse(localStorage.getItem('movementList') || '[]')
      
      if (movementList[movementId]) {
        // Update data existing dengan struktur konsisten
        movementList[movementId] = {
          itemName: form.nama,
          quantity: form.jumlah, // Gunakan 'quantity' untuk konsistensi
          date: form.tanggal,
          status: form.status,
          statusClass: form.status === 'masuk' ? 'status-masuk' : 'status-keluar'
        }
        
        localStorage.setItem('movementList', JSON.stringify(movementList))
        alert('Data keluar masuk berhasil diperbarui!')
      } else {
        alert('Data tidak ditemukan!')
        router.push('/inventaris')
        return
      }
      
      // Redirect ke halaman inventaris
      router.push('/inventaris')
    }
    
    const handleReset = () => {
      // Reset form data dan kembali ke halaman inventaris
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

.select-container {
  position: relative;
  width: 100%;
}

.form-select {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #6b7280;
  font-size: 12px;
  color: white;
  padding: 8px 0;
  outline: none;
  cursor: pointer;
  appearance: none;
}

.form-select:focus {
  border-bottom-color: #9ca3af;
}

.form-select option {
  background-color: #121212;
  color: white;
}

.form-select option:disabled {
  color: rgba(117, 117, 117, 0.6);
}

.select-arrow {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  font-size: 10px;
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