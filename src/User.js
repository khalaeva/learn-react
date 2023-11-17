export const User = (props) => {
    return (
        <div className="name">
            <h1>{props.name} {props.isGasPlanet}</h1>
        </div>
    )
}