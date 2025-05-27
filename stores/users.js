import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'


export const useUserStore = defineStore('user', {
  state: () => ({
    email: null,
    isAdmin: false,
    isLogged: false,
    password: null,
    token: null,
    message: 'null',
  }),

  getters: {
    getEmail: (state) => state.email,
    getIsAdmin: (state) => state.isAdmin,
    getIsLogged: (state) => state.isLogged,
    getToken: (state) => state.token,
    getMessage: (state) => state.message,
  },

  actions: {
    setUser({ token, email, isAdmin }) {
      this.token = token
      this.email = email
      this.isAdmin = isAdmin
      this.isLogged = true
      localStorage.setItem('token', token)
    },
    logout() {
      this.isLogged = false
      this.email = null
      this.isAdmin = false
      this.token = null
      localStorage.removeItem('token')
    },

    // Optionnellement, une fonction pour réinitialiser l'état en vérifiant le localStorage au démarrage
    initializeState() {
      const savedToken = localStorage.getItem('token')
      if (savedToken) {
        try {
          const decodedToken = jwtDecode(savedToken)
          this.token = savedToken
          this.email = decodedToken.email
          this.isAdmin = decodedToken.role === 'admin'
          this.isLogged = true
        } catch (error) {
          console.error('Token invalide:', error)
          this.logout()
        }
      }
    },
  },
})

