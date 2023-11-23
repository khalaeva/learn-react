import { useCount } from "./useCount"

export const Count = () => {
    const [count, increase, decrease, restart] = useCount(60)
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={restart}>restart</button>
        </div>
    )
}