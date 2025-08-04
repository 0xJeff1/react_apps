import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../src/Main.module.css';

export default function Main() {
    const [ingredientlist, setingredientlist] = useState(["tomato", "potato", "cheese", "pig meal"]);
    const [isShown, setisShown] = useState(false);
    const [recipe, setRecipe] = useState('');

    function toggletheshow() {
        setisShown(prev => !prev);

        const hardcodedRecipe = `
            🥘 Simple Tomato Potato Cheese Bake:

            Ingredients:
            - Tomato
            - Potato
            - Cheese
            - Pig meal

            Instructions:
            1. Preheat your oven to 180°C (350°F).
            2. Slice the potatoes and tomatoes into thin rounds.
            3. In a baking dish, layer potatoes, pig meal, tomatoes, and cheese.
            4. Repeat the layers until ingredients are used up.
            5. Top with a generous amount of cheese.
            6. Bake for 30–35 minutes until golden and bubbly.
            7. Let it cool for 5 minutes before serving.

            Enjoy your meal! 🍽️
        `;

        setRecipe(hardcodedRecipe.trim());
    }

    const ingrlist = ingredientlist.map((ing) => (
        <li key={ing}>{ing}</li>
    ));

    function Check(formData) {
        const NewIngredient = formData.get("Ingredients");
        setingredientlist(prev => [...prev, NewIngredient]);
    }

    return (
        <main>
            <form action={Check} className={styles.addingredientform}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="Ingredients"
                />
                <button>Add ingredient</button>
            </form>

            {ingredientlist.length > 0 && (
                <section>
                    <h2 className={styles.h2}>Ingredients on hand:</h2>
                    <ul className={styles.ull} aria-live="polite">
                        {ingrlist}
                    </ul>

                    {ingredientlist.length > 3 && (
                        <div className={styles.getrecipecontainer}>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={toggletheshow}>Get a recipe</button>
                        </div>
                    )}
                </section>
            )}

            {isShown && recipe && (
                <div className={styles.recipeOutput}>
                    {recipe.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            )}
        </main>
    );
}
