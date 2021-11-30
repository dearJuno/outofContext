import reel from '../assets/filmreel.png'

function InfoSection() {
    return (
        <div>
            <h2>A GIF generator for your favourite flix</h2>
            <div className="headerPbox flexBox">
                {/* NEED TO DELETE THE STYLING  */}
                <img src={reel} alt="Blue Film Reel" style={{ height: '200px', width: '200px' }} />
                <p>Type in a movie in the search bar below to obtain the movie plot in GIFs.</p>
                <a href="#searchSection" class="button">Find GIF!</a>
            </div>
        </div>
    )
}

export default InfoSection