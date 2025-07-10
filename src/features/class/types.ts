export type Observation = {
  id: string
  text: string
  favorite: boolean
}

export type Student = {
  id: string
  name: string
  classId: string
  imgSrc: string
  observations: Observation[]
}

export type GetStudentsProps = {
  classId: string
}
