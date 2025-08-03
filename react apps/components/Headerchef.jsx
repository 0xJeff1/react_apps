import '../src/content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../src/header.module.css';

export default function Headerchef()
{
    return (
        <> 
               <div className={styles.container}>
                   <img src="../src/assets/Chef Claude Icon(1).png" alt="" />
                   <h1>Chef Claude</h1>
               </div>
        </>
    )
}