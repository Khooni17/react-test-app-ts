export type TCategory = {
  id: number,
  title: string
}

export type TCategoriesState = {
  data: Record<number, TCategory>,
  selected: number,
}