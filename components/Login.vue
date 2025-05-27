<template>
    <main class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-extrabold">
                    Connectez-vous à votre compte
                </h2>
                <p class="mt-2 text-sm text-gray-400">
                    Ou <NuxtLink to="/register" class="font-medium text-indigo-400 hover:text-indigo-300">créez un compte gratuit</NuxtLink>
                </p>
            </div>

            <div class="login-card bg-gray-800 rounded-xl p-8 border border-gray-700">
                <form class="mt-8 space-y-6" id="loginForm">
                    <input type="hidden" name="remember" value="true">

                    <div class="rounded-md shadow-sm space-y-4">
                        <div>
                            <label for="email" class="sr-only">Adresse email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-envelope text-gray-500"></i>
                                </div>
                                <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                                    class="input-field appearance-none block w-full px-10 py-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Adresse email">
                            </div>
                        </div>

                        <div>
                            <label for="password" class="sr-only">Mot de passe</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-lock text-gray-500"></i>
                                </div>
                                <input id="password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password"
                                    required v-model="password"
                                    class="input-field appearance-none block w-full px-10 py-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Mot de passe">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type="button" @click="togglePasswordVisibility"
                                        class="text-gray-400 hover:text-indigo-400">
                                        <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between flex-col lg:flex-row">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" v-model="rememberMe"
                                class="h-4 w-4 bg-gray-700 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-300">
                                Se souvenir de moi
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" @click="handleSubmit"
                            class="group cursor-pointer relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <i class="fas fa-sign-in-alt text-indigo-300 group-hover:text-indigo-200"></i>
                            </span>
                            Se connecter
                        </button>
                    </div>

                    <div class="relative mt-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-gray-800 text-gray-400">
                                Ou continuez avec
                            </span>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-3">
                        <button type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-google text-red-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                        <button type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-github text-gray-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                        <button type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-twitter text-blue-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                    </div>
                </form>
            </div>
            <div class="text-center text-sm text-gray-500">
                En vous connectant, vous acceptez nos <a href="#"
                    class="text-indigo-400 hover:text-indigo-300">Conditions d'utilisation</a> et notre <a href="#"
                    class="text-indigo-400 hover:text-indigo-300">Politique de confidentialité</a>.
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)   
const showPassword = ref(false)
const errors = ref({
    email: '',
    password: ''
})
const isLoading = ref(false)

const isValidEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.value)
})

const isValidPassword = computed(() => {
    return password.value.length >= 8
})

const isFormValid = computed(() => {
    return isValidEmail.value && isValidPassword.value
})

const validateForm = () => {
    errors.value = {
        email: '',
        password: ''
    }

    if (!email.value) {
        errors.value.email = 'L\'email est requis'
    } else if (!isValidEmail.value) {
        errors.value.email = 'L\'email n\'est pas valide'
    }

    if (!password.value) {
        errors.value.password = 'Le mot de passe est requis'
    } else if (!isValidPassword.value) {
        errors.value.password = 'Le mot de passe doit contenir au moins 8 caractères'
    }

    return Object.values(errors.value).every(error => !error)
}

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
        return
    }

    isLoading.value = true
    
    try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        console.log('Formulaire soumis avec succès', {
            email: email.value,
            password: password.value,
            rememberMe: rememberMe.value
        })
        
        // Réinitialiser le formulaire après succès
        email.value = ''
        password.value = ''
        rememberMe.value = false
        
    } catch (error) {
        console.error('Erreur lors de la soumission:', error)
    } finally {
        isLoading.value = false
    }
}
</script>
<style lang="scss" scoped>
    
</style>