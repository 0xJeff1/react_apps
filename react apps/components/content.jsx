
import '../src/content.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Content({img , title , country , googleMapsLink , dates , text })
{
  
    return (
        <> 
            <div className='entrydata'>
                    <img src={img.src} alt={img.alt} />
                    <div className='description'>
                        <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                        <p>{country}</p>
                        <a href={googleMapsLink}>View on Google Maps</a>
                        </div>
                        
                        <h1>{title}</h1>
                        <br />
                        <h2>{dates}</h2>
                        <br />
                        <p>{text}</p>
                    </div>

            </div>
        </>
    )
}