<template>
    <nav class="bg-gray-800 border-b border-gray-700 py-4 px-6 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
            <i class="fas fa-font text-2xl text-indigo-400"></i>
            <span class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 gradient-text-filled">
              OpenFontsHub
            </span>
          </NuxtLink>
          
          <div class="hidden md:flex space-x-6">
              <NuxtLink to="/explorer" class="hover:text-indigo-300 transition">Explorer</NuxtLink>
              <NuxtLink to="/trends" class="hover:text-indigo-300 transition">Tendances</NuxtLink>
              <NuxtLink to="/collections" class="hover:text-indigo-300 transition">Collections</NuxtLink>
              <NuxtLink to="/about" class="hover:text-indigo-300 transition">À propos</NuxtLink>
          </div>
  
          <div class="flex items-center space-x-4">
            <NuxtLink
            to="/register"
            class="cursor-pointer bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition-all
            hover:scale-105 duration-300"
          >
            Connexion
          </NuxtLink>
          
              <button aria-label="Mode sombre" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition cursor-pointer">
                  <i class="fas fa-moon w-[24px]"></i>
              </button>
          </div>
      </div>
  </nav>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
  
</style>