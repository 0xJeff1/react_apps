
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/Main.module.css';

export default function Main() {
    return (
        <main>
            <form className={styles.addingredientform}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}