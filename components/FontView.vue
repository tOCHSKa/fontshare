<template>
    <section class="gradient-text py-12 px-6">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-4 capitalize" :style="{ fontFamily: fontName }">
              {{ fontName }}
            </h1>
            <div class="flex space-x-2 mb-6">
              <span class="bg-gray-700 text-xs px-2 py-1 rounded">Sans-serif</span>
              <span class="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded">Gratuit</span>
              <span class="bg-gray-700 text-xs px-2 py-1 rounded">Variable</span>
            </div>
            <p class="text-gray-300 max-w-3xl">
              Une police géométrique moderne avec une touche élégante, parfaite pour les titres et les textes.
            </p>
          </div>
          <div class="flex space-x-3">
            <button class="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
              <i class="far fa-heart"></i>
            </button>
            <button class="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
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
  
      <!-- Tabs for Specimen, Glyphs etc. -->
        <!-- <div class="border-b border-gray-700 mb-6">
            <div class="flex space-x-8">
                <button class="tab-button pb-2 font-medium active" data-tab="specimen" :style="{ fontFamily: fontName }">Spécimen</button>
                <button class="tab-button pb-2 font-medium" data-tab="glyphs" :style="{ fontFamily: fontName }">Caractères</button>
                <button class="tab-button pb-2 font-medium" data-tab="pairing" :style="{ fontFamily: fontName }">Associations</button>
                <button class="tab-button pb-2 font-medium" data-tab="info" :style="{ fontFamily: fontName }">Informations</button>
            </div>
        </div> -->
        <!-- Tabs -->
            <div class="border-b border-gray-700 mb-6">
                <div class="flex space-x-8">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="tab-button pb-2 font-medium"
                    :class="{ 'active border-b-2 border-white text-white': activeTab === tab.id, 'text-gray-400': activeTab !== tab.id }"
                    @click="activeTab = tab.id"
                >
                    {{ tab.name }}
                </button>
                </div>
            </div>
            <!-- Tab Panels -->
            <div id="tab-content">
                <div v-show="activeTab === 'specimen'" id="specimen-tab" class="tab-panel">
                <!-- TON CONTENU DU SPÉCIMEN ICI -->
                    <h2 class="text-2xl font-bold mb-6">Spécimen de la police</h2>
                    <div class="font-variants-grid mb-8">
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 100;">Thin 100</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 200;">ExtraLight 200</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 300;">Light 300</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 400;">Regular 400</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 500;">Medium 500</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 600;">SemiBold 600</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 700;">Bold 700</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 800;">ExtraBold 800</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        </div>
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p class="text-2xl mb-4" :style="{ fontFamily: fontName }" style="font-weight: 900;">Black 900</p>
                            <p class="text-gray-400" :style="{ fontFamily: fontName }">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
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
                    <h2 class="text-2xl font-bold mb-6" :style="{ fontFamily: fontName }">Caractères complets</h2>
                    
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
                            <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'">À propos de Montserrat</h3>
                            <p class="text-gray-400 mb-4">
                                La police Montserrat, créée par Julieta Ulanovsky, est inspirée par les vieilles enseignes et affiches peintes à la main du quartier traditionnel de Montserrat à Buenos Aires.
                            </p>
                            <p class="text-gray-400">
                                Avec ses formes géométriques et ses proportions équilibrées, Montserrat est devenue l'une des polices sans-serif les plus populaires pour le design moderne.
                            </p>
                        </div>
                        
                        <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'">Caractéristiques</h3>
                            <ul class="space-y-2 text-gray-400">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>9 épaisseurs différentes (de Thin 100 à Black 900)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Version italique pour chaque épaisseur</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Support étendu des caractères (Latin Extended)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                    <span>Variable font disponible</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                        <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'">Utilisations recommandées</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3">
                                        <i class="fas fa-heading text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Titres</h4>
                                </div>
                                <p class="text-sm text-gray-400">Parfaite pour les titres et en-têtes grâce à sa présence visuelle forte.</p>
                            </div>
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3">
                                        <i class="fas fa-paragraph text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Corps de texte</h4>
                                </div>
                                <p class="text-sm text-gray-400">Excellente lisibilité dans les poids Regular et Medium pour les longs textes.</p>
                            </div>
                            <div class="bg-gray-700 p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-indigo-600 p-2 rounded-full mr-3">
                                        <i class="fas fa-mobile-alt text-white"></i>
                                    </div>
                                    <h4 class="font-medium">Interfaces</h4>
                                </div>
                                <p class="text-sm text-gray-400">Idéale pour les applications et sites web grâce à sa clarté à toutes tailles.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 class="text-xl font-bold mb-4" style="font-family: 'Montserrat'">Licence et téléchargement</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-medium mb-2">Licence SIL Open Font</h4>
                                <p class="text-gray-400 mb-4">
                                    Montserrat est disponible sous la licence Open Font License (OFL) qui permet une utilisation libre, y compris commerciale.
                                </p>
                                <a href="#" class="text-indigo-400 hover:text-indigo-300 flex items-center">
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
const activeTab = ref('specimen')

const tabs = [
  { name: 'Spécimen', id: 'specimen' },
  { name: 'Caractères', id: 'glyphs' },
  { name: 'Associations', id: 'pairing' },
  { name: 'Informations', id: 'info' }
]
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'

const route = useRoute();
const fontName = route.params.font;
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
];

const styledFont = ref(true);
const demoText = ref("The quick brown fox jumps over the lazy dog");
const fontSize = ref(24);
const fontWeight = ref('regular');
const fontStyle = ref('normal');

const toggleStyledFont = () => {
    styledFont.value = !styledFont.value;
}

const updateFontSize = (event) => {
  fontSize.value = event.target.value; // Mise à jour de fontSize avec la nouvelle valeur
};

const fontDisplayStyle = computed(() => {
  return {
    fontFamily: fontName, 
    fontSize: `${fontSize.value}px`,
    fontWeight: fontWeight.value,
    fontStyle: fontStyle.value,
  };
});

  // Code qui sera exécuté côté client après que le composant a été monté
  const changeFontWeight = (weight) => {
    fontWeight.value = weight;
  };

  const changeFontStyle = (style) => {
    fontStyle.value = style;
  };

  const selectedWeight = ref(100);

const toggleBackgroundWeight = (weight) => {
  selectedWeight.value = weight;
};
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
  