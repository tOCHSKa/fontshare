<template>
      <!-- Hero Section -->
      <section class="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Le <span class="bg-gradient-to-r from-indigo-400 to-purple-500 gradient-text">Blog</span> Typographique
            </h1>
            <p class="text-xl text-gray-300 mb-10">
                Conseils, tendances et analyses sur le monde des polices et du design typographique.
            </p>
            
            <div class="max-w-2xl mx-auto relative">
                <input type="text" placeholder="Rechercher des articles..."
                    class="w-full py-3 px-6 rounded-full bg-gray-700 border border-gray-600 focus:border-indigo-500 text-white placeholder-gray-400 search-input pr-16">
                <button aria-label="Rechercher" class="cursor-pointer absolute right-[5px] top-[5px] w-[40px] bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition">
                    <i class="fas fa-search"></i>
                </button>
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