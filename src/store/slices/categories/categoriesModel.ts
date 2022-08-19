export type TCategory = {
  id: number,
  title: string
}

export type TCategoriesState = {
  data: TCategory[],
  selected: number,
}