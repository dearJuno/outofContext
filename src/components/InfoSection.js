import reel from '../assets/movieReel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import {faFileVideo} from '@fortawesome/free-solid-svg-icons'
function InfoSection() {
    return (
        <div className='informationSection wrapper'>           
                <h2>A GIF generator for your favourite flix</h2>
            <div className='infoContainer wrapper'>
                <div className="iconContainer">
                    <img className="movIcons" src={reel} alt="Film Reel Icon"/>
                    <FontAwesomeIcon icon={faTicketAlt} size="3x" className="movIcons big" /><span className="sr-only">Movie Ticket Icon</span>
                    <FontAwesomeIcon icon={faVideo} size="3x" className="movIcons big" /><span className="sr-only">Film Camera Icon</span>
                    <FontAwesomeIcon icon={faFileVideo} size="3x" className="movIcons big" /><span className="sr-only">Film File Icon</span>
                </div>
                <div className='infoBox'>
                    <p>Need a movie plot...without the words? We know how cumbersome reading can be. Search any movie name and our app will show you exceptional memes that best describe it!</p>
                    <p className='tldr'>TLDR: Search Movie Get Plot With Gifs.</p>
                <a href="#searchSection">Find GIFs!</a>
                </div> 
                </div>
        </div>
    )
}

export default InfoSection