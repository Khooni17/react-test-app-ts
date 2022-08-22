export type TCategory = {
  id: number,
  title: string
}

export type TCategoriesState = {
  data: Record<number, TCategory>,
  selected: number,
  status: number,
  errorMessage: string | undefined
}

export enum categoriesStatus {
  NotLoaded,
  Loading,
  Loaded,
  ErrorLoad
}