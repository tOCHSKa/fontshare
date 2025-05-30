<template>
      <!-- Main Content -->
      <section class="py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Articles List -->
                <div class="md:w-2/3">
                    <h2 class="text-2xl font-bold mb-8">Derniers articles</h2>
                    
                    <!-- Article 1 -->
                    <article class="article-card bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 transition duration-300 hover:border-indigo-500">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-1/3">
                                <div class="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="Combiner les polices" class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div class="md:w-2/3">
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Conseils</span>
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Typographie</span>
                                </div>
                                <h3 class="text-xl font-bold mb-2">L'art de combiner les polices</h3>
                                <p class="text-gray-400 mb-4 text-sm">
                                    Apprenez les principes fondamentaux pour créer des associations de polices harmonieuses qui améliorent vos designs.
                                </p>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-2">
                                            <i class="fas fa-user text-xs"></i>
                                        </div>
                                        <span class="text-sm">Marc Dubois</span>
                                    </div>
                                    <span class="text-sm text-gray-500">12 juin 2023 · 8 min</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Article 2 -->
                    <article class="article-card bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 transition duration-300 hover:border-indigo-500">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-1/3">
                                <div class="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="Polices variables" class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div class="md:w-2/3">
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Technique</span>
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Web</span>
                                </div>
                                <h3 class="text-xl font-bold mb-2">Guide complet des polices variables</h3>
                                <p class="text-gray-400 mb-4 text-sm">
                                    Tout ce que vous devez savoir sur les polices variables : avantages, implémentation et cas d'utilisation pratiques.
                                </p>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                                            <i class="fas fa-user text-xs"></i>
                                        </div>
                                        <span class="text-sm">Sophie Martin</span>
                                    </div>
                                    <span class="text-sm text-gray-500">5 juin 2023 · 12 min</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Article 3 -->
                    <article class="article-card bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 transition duration-300 hover:border-indigo-500">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-1/3">
                                <div class="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80" alt="Histoire typographique" class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div class="md:w-2/3">
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Histoire</span>
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Culture</span>
                                </div>
                                <h3 class="text-xl font-bold mb-2">L'évolution de la typographie française</h3>
                                <p class="text-gray-400 mb-4 text-sm">
                                    Un voyage à travers les siècles pour comprendre comment la France a influencé le design typographique moderne.
                                </p>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                                            <i class="fas fa-user text-xs"></i>
                                        </div>
                                        <span class="text-sm">Jean Lefèvre</span>
                                    </div>
                                    <span class="text-sm text-gray-500">28 mai 2023 · 15 min</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Article 4 -->
                    <article class="article-card bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700 transition duration-300 hover:border-indigo-500">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="md:w-1/3">
                                <div class="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Accessibilité" class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div class="md:w-2/3">
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">Accessibilité</span>
                                    <span class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">UI/UX</span>
                                </div>
                                <h3 class="text-xl font-bold mb-2">Typographie et accessibilité : meilleures pratiques</h3>
                                <p class="text-gray-400 mb-4 text-sm">
                                    Comment choisir et utiliser les polices pour créer des interfaces inclusives et accessibles à tous les utilisateurs.
                                </p>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                                            <i class="fas fa-user text-xs"></i>
                                        </div>
                                        <span class="text-sm">Claire Dupont</span>
                                    </div>
                                    <span class="text-sm text-gray-500">20 mai 2023 · 10 min</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Pagination -->
                    <div class="flex justify-between items-center mt-8">
                        <button class="flex items-center text-indigo-400 hover:text-indigo-300 transition">
                            <i class="fas fa-arrow-left mr-2"></i> Articles plus récents
                        </button>
                        <div class="flex space-x-2">
                            <button class="w-10 h-10 rounded-full bg-indigo-600 text-white">1</button>
                            <button class="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition">2</button>
                            <button class="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition">3</button>
                            <span class="flex items-center px-2">...</span>
                            <button class="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition">8</button>
                        </div>
                        <button class="flex items-center text-indigo-400 hover:text-indigo-300 transition">
                            Articles plus anciens <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Sidebar -->
                <div class="md:w-1/3">
                    <!-- Categories -->
                    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
                        <h3 class="text-xl font-bold mb-4">Catégories</h3>
                        <ul class="space-y-3">
                            <li>
                                <a href="#" class="flex justify-between items-center text-gray-300 hover:text-indigo-300 transition">
                                    <span>Tendances</span>
                                    <span class="bg-gray-700 text-xs px-2 py-1 rounded-full">24</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex justify-between items-center text-gray-300 hover:text-indigo-300 transition">
                                    <span>Conseils</span>
                                    <span class="bg-gray-700 text-xs px-2 py-1 rounded-full">18</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex justify-between items-center text-gray-300 hover:text-indigo-300 transition">
                                    <span>Technique</span>
                                    <span class="bg-gray-700 text-xs px-2 py-1 rounded-full">15</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex justify-between items-center text-gray-300 hover:text-indigo-300 transition">
                                    <span>Histoire</span>
                                    <span class="bg-gray-700 text-xs px-2 py-1 rounded-full">9</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex justify-between items-center text-gray-300 hover:text-indigo-300 transition">
                                    <span>Accessibilité</span>
                                    <span class="bg-gray-700 text-xs px-2 py-1 rounded-full">7</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Popular Tags -->
                    <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
                        <h3 class="text-xl font-bold mb-4">Tags populaires</h3>
                        <div class="flex flex-wrap gap-2">
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#typographie</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#webdesign</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#policesvariables</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#uiux</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#branding</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#print</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#accessibilité</a>
                            <a href="#" class="tag bg-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-600 transition">#histoire</a>
                        </div>
                    </div>
                    
                    <!-- Newsletter -->
                    <div class="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-6">
                        <h3 class="text-xl font-bold mb-2">Newsletter</h3>
                        <p class="text-gray-300 text-sm mb-4">
                            Recevez les derniers articles et ressources directement dans votre boîte mail.
                        </p>
                        <form class="space-y-3">
                            <input type="email" placeholder="Votre email" class="w-full py-2 px-4 bg-gray-800 bg-opacity-50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md font-medium transition">
                                S'abonner
                            </button>
                        </form>
                        <p class="text-gray-400 text-xs mt-3">
                            Nous ne partagerons jamais votre email. Désabonnez-vous à tout moment.
                        </p>
                    </div>
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