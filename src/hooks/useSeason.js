// Golden BC is northern hemisphere — seasons by month
export function getSeason() {
  const month = new Date().getMonth() // 0-11
  if (month >= 2 && month <= 4) return 'spring'   // Mar–May
  if (month >= 5 && month <= 7) return 'summer'   // Jun–Aug
  if (month >= 8 && month <= 10) return 'autumn'  // Sep–Nov
  return 'winter'                                   // Dec–Feb
}

export const SEASON_THEMES = {
  spring: {
    '--forest':      '#1A3020',
    '--forest-mid':  '#2D5235',
    '--forest-lite': '#3E7A4A',
    '--parchment':   '#F2F5ED',
    '--parchment-d': '#E2EAD8',
    '--amber':       '#6BAF4A',
    '--amber-lite':  '#88C966',
    '--amber-dark':  '#4E8A34',
    '--cream':       '#F7FAF3',
    '--text-main':   '#1A3020',
    '--text-muted':  '#4A5E42',
    label: 'Spring',
    emoji: '🌸',
    particle: 'petal',
  },
  summer: {
    '--forest':      '#1A2B1A',
    '--forest-mid':  '#2C4A2C',
    '--forest-lite': '#3D6B3D',
    '--parchment':   '#FDF6E8',
    '--parchment-d': '#F5E8C8',
    '--amber':       '#D4921A',
    '--amber-lite':  '#EDB040',
    '--amber-dark':  '#A87010',
    '--cream':       '#FFFCF0',
    '--text-main':   '#1A2B1A',
    '--text-muted':  '#5C5448',
    label: 'Summer',
    emoji: '☀️',
    particle: 'sun',
  },
  autumn: {
    '--forest':      '#2B1A0A',
    '--forest-mid':  '#4A2C0A',
    '--forest-lite': '#6B3D0A',
    '--parchment':   '#F5EDE0',
    '--parchment-d': '#EBDCC8',
    '--amber':       '#C4531A',
    '--amber-lite':  '#E07030',
    '--amber-dark':  '#A03A0A',
    '--cream':       '#FDF6EE',
    '--text-main':   '#2B1A0A',
    '--text-muted':  '#6B4A30',
    label: 'Autumn',
    emoji: '🍂',
    particle: 'leaf',
  },
  winter: {
    '--forest':      '#0F1E2B',
    '--forest-mid':  '#1A3248',
    '--forest-lite': '#254A6A',
    '--parchment':   '#EEF2F8',
    '--parchment-d': '#DCE4F0',
    '--amber':       '#4A90C4',
    '--amber-lite':  '#6AAED9',
    '--amber-dark':  '#2E6E9E',
    '--cream':       '#F4F7FC',
    '--text-main':   '#0F1E2B',
    '--text-muted':  '#3A5068',
    label: 'Winter',
    emoji: '❄️',
    particle: 'snow',
  },
}

export function applySeasonTheme(season) {
  const theme = SEASON_THEMES[season]
  const root = document.documentElement
  Object.entries(theme).forEach(([key, val]) => {
    if (key.startsWith('--')) root.style.setProperty(key, val)
  })
  root.setAttribute('data-season', season)
}
