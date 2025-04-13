<template>
<section class="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez, partagez et <span
                class="bg-gradient-to-r from-indigo-400 to-purple-500 gradient-text">collectionnez</span> des
            polices
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            La plus grande communauté de partage de polices typographiques. Trouvez la police parfaite pour votre
            prochain projet.
        </p>

        <div class="max-w-2xl mx-auto relative">
            <input type="text" placeholder="Rechercher une police..."
                class="w-full py-4 px-6 rounded-full bg-gray-700 border border-gray-600 focus:border-indigo-500 text-white placeholder-gray-400 search-input pr-16">
            <button class="absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition w-[40px]">
                <i class="fas fa-search"></i>
            </button>
        </div>

        <div class="mt-8 flex justify-center space-x-4">
            <span class="text-gray-400">Populaire :</span>
            <a href="#" class="text-indigo-300 hover:text-indigo-200">Montserrat</a>
            <a href="#" class="text-indigo-300 hover:text-indigo-200">Poppins</a>
            <a href="#" class="text-indigo-300 hover:text-indigo-200">Roboto</a>
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
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
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