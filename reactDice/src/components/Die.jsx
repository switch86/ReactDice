export default function Die(props) {
    let i = 0 
    
    return (
        <div className="Dice">
            {props.numbers.map(num => {
                i++
                return (
                    <div className="Die" key={i}>{num}</div>
                )
            })}
        </div>
    )
}