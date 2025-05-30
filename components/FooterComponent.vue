<template>
    <footer class="bg-gray-800 py-12 px-6 border-t border-gray-700">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-font text-2xl text-indigo-400"></i>
                        <span
                            class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 gradient-text-filled">OpenFontsHub</span>
                    </div>
                    <p class="text-gray-400">
                        La plateforme ultime pour découvrir et partager des polices typographiques uniques.
                    </p>
                    <div class="flex space-x-4 mt-6">
                        <NuxtLink
                            to="https://www.linkedin.com/in/kevin-ubeda-400045292/"
                            target="_blank"
                            class="text-gray-400 hover:text-indigo-400 transition"
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-linkedin"></i>
                            <span class="sr-only">LinkedIn</span>
                        </NuxtLink>
                        <NuxtLink
                            to="https://github.com/tOCHSKa"
                            target="_blank"
                            class="text-gray-400 hover:text-indigo-400 transition"
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-github"></i>
                            <span class="sr-only">GitHub</span>
                        </NuxtLink>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                    <ul class="space-y-2">
                        <li><NuxtLink to="/" class="text-gray-400 hover:text-indigo-300 transition">Accueil</NuxtLink></li>
                        <li><NuxtLink to="/explore" class="text-gray-400 hover:text-indigo-300 transition">Explorer</NuxtLink></li>
                        <li><NuxtLink to="/blog" class="text-gray-400 hover:text-indigo-300 transition">Blog</NuxtLink></li>
                        <li><NuxtLink to="/collections" class="text-gray-400 hover:text-indigo-300 transition">Collections</NuxtLink></li>
                        <li><NuxtLink to="/about" class="text-gray-400 hover:text-indigo-300 transition">À propos</NuxtLink></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Ressources</h3>
                    <ul class="space-y-2">
                        <li><NuxtLink to="/docs" class="text-gray-400 hover:text-indigo-300 transition">Documentation</NuxtLink></li>
                        <li><NuxtLink to="/faq" class="text-gray-400 hover:text-indigo-300 transition">FAQ</NuxtLink></li>
                        <li><NuxtLink to="/licences" class="text-gray-400 hover:text-indigo-300 transition">Licences</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="text-gray-400 hover:text-indigo-300 transition">Contact</NuxtLink></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                    <p class="text-gray-400 mb-4">
                        Abonnez-vous pour recevoir les dernières polices et mises à jour.
                    </p>
                    <div class="flex">
                        <input type="email" placeholder="Votre email"
                            class="py-2 px-4 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
                        <button aria-label="Envoyer" class="cursor-pointer bg-indigo-600 hover:bg-indigo-700 px-4 rounded-r-md transition">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                    © 2025 OpenFontsHub. Tous droits réservés.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <NuxtLink to="/terms" class="text-gray-400 hover:text-indigo-300 text-sm transition">Conditions
                        d'utilisation</NuxtLink>
                    <NuxtLink to="/privacy" class="text-gray-400 hover:text-indigo-300 text-sm transition">Politique de
                        confidentialité</NuxtLink>
                    <NuxtLink to="/cookies" class="text-gray-400 hover:text-indigo-300 text-sm transition">Cookies</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.sr-only {
  position: absolute !important;
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  white-space: nowrap; 
  border: 0;
}

</style>