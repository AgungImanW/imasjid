<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" @reset="handleReset" class="form-card">
      <h2 class="form-title">Edit Penyumbang Inventaris</h2>
      
      <div class="form-content">
        <div class="form-row">
          <div class="form-group full-width">
            <label for="penyumbang" class="form-label">Nama Penyumbang</label>
            <input
              id="penyumbang"
              v-model="form.penyumbang"
              type="text"
              placeholder="Masukan Nama Penyumbang"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label for="noTelefon" class="form-label">No. Telepon</label>
            <input
              id="noTelefon"
              v-model="form.noTelefon"
              type="tel"
              placeholder="Masukan Nomor Telepon"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label for="namaBarang" class="form-label">Nama Barang</label>
            <input
              id="namaBarang"
              v-model="form.namaBarang"
              type="text"
              placeholder="Masukan Nama Barang"
              class="form-input"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label for="jumlahBarang" class="form-label">Jumlah Barang</label>
            <input
              id="jumlahBarang"
              v-model="form.jumlahBarang"
              type="number"
              placeholder="Masukan Jumlah Barang"
              class="form-input"
              min="1"
            />
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
  name: 'FormTambahPenyumbangInventaris',
  setup() {
    const router = useRouter()
    const route = useRoute()

    // Reactive form data
    const form = reactive({
      penyumbang: '',
      noTelefon: '',
      namaBarang: '',
      jumlahBarang: ''
    })
    
    // Load existing data
    onMounted(() => {
      const donorId = route.params.id
      const donorList = JSON.parse(localStorage.getItem('donorList') || '[]')
      const donor = donorList[donorId]

      if (donor) {
        form.penyumbang = donor.penyumbang
        form.noTelefon = donor.noTelefon
        form.namaBarang = donor.namaBarang
        form.jumlahBarang = parseInt(donor.jumlahBarang)
      } else {
        router.push('/inventaris')
      }
    })

    // Methods
    const handleSubmit = async () => {
      // Validasi form
      if (!form.penyumbang || !form.namaBarang) {
        alert('Nama penyumbang dan nama barang harus diisi!')
        return
      }
      
      // Validasi nomor telepon
      if (form.nomorTelepon && !/^[0-9+\-\s()]+$/.test(form.nomorTelepon)) {
        alert('Format nomor telepon tidak valid!')
        return
      }
      
      // Validasi jumlah
      if (form.jumlah && (isNaN(form.jumlah) || parseInt(form.jumlah) <= 0)) {
        alert('Jumlah harus berupa angka positif!')
        return
      }

      // Update data penyumbang
      const donorId = route.params.id
      const donorList = JSON.parse(localStorage.getItem('donorList') || '[]')
      
      if (donorList[donorId]) {
        donorList[donorId] = {
          penyumbang: form.penyumbang,
          noTelefon: form.noTelefon,
          namaBarang: form.namaBarang,
          jumlahBarang: `${form.jumlahBarang} Buah`,
          tanggal_sumbangan: donorList[donorId].tanggal_sumbangan
        }
        
        localStorage.setItem('donorList', JSON.stringify(donorList))
        alert('Data penyumbang berhasil diperbarui!')
      }
      

      
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