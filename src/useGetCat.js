import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetCat = () => {
    const { 
        data, 
        refetch, 
        isLoading: isCatLoading, 
        error 
    } = useQuery({
        queryKey: ['cat'], 
        queryFn: async () => (await axios.get("https://www.boredapi.com/api/activity")).data,
    })

    const refetchData = () => {
        alert("data refetched")
        refetch()
    }

    if (error) {

    }

    return { data, refetchData, isCatLoading }
}