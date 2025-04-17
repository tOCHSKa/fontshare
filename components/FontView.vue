<template>
    <section class="gradient-text py-12 px-6">
      <div class="max-w-7xl mx-auto lg:px-6">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-4 capitalize" :style="{ fontFamily: fontName }">
              {{ fontName }}
            </h1>
            <div class="flex space-x-2 mb-6">
              <span class="bg-gray-700 text-xs px-2 py-1 rounded capitalize">{{ font.category }}</span>
              <!-- <span class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Gratuit</span> -->
              <span v-if="font.variable" class="bg-gray-700 text-xs px-2 py-1 rounded">Variable</span>
              <span v-else class="bg-gray-700 text-xs px-2 py-1 rounded">Aucune variante</span>
            </div>
            <p class="text-gray-300 max-w-3xl">
              Une police géométrique moderne avec une touche élégante, parfaite pour les titres et les textes.
            </p>
          </div>
          <div class="flex space-x-3">
            <button class="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition w-[48px] cursor-pointer">
              <i class="far fa-heart"></i>
            </button>
            <button class="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition  w-[48px] cursor-pointer">
              <i class="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="control-panel bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-400 mb-2">Texte de démonstration</label>
            <input type="text" v-model="demoText"
              class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" 
              id="demo-text">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-2">Taille</label>
            <div class="flex items-center space-x-2">
              <input type="range" min="12" max="72"
                class="w-24" id="font-size" :value="fontSize" 
                @change="updateFontSize($event)">
              <span class="text-sm w-12" id="font-size-value">{{ fontSize }}px</span>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <label class="block text-sm font-medium text-gray-400 mb-2">Variantes</label>
          <div class="flex flex-wrap gap-2" id="font-weights">
            <div v-for="(item, index) in fontWeights" :key="index">
                <!-- <button class="font-weight-btn px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition cursor-pointer" 
                :style="{ fontWeight: item.weight }">{{ item.name }} {{ item.weight }}</button> -->
                <button 
                class=" px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition cursor-pointer"
                :class="{ 'font-weight-btn': selectedWeight === item.weight }"
                @click="changeFontWeight(item.weight); toggleBackgroundWeight(item.weight)">
                {{ item.weight }}
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <label class="block text-sm font-medium text-gray-400 mb-2">Styles</label>
          <div class="flex flex-wrap gap-2">
            <button class=" px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition cursor-pointer "
                :class="{ 'font-style-btn': styledFont === true }"
                @click="changeFontStyle('normal'); toggleStyledFont()">Normal</button>
            <button class=" px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition cursor-pointer italic"
                :class="{ 'font-style-btn': styledFont === false }"
               @click="changeFontStyle('italic'); toggleStyledFont()">Italic</button>
          </div>
        </div>
      </div>
  
      <div class="font-demo bg-gray-800 rounded-xl p-8 mb-8 border border-gray-700" 
        id="font-display" :style="fontDisplayStyle">
        {{ demoText }}
      </div>
      <h2 class="text-2xl font-bold mb-6">Récupérer le code</h2>
      <!-- Checkboxes des weights -->
        <div class="mb-6 flex flex-wrap gap-4">
            <div
            v-for="weight in font.weights"
            :key="weight"
            class="flex items-center space-x-2 text-gray-300"
            >
            <input
                type="checkbox"
                :id="`weight-${weight}`"
                :value="weight"
                v-model="selectedWeights"
                class="form-checkbox text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-400"
            />
            <label :for="`weight-${weight}`" class="cursor-pointer">
                {{ weight }}
            </label>
            </div>
        </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">CDN de Google</h3>
                        <button @click="copyToClipboard(googleCdnLink, 'google')" 
                        class="flex justify-between items-center text-gray-400 hover:text-white gap-2">
                           <p class="text-white">
                            {{ textCopyGoogle }}
                           </p> 
                          <i class="fas fa-copy text-xl cursor-pointer"></i>
                        </button>
                      </div>
                <textarea
                class="w-full h-40 bg-gray-900 text-gray-300 p-4 rounded-lg border border-gray-600 resize-none"
                readonly
                :value="googleCdnLink"
              />
                </div>
            
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">CDN de FontShare</h3>
                        <button @click="copyToClipboard(fontShareCdnLink, 'fontshare')" 
                            class="flex justify-between items-center text-gray-400 hover:text-white gap-2">
                           <p class="text-white">
                            {{ textCopyFontShare }}
                           </p> 
                          <i class="fas fa-copy text-xl cursor-pointer"></i>
                        </button>
                      </div>
                <textarea
                    class="w-full h-40 bg-gray-900 text-gray-300 p-4 rounded-lg border border-gray-600 resize-none"
                    readonly
                ></textarea>
                </div>
            </div>
            <div class="border-b border-gray-700 mb-6">
                <!-- Mobile : noms courts -->
                <div class="flex justify-evenly space-x-4 sm:hidden">
                    <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="tab-button pb-2 font-medium"
                    :class="{ 'active border-b-2 border-white text-white': activeTab === tab.id, 'text-gray-400': activeTab !== tab.id }"
                    :style="{ fontFamily: fontName }"
                    @click="activeTab = tab.id"
                    >
                    <span>{{ tab.short }}</span>
                    </button>
                </div>
                
                <!-- SM et + : noms complets -->
                <div class="hidden sm:flex sm:justify-evenly md:justify-start space-x-8">
                    <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="tab-button pb-2 font-medium"
                    :class="{ 'active border-b-2 border-white text-white': activeTab === tab.id, 'text-gray-400': activeTab !== tab.id }"
                    @click="activeTab = tab.id"
                    >
                    <span class="cursor-pointer">{{ tab.name }}</span>
                    </button>
                </div>
  
            </div>
            <!-- Tab Panels -->
            <div id="tab-content">
                <div v-show="activeTab === 'specimen'" id="specimen-tab" class="tab-panel ">
                <!-- TON CONTENU DU SPÉCIMEN ICI -->
                    <h2 class="text-2xl font-bold mb-6">Spécimen de la police</h2>
                    <div class="font-variants-grid mb-8">
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 100;">Thin 100</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 100;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 200;">ExtraLight 200</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 200;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 300;">Light 300</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 300;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 400;">Regular 400</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 400;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 500;">Medium 500</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 500;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 600;">SemiBold 600</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 600;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 700;">Bold 700</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 700;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 800;">ExtraBold 800</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 800;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 900;">Black 900</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }" style="font-weight: 900;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4" >Exemples d'utilisation</h3>
                    <div class="space-y-8">
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-4xl mb-4" style="font-weight: 800;" :style="{ fontFamily: fontName }">Titre principal</p>
                            <p class="text-gray-400" style="font-weight: 400;" :style="{ fontFamily: fontName }">Un sous-titre descriptif qui complète le titre principal avec une graisse plus légère pour créer un contraste visuel.</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" style="font-weight: 600;" :style="{ fontFamily: fontName }">Section Heading</p>
                            <p class="mb-4" style="font-weight: 400;" :style="{ fontFamily: fontName }">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                            <p style="font-weight: 300; font-style: italic;" :style="{ fontFamily: fontName }">Un texte en italique avec une graisse légère pour les citations ou les notes secondaires.</p>
                        </div>
                    </div>
                </div>
            
                <div v-show="activeTab === 'glyphs'" id="glyphs-tab" class="tab-panel">
                <!-- TON CONTENU DES CARACTÈRES ICI -->
                    <h2 class="text-2xl font-bold mb-6">Caractères complets</h2>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-3" :style="{ fontFamily: fontName }">Majuscules</h3>
                        <div class="character-grid">
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">A</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">B</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">C</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">D</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">E</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">F</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">G</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">H</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">I</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">J</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">K</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">L</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">M</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">N</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">O</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">P</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">Q</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">R</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">S</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">T</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">U</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">V</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">W</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">X</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">Y</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">Z</div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-3" :style="{ fontFamily: fontName }">Minuscules</h3>
                        <div class="character-grid">
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">a</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">b</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">c</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">d</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">e</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">f</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">g</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">h</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">i</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">j</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">k</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">l</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">m</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">n</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">o</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">p</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">q</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">r</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">s</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">t</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">u</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">v</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">w</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">x</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">y</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">z</div>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-3">Chiffres et symboles</h3>
                        <div class="character-grid">
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">0</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">1</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">2</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">3</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">4</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">5</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">6</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">7</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">8</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">9</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">!</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">@</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">#</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">$</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">%</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">^</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">&</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">*</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">(</div>
                            <div class="bg-gray-800 p-3 rounded text-center" :style="{ fontFamily: fontName }">)</div>
                        </div>
                    </div>
                </div>
            
                <div v-show="activeTab === 'pairing'" id="pairing-tab" class="tab-panel">
                    <h2 class="text-2xl font-bold mb-6">Associations de polices recommandées</h2>
                
                    <p class="text-gray-400 mb-6">
                        Montserrat est une police polyvalente qui s'associe bien avec de nombreuses autres polices. 
                        Voici quelques combinaisons qui fonctionnent particulièrement bien pour différents usages.
                    </p>
                    
                    <div class="space-y-8">
                        <!-- Pairing 1 -->
                        <div class="font-pairing-card bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'; font-weight: 700;">Montserrat + Playfair Display</h3>
                                    <p class="text-gray-400 mb-4">
                                        Une combinaison classique pour les designs élégants. Montserrat pour les textes et Playfair Display pour les titres créent un contraste harmonieux entre moderne et classique.
                                    </p>
                                    <div class="flex items-center text-sm text-gray-400">
                                        <span class="bg-indigo-900 text-indigo-300 px-2 py-1 rounded mr-2">Recommandé pour</span>
                                        <span>Branding, Design de luxe, Éditorial</span>
                                    </div>
                                </div>
                                <div class="md:w-1/3">
                                    <div class="bg-gray-700 p-4 rounded-lg">
                                        <p class="text-2xl mb-2" style="font-family: 'Playfair Display'; font-weight: 700;">Titre principal</p>
                                        <p style="font-family: 'Montserrat'; font-weight: 400;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pairing 2 -->
                        <div class="font-pairing-card bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'; font-weight: 700;">Montserrat + Roboto</h3>
                                    <p class="text-gray-400 mb-4">
                                        Une combinaison moderne et fonctionnelle parfaite pour les interfaces utilisateur. Roboto apporte de la lisibilité pour les longs textes tandis que Montserrat ajoute du caractère aux titres.
                                    </p>
                                    <div class="flex items-center text-sm text-gray-400">
                                        <span class="bg-indigo-900 text-indigo-300 px-2 py-1 rounded mr-2">Recommandé pour</span>
                                        <span>Applications, Sites web, Interfaces</span>
                                    </div>
                                </div>
                                <div class="md:w-1/3">
                                    <div class="bg-gray-700 p-4 rounded-lg">
                                        <p class="text-2xl mb-2" style="font-family: 'Montserrat'; font-weight: 600;">Section Heading</p>
                                        <p style="font-family: 'Roboto'; font-weight: 400;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Pairing 3 -->
                        <div class="font-pairing-card bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="flex-1">
                                    <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'; font-weight: 700;">Montserrat + Open Sans</h3>
                                    <p class="text-gray-400 mb-4">
                                        Une combinaison propre et professionnelle idéale pour les documents et présentations. Open Sans offre une excellente lisibilité pour le corps du texte.
                                    </p>
                                    <div class="flex items-center text-sm text-gray-400">
                                        <span class="bg-indigo-900 text-indigo-300 px-2 py-1 rounded mr-2">Recommandé pour</span>
                                        <span>Documents, Présentations, Rapports</span>
                                    </div>
                                </div>
                                <div class="md:w-1/3">
                                    <div class="bg-gray-700 p-4 rounded-lg">
                                        <p class="text-2xl mb-2" style="font-family: 'Montserrat'; font-weight: 500;">Titre de section</p>
                                        <p style="font-family: 'Open Sans'; font-weight: 400;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div v-show="activeTab === 'info'" id="info-tab" class="tab-panel">
                    <h2 class="text-2xl font-bold mb-6">Informations sur la police</h2>
                
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 class="text-xl font-bold mb-4" >À propos de <span class="capitalize">{{ fontName }}</span></h3>
                            <p class="text-gray-400">
                                {{ fontDescription  }}
                            </p>
                        </div>
                        
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 class="text-xl font-bold mb-4" >Caractéristiques</h3>
                            <ul class="space-y-2 text-gray-400">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>{{ font.weights.length }} épaisseurs différentes</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Version {{ font.styles.join(', ') }}</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Support étendu des caractères {{ font.subsets.join(', ') }}</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Variable font disponible</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                        <h3 class="text-xl font-bold mb-4" ">Utilisations recommandées</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3 text-center w-[40px]">
                                        <i class="fas fa-heading text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Titres</h4>
                                </div>
                                <p class="text-sm text-gray-400">Parfaite pour les titres et en-têtes grâce à sa présence visuelle forte.</p>
                            </div>
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3 text-center w-[40px]">
                                        <i class="fas fa-paragraph text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Corps de texte</h4>
                                </div>
                                <p class="text-sm text-gray-400">Excellente lisibilité dans les poids Regular et Medium pour les longs textes.</p>
                            </div>
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3 text-center w-[40px]">
                                        <i class="fas fa-mobile-alt text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Interfaces</h4>
                                </div>
                                <p class="text-sm text-gray-400">Idéale pour les applications et sites web grâce à sa clarté à toutes tailles.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 class="text-xl font-bold mb-4">Licence et téléchargement</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-medium mb-2">Licence SIL Open Font</h4>
                                <p class="text-gray-400 mb-4">
                                    {{ fontName }} est disponible sous la licence Open Font License (OFL) qui permet une utilisation libre, y compris commerciale.
                                </p>
                                <a
                                :href="fontUrl"
                                class="text-indigo-400 hover:text-indigo-300 flex items-center"
                                target="_blank"
                                rel="noopener"
                              >
                                <i class="fas fa-file-alt mr-2"></i> Voir la licence complète
                              </a>
                            </div>
                            <div>
                                <h4 class="font-medium mb-2">Téléchargement</h4>
                                <p class="text-gray-400 mb-4">
                                    Téléchargez la famille complète de polices Montserrat en différents formats.
                                </p>
                                <div class="flex flex-wrap gap-3">
                                    <button class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition flex items-center">
                                        <i class="fas fa-download mr-2"></i> TTF
                                    </button>
                                    <button class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition flex items-center">
                                        <i class="fas fa-download mr-2"></i> OTF
                                    </button>
                                    <button class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition flex items-center">
                                        <i class="fas fa-download mr-2"></i> WOFF
                                    </button>
                                    <button class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium transition flex items-center">
                                        <i class="fas fa-download mr-2"></i> WOFF2
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'

// === ROUTE & FONT NAME ===
const route = useRoute()
const fontName = route.params.font
const selectedWeights = ref([])
const textCopyFontShare = ref('')
const textCopyGoogle= ref('')
const googleCdnLink = computed(() => {
  if (!font.value || selectedWeights.value.length === 0) return ''

  const family = font.value.family.replace(/ /g, '+')
  const weights = [...selectedWeights.value].sort((a, b) => Number(a) - Number(b)).join(';')

  return `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${family}:wght@${weights}&display=swap" rel="stylesheet">`
})


const copyToClipboard = async (value, type) => {
  try {
    await navigator.clipboard.writeText(value)

    if (type === 'google') {
      textCopyGoogle.value = 'Copié !'
      setTimeout(() => (textCopyGoogle.value = 'Copier'), 2000)
    } else if (type === 'fontshare') {
      textCopyFontShare.value = 'Copié !'
      setTimeout(() => (textCopyFontShare.value = 'Copier'), 2000)
    }
  } catch (err) {
    console.error('Erreur de copie :', err)
  }
}


const formatFontNameForUrl = (name) =>
  name
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('+')

const formattedName = formatFontNameForUrl(fontName)
const fontUrl = `https://fonts.google.com/specimen/${formattedName}/license`


const ip = ref('https://fontshare.netlify.app');


// === FONTS DATA ===
const { data: fontsData, error: fontsError } = await useAsyncData('font-data', () =>
  $fetch('https://fontshare.netlify.app/newdesc.json')
)

const font = computed(() => {
  const key = fontName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return fontsData.value?.[key] || null
})

const { data: fontDescriptionData } = await useAsyncData('font-description', () =>
  $fetch('https://fontshare.netlify.app/fonts-with-desc.json')
)

const fontDescription = computed(() => {
  const key = fontName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return fontDescriptionData.value?.find(f => f.family === key)?.description || 'Description indisponible';
});


// === TABS ===
const activeTab = ref('specimen')
const tabs = [
  { name: 'Spécimen', short: 'Spec', id: 'specimen' },
  { name: 'Caractères', short: 'Chars', id: 'glyphs' },
  { name: 'Associations', short: 'Assoc.', id: 'pairing' },
  { name: 'Informations', short: 'Info', id: 'info' }
]

// === DEMO CONTROLS ===
const styledFont = ref(true)
const demoText = ref('The quick brown fox jumps over the lazy dog')
const fontSize = ref(24)
const fontWeight = ref('regular')
const fontStyle = ref('normal')
const selectedWeight = ref(100)

const toggleStyledFont = () => styledFont.value = !styledFont.value
const updateFontSize = (e) => fontSize.value = e.target.value
const changeFontWeight = (w) => fontWeight.value = w
const changeFontStyle = (s) => fontStyle.value = s
const toggleBackgroundWeight = (w) => selectedWeight.value = w

const fontDisplayStyle = computed(() => ({
  fontFamily: fontName,
  fontSize: `${fontSize.value}px`,
  fontWeight: fontWeight.value,
  fontStyle: fontStyle.value,
}))

const fontWeights = [
  { name: 'Thin', weight: 100 },
  { name: 'ExtraLight', weight: 200 },
  { name: 'Light', weight: 300 },
  { name: 'Regular', weight: 400 },
  { name: 'Medium', weight: 500 },
  { name: 'SemiBold', weight: 600 },
  { name: 'Bold', weight: 700 },
  { name: 'ExtraBold', weight: 800 },
  { name: 'Black', weight: 900 }
]

// === DEBUG ===
if (fontsError.value) console.error('Erreur chargement données:', fontsError.value)
</script>

  
<style scoped>
        
  .font-demo {
    transition: all 0.3s ease;
}

.control-panel {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
}

.font-variants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.character-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 0.5rem;
}

.font-sample {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
}

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

.tab-button.active {
    border-bottom: 2px solid #818cf8;
    color: #818cf8;
}

.font-weight-btn {
    background-color: #6366f1;
    color: white;
}

.font-style-btn {
    background-color: #6366f1;
    color: white;
}

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
  