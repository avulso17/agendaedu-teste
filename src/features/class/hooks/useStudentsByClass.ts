import { useQuery } from '@tanstack/react-query'
import { getStudentsByClassId } from '../api/getStudentsByClassId'

export const useStudentsByClass = (id: string) => {
  const classId = Number(id)

  return useQuery({
    queryKey: ['students', classId],
    queryFn: () => getStudentsByClassId({ classId: classId }),
    enabled: !!classId,
  })
}
