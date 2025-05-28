<template>
    <section class="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 gradient-text">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">Prêt à explorer le monde des polices ?</h2>
            <p class="text-xl text-white mb-10">
                Rejoignez notre communauté de plus de 50 000 créatifs et accédez à des milliers de polices uniques.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button aria-label="S'inscrire gratuitement"
                    class="cursor-pointer border-2 border-white bg-white text-indigo-800 hover:bg-indigo-800 hover:border-indigo-800 hover:bg-opacity-10 hover:text-white px-8 py-4 rounded-md font-bold text-lg transition">
                    S'inscrire gratuitement
                </button>
                <button aria-label="Voir les polices"
                    class="cursor-pointer border-2 border-white text-white hover:bg-white hover:text-indigo-800 hover:border-indigo-800
                    hover:bg-opacity-10 px-8 py-4 rounded-md font-bold text-lg transition">
                    Voir les polices
                </button>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.gradient-text {
    margin: 0;
    background: linear-gradient(90deg, rgba(125, 133, 255, 1), rgba(172, 73, 255, 1));
    background-size: 200% auto;
    animation: filled 3s ease infinite;
}

@keyframes filled {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
} 
</style>