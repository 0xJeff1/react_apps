import '../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Content()
{
    return (
        <> 
        <div className='entrydata'>
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="japan" />
                <div className='description'>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                    <p>JAPAN</p>
                    <a href="">View on Google Maps</a>
                    </div>
                    
                    <h1>Mount Fuji</h1>
                    <br />
                    <h2>12 Jan, 2023 - 24 Jan, 2023</h2>
                    <br />
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists</p>
                </div>

        </div>
        </>
    )
}