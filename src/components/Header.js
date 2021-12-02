import popcorn from '../assets/logo.svg';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <header>
            <a href="#searchSection" class="skip-link">Skip To Content</a>
            <div className="headerSec">
                <div>
                    {/* ADDED LINK BACK TO HOME PAGE  */}
                    <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {/* <LogoSvg /> */}
                        <img src={popcorn} alt="Popcorn Icon"/>
                    </Link>
                    <h1>Out Of Context</h1>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/aboutus" style={{textDecoration: 'none' }}>
                                About
                            </Link>
                        </li>
                        {/* <li>
                            <a href="#">My Saves</a>
                        </li> */}
                    </ul>
                     <FontAwesomeIcon aria-label="Burger Menu Icon" className="menuBar" icon={faBars} size="2x"/>
                </nav>
            </div>
        </header>
    )
}

export default Header