<template>
    <Navigation />
    <DefineFontView :fontName="route.params.font" />
    <FooterComponent />
</template>
  
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style scoped>
</style>
  