<template>
    <main class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-extrabold">
                    Créer un compte
                </h2>
                <p class="mt-2 text-sm text-gray-400">
                    Ou <NuxtLink navigateTo="/login" class="font-medium text-indigo-400 hover:text-indigo-300">connectez-vous</NuxtLink>
                </p>
            </div>

            <div class="login-card bg-gray-800 rounded-xl p-8 border border-gray-700">
                <form class="mt-8 space-y-6" id="loginForm">
                <div>
                    <label for="email" class="sr-only">Adresse email</label>
                    <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i class="fas fa-envelope text-gray-500"></i>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        v-model="email"
                        @blur="validateEmail"
                        required
                        class="appearance-none input-field block w-full px-10 py-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Adresse email"
                    />
                    </div>
                </div>

                <!-- Mot de passe -->
                <div>
                    <label for="password" class="sr-only">Mot de passe</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-500"></i>
                        </div>
                        <input
                        id="password"
                        name="password"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                        @blur="validatePassword"
                        required
                        class="input-field block w-full px-10 py-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Mot de passe"
                    />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button aria-label="Afficher/masquer le mot de passe" 
                        type="button"
                        @mousedown="togglePasswordVisibilityOn"
                        @mouseup="togglePasswordVisibilityOff"
                        @mouseleave="togglePasswordVisibilityOff"
                        @touchstart="togglePasswordVisibilityOn"
                        @touchend="togglePasswordVisibilityOff"
                        class="text-gray-400 hover:text-indigo-400"
                        >
                        <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="confirmedPassword" class="sr-only">Mot de passe</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-500"></i>
                        </div>
                        <input
                        id="confirmedPassword"
                        name="confirmedPassword"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="confirmedPassword"
                        @blur="validatePassword"
                        required
                        class="input-field block w-full px-10 py-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Mot de passe"
                    />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button aria-label="Afficher/masquer le mot de passe" 
                        type="button"
                        @mousedown="togglePasswordVisibilityOn"
                        @mouseup="togglePasswordVisibilityOff"
                        @mouseleave="togglePasswordVisibilityOff"
                        @touchstart="togglePasswordVisibilityOn"
                        @touchend="togglePasswordVisibilityOff"
                        class="text-gray-400 hover:text-indigo-400"
                        >
                        <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                        </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="text-xs text-red-400">
                    <p v-if="!isEmailValid">{{ emailError }}</p>
                    <p v-if="isEmailValid" class="text-green-400">{{ emailError }}</p>
                    <p v-if="passwordError">{{ passwordError }}</p>
                    <p v-if="!passwordLengthValid">Le mot de passe doit contenir au moins 8 caractères</p>
                    <p v-if="passwordLengthValid" class="text-green-400">Le mot de passe doit contenir au moins 8 caractères</p>
                    <p v-if="!passwordUppercase">Le mot de passe doit contenir au moins une majuscule</p>
                    <p v-if="passwordUppercase" class="text-green-400">Le mot de passe doit contenir au moins une majuscule</p>
                    <p v-if="!passwordLowercase">Le mot de passe doit contenir au moins une minuscule</p>
                    <p v-if="passwordLowercase" class="text-green-400">Le mot de passe doit contenir au moins une minuscule</p>
                    <p v-if="!passwordNumber">Le mot de passe doit contenir au moins un chiffre</p>
                    <p v-if="passwordNumber" class="text-green-400">Le mot de passe doit contenir au moins un chiffre</p>
                    <p v-if="!passwordSpecial">Le mot de passe doit contenir au moins un caractère spécial</p>
                    <p v-if="passwordSpecial" class="text-green-400">Le mot de passe doit contenir au moins un caractère spécial</p>
                    <p v-if="!isPasswordConfirmed">{{ confirmPasswordError }}</p>
                    <p v-if="isPasswordConfirmed" class="text-green-400">{{ confirmPasswordError }}</p>
                    </div>
                </div>

                <!-- Bouton submit -->
                <div v-if=!isSubmitted>
                    <button aria-label="Créer un compte" 
                    type="submit" @click.prevent="onSubmit"
                    :disabled="!isEmailValid || !passwordLengthValid || !passwordUppercase || !passwordLowercase || !passwordNumber || !passwordSpecial"
                    class="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    :class="{ 'cursor-not-allowed opacity-50 hover:bg-black-700': !isEmailValid || !passwordLengthValid || !passwordUppercase || !passwordLowercase || !passwordNumber || !passwordSpecial,
                        'cursor-pointer': isEmailValid && passwordLengthValid && passwordUppercase && passwordLowercase && passwordNumber && passwordSpecial
                     }"
                    >
                    Créer un compte
                    </button>
                </div>
                <div v-if=isSubmitted>
                    <button aria-label="Créer un compte" type="button" 
                    class="flex items-center justify-center w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled>
                    <svg aria-label="Chargement..." class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                        Chargement...
                    </button>
                </div>
                <div v-if="message" class="w-full" >
                    <p class="w-full text-center text-red-500 mt-2">{{ message }}</p>
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
                        <button aria-label="Se connecter avec Google" type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-google text-red-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                        <button aria-label="Se connecter avec GitHub" type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-github text-gray-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                        <button aria-label="Se connecter avec Twitter" type="button"
                            class="relative w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition group">
                            <i class="fab fa-twitter text-blue-400 group-hover:opacity-20"></i>
                            <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">Non disponible</span>
                        </button>
                    </div>
                </form>
            </div>
            <div class="text-center text-sm text-gray-500">
                En créant un compte, vous acceptez nos <a href="#"
                    class="text-indigo-400 hover:text-indigo-300">Conditions d'utilisation</a> et notre <a href="#"
                    class="text-indigo-400 hover:text-indigo-300">Politique de confidentialité</a>.
            </div>
        </div>
    </main>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { useUserStore } from '~/stores/users'
import { jwtDecode } from 'jwt-decode'
const loginStore = useUserStore()

const email = ref('');
const password = ref('');
const confirmedPassword = ref('');
const showPassword = ref(false);
const passwordUppercase = ref(false);
const passwordLowercase = ref(false);
const passwordNumber = ref(false);
const passwordSpecial = ref(false);
const passwordLengthValid = ref(false);
const isSubmitted = ref(false);
const message = ref('')
const isPasswordConfirmed = ref(false)
const confirmPasswordError = ref('Les mots de passe ne correspondent pas')

// Validation des champs
const passwordError = ref('');

// Validation de l'email
const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email.value);
});

const emailError = computed(() => {
  return isEmailValid.value ? 'L`adresse email est valide' : 'L`adresse email est invalide';
});

// Validation du mot de passe
const passwordStrength = computed(() => {
  return {
    password: password.value,
    uppercase: /[A-Z]/.test(password.value),
    lowercase: /[a-z]/.test(password.value),
    number: /\d/.test(password.value),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password.value),
    lengthValid: password.value.length >= 8
  };
});

watch(confirmedPassword, (newConfirmedPassword) => {
  isPasswordConfirmed.value = password.value === newConfirmedPassword;
  confirmPasswordError.value = isPasswordConfirmed.value ? 'Les mots de passe correspondent' : 'Les mots de passe ne correspondent pas';
});

// Fonction de validation du mot de passe avec un watcher
watch(password, (newPassword) => {
  passwordLengthValid.value = newPassword.length >= 8;
  passwordUppercase.value = /[A-Z]/.test(newPassword);
  passwordLowercase.value = /[a-z]/.test(newPassword);
  passwordNumber.value = /\d/.test(newPassword);
  passwordSpecial.value = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

  // Mise à jour des erreurs
  passwordError.value = '';

  if (!passwordLengthValid.value) {
    passwordLengthValid.value = false;
  }
  if (!passwordUppercase.value) {
    passwordUppercase.value = false;
  }
  if (!passwordLowercase.value) {
    passwordLowercase.value = false;
  }
  if (!passwordNumber.value) {
    passwordNumber.value = false;
  }
  if (!passwordSpecial.value) {
    passwordSpecial.value = false;
  }
});


// Fonction pour soumettre le formulaire
const onSubmit = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value, confirmedpassword: confirmedPassword.value })
    })

    const data = await res.json()
    console.log(data)
    if (!res.ok) {
        message.value = data.message
      return
    } else {
        navigateTo('/login')
    }

    // Redirect or show success
  } catch (err) {
    message.value = 'Erreur réseau ou serveur'
    console.error(err)
  }
}

// Fonction pour afficher ou masquer le mot de passe
const togglePasswordVisibilityOn = () => {
  showPassword.value = true;
};

const togglePasswordVisibilityOff = () => {
  showPassword.value = false;
};

</script>
<style lang="scss" scoped>
    
</style>