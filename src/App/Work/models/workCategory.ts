export interface ShowCategoryProps {
  currentCategory: string,
}

export interface ShowSelectorProps {
  currentCategory: string,
  chooseCategory: (category: string) => void
}

export interface WorkDataI {
  name: string,
  link: string,
  image?: string
}

export interface CategoryI {
  [string: string]: WorkDataI[]
}
