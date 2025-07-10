import { useQuery } from '@tanstack/react-query'
import { getStudentsById } from '../api/getStudentsById'

export const useStudentsById = (id: string) => {
  const studantId = Number(id)

  return useQuery({
    queryKey: ['student', studantId],
    queryFn: () => getStudentsById({ id: studantId }),
    enabled: !!studantId,
  })
}
