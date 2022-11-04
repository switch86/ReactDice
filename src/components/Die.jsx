export default function Die(props) {
    return (
        <div className="Dice">
            {props.numbers.map((num, index) => {
                return (
                    <div className="Die" key={index}>{num}</div>
                )
            })}
        </div>
    )
}