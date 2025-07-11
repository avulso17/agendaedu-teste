import { Observation } from '../observations/types'

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
