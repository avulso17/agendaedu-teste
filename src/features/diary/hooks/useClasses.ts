import { useQuery } from '@tanstack/react-query'
import { getClasses } from '../api/getClasses'

export const useClasses = () => {
  return useQuery({
    queryKey: ['classes'],
    queryFn: getClasses,
  })
}
