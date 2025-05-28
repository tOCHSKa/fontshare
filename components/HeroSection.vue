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
            <input type="text" placeholder="Rechercher une police..." v-model="searchQuery"  @keydown.down.prevent="focusFirst" ref="searchInput"
                class="w-full py-4 px-6 rounded-full bg-gray-700 border border-gray-600 focus:border-indigo-500 text-white placeholder-gray-400 search-input pr-16">
            <button aria-label="Rechercher" class="cursor-pointer absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition w-[40px]">
                <i class="fas fa-search"></i>
            </button>
            <ul
            v-show="filteredFonts.length > 0"
            class="mt-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto divide-y divide-gray-700"
          >
            <li
              v-for="(font, index) in filteredFonts"
              :key="font"
              :tabindex="0"
              @keydown.down.prevent="focusNext(index)"
              @keydown.up.prevent="focusPrev(index)"
              @keydown.enter.prevent="goToFont(font)"
              class="px-4 py-3 text-left hover:bg-indigo-600 transition-colors cursor-pointer focus:bg-indigo-600"
              :style="{ fontFamily: font }"
            >
              <a
                :href="`/font/${font}`"
                class="text-white hover:text-white w-full block"
              >
                {{ font }}
              </a>
            </li>
          </ul>
          
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
import { debounce } from 'lodash-es'

const fontArray = ref([])
const searchQuery = ref('')
const debouncedQuery = ref('')

// Debounce la recherche (300ms)
watch(searchQuery, debounce((val) => {
  debouncedQuery.value = val
}, 300))

// Récupération des données
const { data: fontsData, error: fontsError } = await useAsyncData('font-data', () =>
    $fetch('https://fontshare.netlify.app/fonts-with-desc.json')
)

if (fontsData.value) {
  const allFonts = Object.values(fontsData.value)
  fontArray.value = allFonts
    .map(font => font.family)
    .sort() // tri alphabétique
}

// Computed qui filtre et limite à 50 résultats
const filteredFonts = computed(() => {
  if (!debouncedQuery.value.trim()) return []
    console.log(fontArray.value)
  return fontArray.value
    .filter(family =>
      family.toLowerCase().includes(debouncedQuery.value.toLowerCase())
    ).slice(0, 50)
})

const searchInput = ref(null)

const focusFirst = () => {
  const items = document.querySelectorAll('[tabindex="0"]')
  if (items.length) {
    items[0].focus()
  }
}

const focusNext = (currentIndex) => {
  const items = document.querySelectorAll('[tabindex="0"]')
  if (currentIndex + 1 < items.length) {
    items[currentIndex + 1].focus()
  }
}

const focusPrev = (currentIndex) => {
  const items = document.querySelectorAll('[tabindex="0"]')
  if (currentIndex - 1 >= 0) {
    items[currentIndex - 1].focus()
  } else {
    // remonter dans l'input si flèche haut au tout début
    searchInput.value?.focus()
  }
}
const navigateTo = (path) => {
  window.location.href = path;
}

const goToFont = (font) => {
navigateTo(`/font/${font}`);
}



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

ul {
    scrollbar-width: thin;
    scrollbar-color: #6b7280 transparent;
  
    &::-webkit-scrollbar {
      width: 6px;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: #6b7280;
      border-radius: 9999px;
    }
  }
  li:focus {
    outline: none;
    background-color: #4f46e5; /* indigo-600 */
  }
  
</style>