import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '../src/Main.module.css';

export default function Main() {
    const [ingredientlist, setingredientlist] = useState([]);
    const [isShown, setisShown] = useState(false);
    const [recipe, setRecipe] = useState('');

    function toggletheshow() {
        setisShown(prev => !prev);

        const hardcodedRecipe = `
           🥘 Simple Tomato Potato Cheese Bake

Description:
A warm, hearty layered bake made with fresh tomatoes, potatoes, cheese, and savory pig meal. Perfect for family dinners or cozy evenings.

🛒 Ingredients
• 3 ripe tomatoes, thinly sliced 🍅
• 2 large potatoes, peeled and thinly sliced 🥔
• 1 cup shredded cheese (cheddar or mozzarella) 🧀
• 200g pig meal (or any cooked minced meat of choice) 🐖
• 1 small onion, finely chopped 🧅
• 2 cloves garlic, minced 🧄
• 1 tbsp olive oil 🫒
• 1 tsp dried oregano 🌿
• Salt and pepper to taste 🧂

🔥 Instructions

    Preheat your oven to 180°C (350°F).

    Heat olive oil in a pan over medium heat. Sauté chopped onion and garlic until fragrant (about 2 minutes).

    Add pig meal to the pan, season with salt, pepper, and oregano, and cook until browned (5–7 minutes). Set aside.

    Lightly grease a baking dish with olive oil or butter.

    Start layering: first potato slices, then pig meal, then tomato slices, then a sprinkle of cheese.

    Repeat the layers until all ingredients are used, finishing with a generous layer of cheese.

    Cover with foil and bake for 20 minutes. Then uncover and bake for 15 more minutes until the top is golden and bubbly.

    Let it cool for 5 minutes before serving.

🍴 Serving Suggestions
• Serve warm with a fresh green salad 🥗 or crusty bread 🥖.
• Add a drizzle of sour cream or a dollop of Greek yogurt if desired.

💡 Tips
• Add a layer of spinach or zucchini for extra veggies.
• Swap pig meal with lentils or beans for a vegetarian version.
• Add paprika or chili flakes for a spicy kick. 🌶️

😋 Enjoy Your Meal!
Make it your own and share with friends or family. Bon appétit! 🍽️
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
