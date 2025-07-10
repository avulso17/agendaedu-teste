import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../api/getProfile'

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
}
