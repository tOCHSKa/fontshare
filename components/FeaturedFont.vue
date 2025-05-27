<template>
    <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center mb-10">
                <h2 class="text-3xl font-bold">Polices en vedette</h2>
                <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center">
                    Voir tout <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Font Card 1 -->
                <div
                    class="font-card cursor-pointer bg-gray-800 rounded-xl p-6 border border-gray-700 transition duration-300 hover:border-indigo-500">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold" style="font-family: 'Montserrat'">Montserrat</h3>
                        <div class="flex space-x-2">
                            <span class="bg-gray-700 text-xs px-2 py-1 rounded">Sans-serif</span>
                            <span class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Gratuit</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6" style="font-family: 'Montserrat'">
                        Une police géométrique moderne avec une touche élégante, parfaite pour les titres et les textes.
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                <i class="fas fa-user text-xs"></i>
                            </div>
                            <span class="text-sm">Julieta Ulanovsky</span>
                        </div>
                        <div class="flex space-x-3">
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="far fa-heart"></i> 245
                            </button>
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Font Card 2 -->
                <div
                    class="font-card cursor-pointer bg-gray-800 rounded-xl p-6 border border-gray-700 transition duration-300 hover:border-indigo-500">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold" style="font-family: 'Poppins'">Poppins</h3>
                        <div class="flex space-x-2">
                            <span class="bg-gray-700 text-xs px-2 py-1 rounded">Sans-serif</span>
                            <span class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Gratuit</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6" style="font-family: 'Poppins'">
                        Une police géométrique sans empattement avec des formes uniformes et rondes, idéale pour
                        l'interface.
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                                <i class="fas fa-user text-xs"></i>
                            </div>
                            <span class="text-sm">Indian Type Foundry</span>
                        </div>
                        <div class="flex space-x-3">
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="far fa-heart"></i> 189
                            </button>
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Font Card 3 -->
                <div
                    class="font-card cursor-pointer bg-gray-800 rounded-xl p-6 border border-gray-700 transition duration-300 hover:border-indigo-500">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold" style="font-family: 'Playfair Display'">Playfair Display</h3>
                        <div class="flex space-x-2">
                            <span class="bg-gray-700 text-xs px-2 py-1 rounded">Serif</span>
                            <span class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Gratuit</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6" style="font-family: 'Playfair Display'">
                        Une police serif transitionnelle avec des contrastes élevés, inspirée par le 18ème siècle.
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                                <i class="fas fa-user text-xs"></i>
                            </div>
                            <span class="text-sm">Claus Eggers Sørensen</span>
                        </div>
                        <div class="flex space-x-3">
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="far fa-heart"></i> 312
                            </button>
                            <button class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    
</style>