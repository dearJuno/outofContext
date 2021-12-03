import reel from '../assets/movieReel.png'

function InfoSection() {
    return (
        <div className='flexContainer wrapper'>           
                <h2>A GIF generator for your favourite flix</h2>
                <div className='infoContainer wrapper'>              
                <img className="mreel"src={reel} alt="Black Film Reel"/>
                <div className='infoBox'>
                <p>Need a movie plot...without the words? Search any movie name and our app will show you exceptional memes that best describe it!</p>
                <a href="#searchSection" className="button">Find GIF!</a>
                </div> 
                </div>
        </div>
    )
}

export default InfoSection