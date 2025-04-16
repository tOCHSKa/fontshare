import { readFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  try {
    const data = await readFile('./assets/data/fonts-with-desc.json', 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Erreur lors de la lecture de desc.json :', error.message)
    return { error: 'Impossible de charger les données.' }
  }
})
