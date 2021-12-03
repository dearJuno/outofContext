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
            <h1>Dev Info</h1>
            <section>
                {/* DAN PROFILE  */}
            <div className="devProfile">
                <div className="devInfo">
                        <img src={dan} alt="Headshot of Dev. Dan Tran"/>
                    <ul>
                            <li><h2>Dan Tran</h2></li>
                            <li><a href="https://www.linkedin.com/in/dan-tran-b2b925226/">LinkedIn</a></li>
                            <li><a href="https://twitter.com/Dan_Huy_Tran">Twitter</a></li>
                            <li><a href="https://github.com/amia-real">Github</a></li>
                        <li><p><span>Favorite Movie: </span>Silent Voice</p></li>
                    </ul>
                </div>
                    <img className="moviePoster" src={silentvoice} alt="Movie Poster for A Silent Voice"/>
                </div>
                {/* EMILY PROFILE  */}
                <div className="devProfile">
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
                        <li><p><span>Favorite Movie:</span> Parasite</p></li>
                    </ul>
                </div>
                    <img className="moviePoster" src={ parasite} alt="Movie Poster for Parasite"/>
                </div>
                {/* AILEEN PROFILE */}
                <div className="devProfile">
                <div className="devInfo">
                        <img src={aileen} alt="Headshot of Dev. Aileen Nunez"/>
                    <ul>
                            <li><h2>Aileen Nunez</h2></li>
                            <li><a href="https://www.linkedin.com/in/aileenunez1016/"></a>LinkedIn</li>
                            <li><a href="https://twitter.com/aileencodes"></a>Twitter</li>
                            <li><a href="https://github.com/aileenunez"></a>Github</li>
                        <li><p><span>Favorite Movie:</span> Shrek</p></li>
                    </ul>
                </div>
                    <img className="moviePoster" src={shrek} alt="Movie Poster for Shrek"/>
                </div>
                {/* RILEY PROFILE  */}
                <div className="devProfile">
                <div className="devInfo">
                        <img src={riley} alt="Headshot of Dev. Riley Hoffman"/>
                    <ul>
                            <li><h2>Riley Hoffman</h2></li>
                            <li><a href="https://www.linkedin.com/in/riley-hoffman-014623213/"></a>LinkedIn</li>
                            <li><a href="https://github.com/Riley-Hoffman"></a>Github</li>
                        <li><p><span>Favorite Movie:</span> Dawn of the Dead 1978</p></li>
                    </ul>
                </div>
                    <img className="moviePoster" src={dod} alt="Movie Poster for Dawn of the Dead 1978"/>
                </div>
                {/* ADRIAN PROFILE */}
                <div className="devProfile">
                <div className="devInfo">
                        <img src={ adrian} alt="Headshot of Instructor Adrian Pearman"/>
                    <ul>
                            <li><h2>Adrian Pearman</h2></li>
                            <li>
                                <p>Special Thanks to Instructor Adrian Pearman for his support with getting our web page up and running!</p>
                            </li>
                        <li><p><span>Favorite Movie:</span> Saving Private Ryan</p></li>
                    </ul>
                </div>
                    <img className="moviePoster" src={ryan} alt="Movie Poster for Saving Private Ryan"/>
                </div>
            </section>
            </section>
    )
}
export default About 