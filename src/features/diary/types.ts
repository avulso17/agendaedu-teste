export type Observation = {
  id: number
  text: string
  favorite: boolean
}

export type Student = {
  id: number
  name: string
  observations: Observation[]
}
