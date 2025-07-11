<template>
  <main class="py-8 px-6">
        <div class="max-w-7xl mx-auto">
            <!-- Page Header -->
            <div class="mb-8">
                <h1 class="text-3xl md:text-4xl font-bold mb-2">Toutes les polices</h1>
                <p class="text-gray-400">Parcourez notre collection de plus de {{ fontArray.length - 16 }} polices gratuites et premium</p>
            </div>

            <!-- Filters and Search -->
            <div class="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <!-- Search -->
                    <div class="w-full md:w-1/3">
                        <div class="relative">
                            <input type="text" placeholder="Rechercher une police..." v-model="searchQuery"  @keydown.down.prevent="focusFirst" ref="searchInput"
                                class="w-full py-3 px-6 rounded-full bg-gray-700 border border-gray-600 focus:border-indigo-500 text-white placeholder-gray-400 search-input pr-16">
                            <button aria-label="Rechercher" @click="focusFirst"
                                class="cursor-pointer absolute right-[5px] top-1 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition w-[40px]">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Category Filters -->
                    <div class="w-full md:w-2/3">
                        <div class="flex flex-wrap gap-2">
                            <button aria-label="Toutes" @click="filterFonts('all')"
                                class="cursor-pointer category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-sm">
                                Toutes
                            </button>
                            <button aria-label="Sans-serif" @click="filterFonts('sans-serif')"
                                class="cursor-pointer category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-sm">
                                Sans-serif
                            </button>
                            <button aria-label="Serif" @click="filterFonts('serif')"
                                class="cursor-pointer category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-sm">
                                Serif
                            </button>
                            <button aria-label="Display" @click="filterFonts('display')"
                                class="cursor-pointer category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-sm">
                                Display
                            </button>
                            <button aria-label="Monospace" @click="filterFonts('monospace')"
                                class="cursor-pointer category-filter px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-sm">
                                Monospace
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Font List -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div v-for="font in paginatedFonts" :key="font.id"
                    class="cursor-pointer bg-gray-800 rounded-xl p-6 border border-gray-700 transition duration-300 hover:border-indigo-500">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold" :style="{ fontFamily: font.family }">{{ font.family }}</h3>
                        <div class="flex space-x-2">
                            <span class="bg-gray-700 text-xs px-2 py-1 rounded">{{ font.category }}</span>
                            <span v-if="font.variable" class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Variable</span>
                            <span v-else class="bg-gray-700 text-xs px-2 py-1 rounded">Aucune variante</span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <p class="preview-text mb-2" :style="{ fontFamily: font }">
                            The quick brown fox jumps over the lazy dog
                        </p>
                        <p class="preview-text" :style="{ fontFamily: font }">
                            The quick brown fox jumps over the lazy dog
                        </p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2">
                            <a :href="`/font/${font.family}`"
                            class="text-sm text-indigo-400 hover:underline cursor-pointer"
                            >
                            Voir en détail
                            </a>
                        </div>
                        <div class="flex space-x-3">
                            <button aria-label="Favoris" class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="far fa-heart"></i> 356
                            </button>
                            <button aria-label="Télécharger" class="text-gray-400 hover:text-indigo-400 transition">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

               
            <!-- Pagination -->
            <div class="flex justify-center">
                <nav class="flex items-center space-x-1">
                    <button aria-label="Page précédente"
                    :disabled="currentPage === 1"
                    @click="currentPage--"
                    class="cursor-pointer pagination-item w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center">
                    <i class="fas fa-chevron-left"></i>
                    </button>

                    <button aria-label="Page suivante"
                    v-for="page in visiblePages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                        'cursor-pointer pagination-item w-10 h-10 rounded-full flex items-center justify-center',
                        currentPage === page ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600 transition'
                    ]">
                    {{ page }}
                    </button>

                    <button aria-label="Page suivante"
                    :disabled="currentPage === totalPages"
                    @click="currentPage++"
                    class="cursor-pointer pagination-item w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center">
                    <i class="fas fa-chevron-right"></i>
                    </button>
                </nav>
            </div>
        </div>
    </main>
</template>

<script setup>
import { debounce } from 'lodash-es'

/**
 * Liste des polices chargées et triées par nom.
 * @type {Ref<Array<Object>>}
 */
const fontArray = ref([])

/**
 * Requête de recherche utilisateur (non debounced).
 * @type {Ref<string>}
 */
const searchQuery = ref('')

/**
 * Requête de recherche avec debounce (mise à jour après 300ms).
 * @type {Ref<string>}
 */
const debouncedQuery = ref('')

/**
 * Référence à l'élément input de recherche.
 * @type {Ref<HTMLInputElement|null>}
 */
const searchInput = ref(null)

/**
 * Page actuelle de la pagination.
 * @type {Ref<number>}
 */
const currentPage = ref(1)

/**
 * Nombre d'éléments à afficher par page.
 * @type {number}
 */
const itemsPerPage = 9

/**
 * Catégorie de police sélectionnée pour filtrer.
 * @type {Ref<string>}
 */
const filter = ref('all')

/**
 * Récupération des données de polices.
 * @type {Promise}
 */
const { data: fontsData, error: fontsError } = await useAsyncData('font-data', () =>
  $fetch('https://fontshare.netlify.app/fonts-with-desc.json')
)

/**
 * Trie et stocke les polices si les données sont disponibles.
 */
if (fontsData.value) {
  const allFonts = Object.values(fontsData.value)
  fontArray.value = allFonts.sort((a, b) => a.family.localeCompare(b.family))
}

/**
 * Liste des polices filtrées selon la recherche et la catégorie.
 */
const filteredFonts = computed(() => {
  let result = fontArray.value

  if (filter.value !== 'all') {
    result = result.filter(font => font.category === filter.value)
  }

  if (debouncedQuery.value.trim()) {
    const query = debouncedQuery.value.toLowerCase()
    result = result.filter(font =>
      font.family.toLowerCase().includes(query)
    )
  }

  return result
})

/**
 * Calcule le nombre total de pages basé sur le filtre actuel.
 */
const totalPages = computed(() => {
  return Math.ceil(filteredFonts.value.length / itemsPerPage)
})

/**
 * Retourne les polices à afficher sur la page courante.
 */
const paginatedFonts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredFonts.value.slice(start, end)
})

/**
 * Retourne une liste des pages visibles dans la pagination.
 */
const visiblePages = computed(() => {
  const maxVisible = 5
  const pages = []
  let start = Math.max(currentPage.value - Math.floor(maxVisible / 2), 1)
  let end = start + maxVisible - 1

  if (end > totalPages.value) {
    end = totalPages.value
    start = Math.max(end - maxVisible + 1, 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

/**
 * Navigue vers la page de la police sélectionnée.
 * @param {string} fontName - Nom de la police à afficher.
 */


const goToFont = (font) => {
navigateTo(`/font/${font}`);
}

/**
 * Filtre les polices par catégorie.
 * @param {string} category - Nom de la catégorie à appliquer.
 */
const filterFonts = (category) => {
  filter.value = category
  currentPage.value = 1
  searchQuery.value = ''
}

// -- Watchers --

/**
 * Met à jour la valeur debounced de la recherche.
 */
watch(searchQuery, debounce((val) => {
  debouncedQuery.value = val
}, 300))

/**
 * Réinitialise la pagination lorsque la recherche ou le filtre changent.
 */
watch([debouncedQuery, filter], () => {
  currentPage.value = 1
})
</script>



<style scoped>
</style>