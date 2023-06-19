import { useEffect, useState } from 'react'

export const THEMES = ['dark', 'light']
const DEFAULT_THEME = localStorage.getItem('theme') ?? THEMES[0]

type Payload = {
  theme: string
  toggleTheme: () => void
  setThemeAndSave: (newTheme: string) => void
}

const saveThemeAndSetHtmlAttribute = (theme: string): void => {
  localStorage.setItem('theme', theme)
  document.querySelector('html')?.setAttribute('data-theme', theme)
}

export const useChangeTheme = (): Payload => {
  const [theme, setTheme] = useState(DEFAULT_THEME)

  // Set the theme on first load.
  useEffect(() => {
    saveThemeAndSetHtmlAttribute(DEFAULT_THEME)
  }, [])

  const setThemeAndSave = (newTheme: string): void => {
    setTheme(newTheme)
    saveThemeAndSetHtmlAttribute(newTheme)
  }

  // Right now, we only have two themes, so we can toggle between them.
  const toggleTheme = (): void => {
    const newTheme = theme === THEMES[0] ? THEMES[1] : THEMES[0]
    setThemeAndSave(newTheme)
  }

  return { setThemeAndSave, theme, toggleTheme }
}
