import create from 'zustand'

type ThemeVariants = 'dark' | 'light'

interface SwitchThemeData {
  themeSelected: ThemeVariants
  changeTheme(theme: ThemeVariants): void
}

export const useSwitchTheme = create<SwitchThemeData>()(set => ({
  themeSelected: 'light',
  changeTheme(theme) {
    set({ themeSelected: theme })
  },
}))
