
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/Main.module.css';
import React, { useState } from 'react';
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { useEffect } from 'react';




export default function Main() {
    
    let [ingredientlist , setingredientlist] = React.useState (["tomato","potato","cheese","pig meal"]);
    let [isShown , setisShown] = React.useState (false);






async function main() 
{

fetch('http://localhost:4000/api/generate-recipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [
        {
          role: "system",
          content: `You are a helpful and friendly chef named "Chef Claude"...` // your system prompt
        },
        {
          role: "user",
          content: ingredientlist.join(", ")
        }
      ]
    }),
  })
    .then(res => res.json())
    .then(data => {
    console.log(data);
      // handle your response here
    })
    .catch(err => console.error(err));

}


main()




    function toggletheshow() {
        setisShown(prev => !prev);
    }
    

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
               { ingredientlist.length > 3 && <div className={styles.getrecipecontainer}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggletheshow }>Get a recipe</button>
                </div>}
            </section>}



    {/* { isShown && <div className="recipe-output">
      {content.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>} */}




        </main>
    )
}