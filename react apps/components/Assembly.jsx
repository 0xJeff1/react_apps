import React from "react"
import styles from "../src/assembly.module.css"
import { languages } from "../languages"


export default function AssemblyEndgame() {

    const languageElements = languages.map(lang => 
        {
            const styles = {
                backgroundColor: lang.backgroundColor,
                color: lang.color
            }
            return (
                <span 
                    className={styles.chip} 
                    style={styles}
                    key={lang.name}
                >
                    {lang.name}
                </span>
            )
        })

    return (
        <div className={styles.container}>
            <main className={styles.container1}>
                <div className={styles.header}>
                    <h1>Assembly: Endgame</h1>
                    <p>Guess the word within 8 attempts to keep the 
                    programming world safe from Assembly!</p>
                </div>
                <section className={styles.gamestatus}>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </section>
                    <section className={styles.languagechips}>
                    {languageElements}
                    </section>
            </main>
        </div>
    )
}


