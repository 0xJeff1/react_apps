import styles from "../src/tenezies.module.css"

export default function Die(props) {
    return (
        <button
            onClick={props.toggleHold}
            className={props.isHeld ? styles.button2 : styles.button1 }
            >
            {props.value}
        </button>
    )
}
