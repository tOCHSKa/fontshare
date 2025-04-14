<template>
  <div class="bg-gray-900 text-gray-100 min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// tu peux aussi définir des choses globales ici
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s ease;
  margin: 0;
}
.gradient-text-filled {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.font-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}
</style>
