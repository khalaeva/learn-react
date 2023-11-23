import { useGetCat } from "./useGetCat"

export const Cat = () => {
    const { data, isCatLoading, refetchData} = useGetCat();
    if (isCatLoading) {
        return <h1>is loading...</h1>
    }
    return (
        <div>
            <button onClick={refetchData}>Update</button>
            <h1>{data?.activity}</h1>
        </div>
    )
}
