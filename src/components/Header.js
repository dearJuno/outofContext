import popcorn from '../assets/logo.svg';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <header>
            <a href="#searchSection" className="skip-link">Skip To Content</a>
            <div className="headerSec">
                <div>
                    <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={popcorn} alt="Popcorn Icon"/>
                            <h1>Out Of Context<span className="sr-only"> Home</span></h1>
                    </Link>
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