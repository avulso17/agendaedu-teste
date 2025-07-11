import { useQuery } from '@tanstack/react-query'
import { getStudentsByClassId } from '../api/getStudentsByClassId'

export const useStudentsByClass = (classId: string) => {
  return useQuery({
    queryKey: ['students', classId],
    queryFn: () => getStudentsByClassId({ classId: classId }),
    enabled: !!classId,
  })
}
