import create from 'zustand'

interface HeaderMenuData {
  isOpen: boolean
  handleClickMenu(value: boolean): void
}

export const useHeaderMenu = create<HeaderMenuData>()(set => ({
  isOpen: false,
  handleClickMenu(value) {
    set({ isOpen: value })
  },
}))
