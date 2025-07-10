export type Observation = {
  id: number
  text: string
  favorite: boolean
}

export type Student = {
  id: number
  name: string
  classId: number
  imgUrl: string
  observations: Observation[]
}

export type GetStudentsProps = {
  classId: number
}
