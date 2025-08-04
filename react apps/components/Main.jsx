
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/Main.module.css';
import React, { useState } from 'react';


export default function Main() {
    
    let [ingredientlist , setingredientlist] = React.useState (["1","2","3","4"]);
    let [isShown , setisShown] = React.useState (false);

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
                    <button onClick={toggletheshow}>Get a recipe</button>
                </div>}
            </section>}



    { isShown && <section>
    <h2 className={styles.h2}>Chef Claude Recommends:</h2>
    <article className={styles.suggestedrecipecontainer} aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong className={styles.stron} >Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong className={styles.stron} >Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>}




        </main>
    )
}