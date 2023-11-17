export const Planet = (props) => {
    return (
        <div className="name">
            {props.isGasPlanet && <h1>{props.name}</h1>}
        </div>
    )
}