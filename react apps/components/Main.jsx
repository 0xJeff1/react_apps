
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/Main.module.css';
import React, { useState } from 'react';


export default function Main() {

    let [ingredientlist , setingredientlist] = React.useState ([]);

    let ingrlist = ingredientlist.map((ing )=> {
        return <li  key={ing}> {ing} </li>
    })


    
    function Check(formData)
    {
        const NewIngridient = formData.get("Ingredients")
        setingredientlist((prev) => {
            return [...prev , NewIngridient]});
        
    }
    
    return (
        <main>
            <form action={Check} className={styles.addingredientform}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='Ingredients'
                />
                <button>Add ingredient</button>
            </form>


            {ingredientlist.length > 0 && <section>
                <h2  className={styles.h2} >Ingredients on hand:</h2>
                <ul  className={styles.ull} aria-live="polite">{ingrlist}</ul>
                <div className={styles.getrecipecontainer}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
        </main>
    )
}