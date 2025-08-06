import Die from "./Die"
import styles from "../src/tenezies.module.css"
import {useState} from "react"

export default function App() {

    const [arrnumbers , setnumbers] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.floor(Math.random() * 6))
    }
   
        const  element = arrnumbers.map((elem, index) => {
            console.log(elem);
            return <Die key={index} value={elem} />;
          });

    
    function rollthedice()
    {
        setnumbers((prev)=>
        {
            return [...generateAllNewDice()]
        }
        )
    }
    
    
    return (
        <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.dicecontainer}>
                      {element}
                    </div>
                    <button className={styles.roll} onClick={rollthedice}>ROLL</button>
                </main>
        </div>
    )
}



