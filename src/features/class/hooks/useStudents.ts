import { useQuery } from '@tanstack/react-query'
import { getStudents } from '../api/getStudents'

export const useStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  })
}
