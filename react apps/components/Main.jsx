
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/Main.module.css';


let ingredientlist = ["milk" , "tomato ", "potato"];
console.log(ingredientlist);


let ingrlist = ingredientlist.map((ing )=> {
    return <li  key={ing}> {ing} </li>
})

function Check(e)
{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const NewIngridient = formData.get("Ingredients")
    ingredientlist.push(NewIngridient);
}

console.log(ingrlist);

export default function Main() {
    return (
        <main>
            <form onSubmit={Check} className={styles.addingredientform}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name='Ingredients'
                />
                <button>Add ingredient</button>
            </form>
                <ul className={styles.ull}>
                    {ingrlist}
                </ul>
        </main>
    )
}