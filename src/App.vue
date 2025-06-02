<template>
  <!-- <div>
    Loading Icon
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-icon">
        <img src="@/assets/loading.gif" alt="Loading...">
      </div>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/img/logo/menozar-removebg-preview.png" alt="logo">
          <span class="ms-2 fw-bold text-dark">MENOZAR</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/">Buy</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/privacy">Privacy</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link text-dark dropdown-toggle" to="#" id="languageDropdown">
                <img id="selected-flag" src="./assets/img/flags/uk-flag.jpg" alt="UK Flag" width="20">
                <span id="selected-language">UK English</span>
              </router-link>
              <ul class="dropdown-menu" id="language-menu">
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('en', 'UK English', 'uk-flag.jpg')">
                  <img src="./assets/img/flags/uk-flag.jpg" alt="UK Flag" width="20"> UK English</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('en-us', 'US English', 'us-flag.png')">
                  <img src="./assets/img/flags/us-flag.png" alt="US Flag" width="20"> US English</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('fr', 'Français', 'france-flag.png')">
                  <img src="./assets/img/flags/france-flag.png" alt="France Flag" width="20"> Français</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('es', 'Español', 'spain-flag.png')">
                  <img src="./assets/img/flags/spain-flag.png" alt="Spain Flag" width="20"> Español</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('de', 'Deutsch', 'germany-flag.png')">
                  <img src="./assets/img/flags/germany-flag.png" alt="Germany Flag" width="20"> Deutsch</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('ig', 'Igbo', 'nigeria-flag.png')">
                  <img src="./assets/img/flags/nigeria-flag.png" alt="Nigeria Flag" width="20"> Igbo</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('yo', 'Yoruba', 'nigeria-flag.png')">
                  <img src="./assets/img/flags/nigeria-flag.png" alt="Nigeria Flag" width="20"> Yoruba</router-link></li>
                <li><router-link class="dropdown-item" to="#" onclick="changeLanguage('ha', 'Hausa', 'nigeria-flag.png')">
                  <img src="./assets/img/flags/nigeria-flag.png" alt="Nigeria Flag" width="20"> Hausa</router-link></li>
              </ul>
            </li>
          </ul>
          <div class="d-flex align-items-center ms-3">
            <button id="darkModeToggle" class="btn btn-outline-secondary me-2" @click="toggleDarkMode">
              <i :class="darkModeIcon"></i>
            </button>
            <button class="btn btn-success text-white" id="loginBtn">
              Login
            </button>
            <!-- Modal for Login Form -->
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form id="loginForm">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                      </div>
                      <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                      </div>
                      <div class="d-flex justify-content-center my-3">
                        <button type="submit" class="btn btn-success w-50">Submit</button>
                      </div>
                    </form>
                    <!-- Google Login Button -->
                    <div class="d-flex justify-content-center my-3">
                      <button class="btn btn-danger w-100 align-items-center justify-content-center" id="googleLoginBtn">
                        <i class="fab fa-google me-2"></i>Login with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer class="text-center p-4 text-secondary">
      © {{ new Date().getFullYear() }} Menozar. All rights reserved.
    </footer>
  <!-- </div> -->
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      darkMode: localStorage.getItem('darkMode') === 'enabled',
      isLoading: ref(true)
    }
  },
  computed: {
    darkModeIcon () {
      return this.darkMode ? 'fas fa-sun' : 'fas fa-moon'
    }
  },
  methods: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode
      document.body.classList.toggle('dark-mode', this.darkMode)
      localStorage.setItem('darkMode', this.darkMode ? 'enabled' : 'disabled')
    }
  },
  mounted () {
    if (this.darkMode) {
      document.body.classList.add('dark-mode')
    }
    setTimeout(() => {
      this.isLoading = false
    }, 3000) // Simulate loading time
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';

.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

/* .loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
}

.loading-icon {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
