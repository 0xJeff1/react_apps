import Die from "./Die"
import styles from "../src/tenezies.module.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import { useRef } from "react";


  /**
     * Critical thinking time!
     * 
     * We want to indicate to the user that the game is over
     * if (1) all the dice are held, and (2) all the dice have
     * the same value.
     * 
     * How might we do this? Some questions to consider:
     * 
     * 1. Do we need to save a `gameWon` value in state? If so, why?
     *    If not, why not?
     * 
     * 2. Do we need to create a side effect to synchronize the `gameWon`
     *    value (whether it's in state or not) with the current state of 
     *    the dice?
     * 
     */


export default function App() {
    const [arrnumbers, setnumbers] = useState(()=> generateAllNewDice())

    
       const gamestate =  arrnumbers.every(die => die.isHeld) && 
        arrnumbers.every(die => die.value === arrnumbers[0].value)
  
    const refbutton = useRef();
    function toggleHold(id) {
        setnumbers(oldDice =>
            oldDice.map(die =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        )
    }

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false,
                id: nanoid()
            }))
    }

    const element = arrnumbers.map(elem => (
        <Die
            key={elem.id}
            value={elem.value}
            isHeld={elem.isHeld}        
            toggleHold={() => toggleHold(elem.id)}
        />
    ))

    function rollthedice() {
        if(refbutton.current.innerText == "ROLL")
        {
            setnumbers(oldDice =>
                oldDice.map(die =>
    
                    die.isHeld
                        ? die
                        : { ...die, value: Math.floor(Math.random() * 6) + 1 } 
                )
            )
        }
        else
        {
            console.log("hello Im supposed to reset");
            setnumbers(generateAllNewDice())
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    {gamestate ? <div>
                    <Confetti
                    gravity={0.1}
                    height={579}
                    initialVelocityX={2}
                    initialVelocityY={2}
                    numberOfPieces={200}
                    opacity={1}
                    recycle={false}
                    run={gamestate}
                    width={1066}
                    wind={0}
                    />
                </div> : null}
                <div className={styles.dicecontainer}>
                    {element}
                </div>
                <button className={styles.roll} onClick={rollthedice} ref = {refbutton}>
                    {gamestate ? "NEW GAME" : "ROLL"}
                </button>
            </main>
        </div>
    )
}
