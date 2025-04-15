const loadFontDescription = async (fontName) => {
    const normalizedFont = fontName.toLowerCase().replace(/\s+/g, '-');
    fontDesc.value = '';
    isLoading.value = true;
  
    try {
      // Appel de l'API pour obtenir le fichier desc.json
      const res = await fetch('/api/desc');
      
      // Vérifier la réponse
      if (!res.ok) {
        throw new Error('Erreur lors du chargement de la description de la police');
      }
      
      const descData = await res.json();
      console.log('Data from desc.json:', descData);
  
      if (descData[fontName]) {
        fontDesc.value = descData[fontName];
        console.log('Loaded from desc.json:', fontDesc.value);
        return;
      }
  
      // Fetch from fontsource
      const metaRes = await fetch(`https://unpkg.com/@fontsource/${normalizedFont}/metadata.json`);
      const metadata = await metaRes.json();
      console.log('Font metadata:', metadata);
  
      const desc = `${metadata.family} est une police ${metadata.category} conçue par ${metadata.designer}, sous licence ${metadata.license}.`;
      fontDesc.value = desc;
      console.log('Font description loaded:', fontDesc.value);
  
    } catch (e) {
      fontDesc.value = 'Description indisponible.';
      console.log('Error loading font description:', e);
    } finally {
      isLoading.value = false;
    }
  };
  