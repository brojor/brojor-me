import { defineConfig } from 'unocss'

import presetIcons from '@unocss/preset-icons'
import cards from './cards'

export default defineConfig({
  presets: [
    presetIcons({}),
  ],
	safelist: [...cards.map(card => `i-${card.icon}`)]
})