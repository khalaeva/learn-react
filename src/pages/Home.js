import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Home = () => {
    const { 
        data: catData,
        isLoading, 
        isError, 
        refetch 
    } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => (await axios.get("https://catfact.ninja/fact")).data,
    });

    if (isLoading) {
        return <h1> Loading... </h1>
    }

    if (isError) {
        return <h1>Sorry, there was an error</h1>
    }

    return (
        <h1>
            {catData?.fact}
            <button onClick={refetch}>Update</button>
        </h1>
        
    )
}