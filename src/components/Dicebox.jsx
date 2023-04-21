import React from "react"
import Die from "./Die.jsx"

export default function DiceBox() {
    let nums = [0, 0, 0, 0, 0, 0]
    const [numbers, setNumbers] = React.useState(nums.map(num => {
            return (Math.floor(Math.random() * 6 + 1))
        })
    )

    function Reroll() {
        setNumbers(nums.map(num => {
            return (Math.floor(Math.random() * 6 + 1))
        }))
    }
    function handleClick() {
        // add functionality
    }

    return (
        <div>
            <Die 
                numbers={[...numbers]}
                onClick={handleClick}
            />
            <button onClick={Reroll}>Re-Roll</button>
        </div>
    )
}