<template>
    <Navigation />
    <Register />
    <FooterComponent/>
</template>
<script setup>

</script>
<style lang="scss" scoped>

body {
    .login-card {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease;
    }

    .login-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 30px 60px -12px rgba(79, 70, 229, 0.3);
    }

    .input-field:focus {
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
    }
}
</style>