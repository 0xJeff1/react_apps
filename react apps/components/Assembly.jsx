import React, { useState, useEffect } from "react";
import styles from "../src/assembly.module.css";
import { languages } from "../languages";
import { words } from "../words";

export default function AssemblyEndgame() {
    const [clickedLetter, setClickedLetter] = useState([]);
    const [theWord, setTheWord] = useState("");
    const [letterElements, setLetterElements] = useState([]);
    const [count , setcount] = useState(0)
    const [islostorwin , setlostwin] = useState([false , 0])

    console.log(islostorwin)


    
    function pickRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        const chosen = words[randomIndex].toUpperCase();
        setTheWord(chosen);
        console.log(chosen);
        setLetterElements(Array(chosen.length).fill(""));
    }



   function restart()
   {
    pickRandomWord();
    pickRandomWord();
    setClickedLetter([]);
    setcount(0);
    setlostwin(false);
   }



    useEffect(() => {
        pickRandomWord();
    }, []);

   
    useEffect(() => {
        if (letterElements.join("") === theWord && theWord !== "") {
            console.log("You won!!! 🎉");
            setlostwin([true , 1]);
        }
    }, [letterElements, theWord]);

    useEffect(() => {
        if(count > 7)
        {
            setlostwin([true , 2])
            console.log("You lost!!!");
        }
    }, [count]);


    function dothemagic(letter) 
    {
        setClickedLetter(prev => [...prev, letter]);

        if(theWord.includes(letter))
        {
            const updated = theWord.split("").map((char) =>
                clickedLetter.includes(char) || letter === char ? char : ""
            );
            setLetterElements(updated);
        }
        else
        {
            setcount(prev => {
                const newCount = prev + 1;
                return newCount;
            });
            
            languages[count].backgroundColor = "rgba(0, 0, 0, 0.3)"
        }
        
    }

   
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

  
    const alphabet = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
    );

    const keyboardElements = alphabet.map(letter => (
        <button
            key={letter}
            className={
                clickedLetter.includes(letter) ? theWord.includes(letter)
                        ? styles.activeButton        
                        : styles.buttonfirst1   
                    : styles.buttonfirst            
            }
            onClick={() => dothemagic(letter)}
        >
            {letter}
        </button>
    ));
    const wordElements = letterElements.map((char) => (
        <span>
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

                {islostorwin[0] && (
    <section className={islostorwin[1] === 1 ? styles.gamestatus : styles.gamestatu}>
        {islostorwin[1] === 1 ? (
            <>
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </>
        ) : (
            <>
                <h2>You lost!</h2>
                <p>Next try!</p>
            </>
        )}
    </section>
)}
                <section className={styles.languagechips}>
                    {languageElements}
                </section>

                

                <section className={styles.word}>
                    {wordElements}
                </section>

                <section className={ islostorwin ? styles.keyboardhide : styles.keyboard}>
                    {keyboardElements}
                </section>

                <button className={styles.newgame} onClick={restart}>New Game</button>
            </main>
        </div>
    );
}
