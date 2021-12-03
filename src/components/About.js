import dan from '../assets/dan.jpg'
import aileen from '../assets/aileen.jpg'
import riley from '../assets/riley.jpg'
import adrian from '../assets/adrian.jpg'
import parasite from '../assets/parasitemp.jpg'
import shrek from '../assets/shrekmp.jpg'
import dod from '../assets/dawnofdeadmp.jpeg'
import ryan from '../assets/savingprivateryan.jpg'
import emily from '../assets/emily.jpg'
import silentvoice from '../assets/asilentvoicemp.jpg'
function About() {
    return (
        <section>
            <h1 className='aboutUsH1 devWrap'>Dev Info</h1>
            <section>
            <div className="devProfile devWrap">
                <div className="devInfo">
                    
                        <img src={dan} alt="Headshot of Dev. Dan Tran"/>
                    
                    <ul>
                            <li><h2>Dan Tran</h2></li>
                            <li><a href="https://www.linkedin.com/in/dan-tran-b2b925226/">LinkedIn</a></li>
                            <li><a href="https://twitter.com/Dan_Huy_Tran">Twitter</a></li>
                            <li><a href="https://github.com/amia-real">Github</a></li>
                        <li><p><span>Fav Movie: </span> A Silent Voice</p></li>
                    </ul>
                </div>
                <div className='imageContainer'>
                 
                    <img className="moviePoster" src={silentvoice} alt="Movie Poster for A Silent Voice"/>
                </div>
            </div>
                <div className="devProfile devWrap">
                <div className="devInfo">
                        <img src={emily} alt="Headshot of Dev. Emily Mernik"/>
                    <ul>
                        <li><h2>Emily Mernik</h2></li>
                            <li>
                                <a href="https://www.linkedin.com/in/emily-miernik-a4a344115/">LinkedIn</a>
                            </li>
                            <li>
                                <a href=">https://twitter.com/Emily_Miernik">Twitter</a>
                            </li>
                            <li>
                                <a href="https://github.com/emilymiernik">Github</a>
                            </li>
                        <li><p><span>Fav Movie:</span> Parasite</p></li>
                    </ul>
                </div>
                <div className='imageContainer'>
                    <img className="moviePoster" src={ parasite} alt="Movie Poster for Parasite"/>
                </div>
                </div>
                <div className="devProfile devWrap">
                <div className="devInfo">
                        <img src={aileen} alt="Headshot of Dev. Aileen Nunez"/>
                    <ul>
                            <li><h2>Aileen Nunez</h2></li>
                            <li><a href="https://www.linkedin.com/in/aileenunez1016/">LinkedIn</a></li>
                            <li><a href="https://twitter.com/aileencodes">Twitter</a></li>
                            <li><a href="https://github.com/aileenunez">Github</a></li>
                        <li><p><span>Fav Movie:</span> Shrek</p></li>
                    </ul>
                </div>
                <div className='imageContainer'>
                    <img className="moviePoster" src={shrek} alt="Movie Poster for Shrek"/>
                </div>
                </div>
                <div className="devProfile devWrap">
                <div className="devInfo">
                        <img src={riley} alt="Headshot of Dev. Riley Hoffman"/>
                    <ul>
                            <li><h2>Riley Hoffman</h2></li>
                            <li><a href="https://www.linkedin.com/in/riley-hoffman-014623213/">LinkedIn</a></li>
                            <li><a href="https://github.com/Riley-Hoffman">Github</a></li>
                        <li><p><span>Fav Movie:</span> Dawn of the Dead</p></li>
                    </ul>
                </div>
                <div className='imageContainer'>
                    <img className="moviePoster" src={dod} alt="Movie Poster for Dawn of the Dead 1978"/>
                </div>
                </div>
                {/* ADRIAN PROFILE */}
                <div className="devProfile devWrap">
                <div className="devInfo">
                        <img src={ adrian} alt="Headshot of Instructor Adrian Pearman"/>
                    <ul>
                            <li><h2>Adrian Pearman</h2></li>
                            <li>
                                <p className='adrian'>Thanks to Instructor<span>Adrian for his support</span></p>
                            </li>
                        <li><p><span>Fav Movie:</span> Saving Private Ryan</p></li>
                    </ul>
                </div>
                <div className='imageContainer'>
                    <img className="moviePoster" src={ryan} alt="Movie Poster for Saving Private Ryan"/>
                </div>
                </div>
            </section>
            </section>
    )
}
export default About 