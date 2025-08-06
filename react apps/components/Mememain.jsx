import styles from "../src/meme.module.css"
import {useState} from "react"
import {useEffect} from "react"

export default function Main() {

    const [img , setimage]= useState([])

    useEffect(()=>
    {

        fetch("https://api.imgflip.com/get_memes")
        .then((value)=>{
            return value.json();
        })
        .then((data)=>{
            
            setimage(prevImg => {
                return [...prevImg, ...data.data.memes]
            }
              );
        })

    }, [1]);



    function randomimg(event)
    {
        const {value} = event.currentTarget
        const image = img[Math.floor(Math.random() * 100)].url
        Setmeme(prev =>({
            ...prev , imageUrl : image
        }))

        console.log(Meme);

    }
    const [Meme , Setmeme] = useState(

        {
            topText: " one does not simply",
            bottomText: "Walk into Mordor",
            imageUrl: "http://i.imgflip.com/1bij.jpg"
        }
    );



    function handlechange(event)
    {
  
        const {value , name} = event.currentTarget
        Setmeme(prev =>({
            ...prev , [name] : value ,
           
        }))
    
}

    return (
        <main>
            <div className={styles.form}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handlechange}
                        value = {Meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handlechange}
                        value = {Meme.bottomText}

                    />
                </label>
                <button  onClick={randomimg}>Get a new meme image 🖼</button>
            </div>
            <div className={styles.meme}>
                <img className={styles.dimention} src={Meme.imageUrl} />
                <span className={styles.top}>{Meme.topText}</span>
                <span className={styles.bottom}>{Meme.bottomText}</span>
            </div>
        </main>
    )
}