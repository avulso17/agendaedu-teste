import { useQuery } from '@tanstack/react-query'
import { getStudentsByClassId } from '../api/getStudentsByClassId'

export const useStudentsByClass = (classId: string) => {
  const id = Number(classId)

  return useQuery({
    queryKey: ['students', id],
    queryFn: () => getStudentsByClassId({ classId: id }),
    enabled: !!id,
  })
}
