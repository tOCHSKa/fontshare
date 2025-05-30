<template>
      <!-- Featured Article -->
      <section class="py-10 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div class="md:flex">
                    <div class="md:w-2/3 p-8 md:p-12">
                        <div class="flex items-center mb-4">
                            <span class="bg-indigo-900 text-indigo-300 text-xs px-3 py-1 rounded-full">À la une</span>
                            <span class="text-gray-400 text-sm ml-3">Publié le 15 juin 2023</span>
                        </div>
                        <h2 class="text-3xl font-bold mb-4">Les 10 tendances typographiques de 2023</h2>
                        <p class="text-gray-300 mb-6">
                            Découvrez les mouvements qui façonnent le design cette année, des polices variables aux expérimentations audacieuses. Une analyse complète avec des exemples concrets.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <p class="font-medium">Émilie Laurent</p>
                                <p class="text-sm text-gray-400">Designer typographique</p>
                            </div>
                        </div>
                        <a href="#" class="mt-6 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition">
                            Lire l'article <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    <div class="md:w-1/3 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'); min-height: 300px;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
        body {
            font-family: 'Inter', sans-serif;
            transition: background-color 0.3s ease;
        }
        
        .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        
        .article-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .tag:hover {
            transform: scale(1.05);
        }
        
        .search-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
        }
        
        .featured-article {
            background: linear-gradient(135deg, rgba(80, 72, 229, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%);
        }
</style>