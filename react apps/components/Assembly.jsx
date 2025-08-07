import React, { useState, useEffect } from "react";
import styles from "../src/assembly.module.css";
import { languages } from "../languages";
import { words } from "../words";

export default function AssemblyEndgame() {
    const [clickedLetter, setClickedLetter] = useState([]);
    const [theWord, setTheWord] = useState("");
    const [letterElements, setLetterElements] = useState([]);

    // Choose a word once on mount
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const chosen = words[randomIndex].toUpperCase();
        setTheWord(chosen);
        setLetterElements(Array(chosen.length).fill(""));
    }, []);

    function dothemagic(letter) {
        setClickedLetter(prev => [...prev, letter]);

        // Optionally fill in letters if correct
        const updated = theWord.split("").map((char, i) =>
            clickedLetter.includes(char) || letter === char ? char : ""
        );
        setLetterElements(updated);
    }

    // Create language chips
    const languageElements = languages.map(lang => {
        const chipStyle = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        };
        return (
            <span
                style={chipStyle}
                className={styles.chips}
                key={lang.name}
            >
                {lang.name}
            </span>
        );
    });

    // Create alphabet keyboard
    const alphabet = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
    );

    const keyboardElements = alphabet.map(letter => (
        <button
            key={letter}
            className={
                clickedLetter.includes(letter)
                    ? styles.activeButton
                    : styles.buttonfirst
            }
            onClick={() => dothemagic(letter)}
        >
            {letter}
        </button>
    ));

    // Render the word as blank/filled letters
    const wordElements = letterElements.map((char, index) => (
        <span className={styles.letterbox} key={index}>
            {char}
        </span>
    ));

    return (
        <div className={styles.container}>
            <main className={styles.container1}>
                <div className={styles.header}>
                    <h1>Assembly: Endgame</h1>
                    <p>
                        Guess the word within 8 attempts to keep the
                        programming world safe from Assembly!
                    </p>
                </div>

                <section className={styles.languagechips}>
                    {languageElements}
                </section>

                <section className={styles.word}>
                    {wordElements}
                </section>

                <section className={styles.keyboard}>
                    {keyboardElements}
                </section>

                <button className={styles.newgame}>New Game</button>
            </main>
        </div>
    );
}
