<template>
  <div class="container">
    <!-- Gambar kiri -->
    <div class="left-side">
      <img src="@/assets/masjid.jpg" alt="Masjid" class="masjid-img" />
    </div>

    <!-- Form kanan -->
    <div class="right-side">
      <div class="form-container">
        <h2 class="login-title">Login</h2>
        
        <div class="logo-container">
          <img src="@/assets/icon/mosque-logo.png" alt="iMasjidHub" class="logo-img" />
          <span class="logo-text">iMasjidHub</span>
        </div>
        
        <form @submit.prevent="login" class="login-form">
          <div class="input-container">
            <div class="input-group">
              <img src="@/assets/icon/email.jpg" alt="Email" class="input-icon" />
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email here"
                required
              />
            </div>
          </div>
          
          <div class="input-container">
            <div class="input-group">
              <img src="@/assets/icon/lock.jpg" alt="Password" class="input-icon" />
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Enter your password here"
                required
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="eye-button"
              >
                <img 
                  :src="require(`@/assets/icon/${showPassword ? 'eye1' : 'eye2'}.png`)"
                  :alt="showPassword ? 'Hide Password' : 'Show Password'"
                  class="eye-icon" 
                />
              </button>
            </div>
          </div>
          
          <button type="submit" class="login-btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    login() {
      // Cek apakah email dan password sudah terisi
      if (this.email && this.password) {
        alert(`Login sebagai ${this.email}`);
        // Setelah login berhasil, arahkan ke dashboard
        this.$router.push('/dashboard');
      } else {
        alert('Email atau password tidak boleh kosong');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  color: white;
}

/* Left side with mosque image */
.left-side {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.masjid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Right side with login form */
.right-side {
  width: 40%;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

.form-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 8px 16px;
  margin-bottom: 30px;
}

.logo-img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.logo-text {
  font-size: 14px;
  font-weight: 500;
}

.login-form {
  width: 100%;
}

.input-container {
  margin-bottom: 16px;
  width: 100%;
}

.input-group {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  padding: 12px 16px;
  position: relative;
  overflow: hidden;
}

.input-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.input-group input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  outline: none;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none !important;
}

.password-input {
  padding-right: 40px !important;
  -webkit-text-security: disc !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
}

.password-input::-ms-reveal,
.password-input::-ms-clear,
.password-input::-webkit-contacts-auto-fill-button,
.password-input::-webkit-credentials-auto-fill-button,
.password-input::-webkit-inner-spin-button,
.password-input::-webkit-outer-spin-button,
.password-input::-webkit-search-cancel-button {
  display: none !important;
  -webkit-appearance: none !important;
  margin: 0;
}

.eye-button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.eye-icon {
  width: 24px;
  height: 24px;
  opacity: 0.7;
  transition: opacity 0.3s;
  filter: invert(1);
}

.eye-button:hover .eye-icon {
  opacity: 1;
}

.login-btn {
  width: 100%;
  background-color: #7B6F63;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #8a7c6e;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .right-side {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .left-side {
    display: none;
  }
  
  .right-side {
    width: 100%;
    height: 100vh;
    padding: 40px 20px;
  }
}
</style>
