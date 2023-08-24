import { defineConfig } from 'unocss'

import presetIcons from '@unocss/preset-icons'
import cards from './src/cards'

export default defineConfig({
  presets: [
    presetIcons({}),
  ],
	safelist: [...cards.map(card => `i-${card.icon}`)]
})