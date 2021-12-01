import popcorn from '../assets/logo.svg';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flexBox">
            <a href="#searchSection" class="skip-link">Skip To Content</a>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li>
                            <p>Developer Pics</p>
                        </li>
                    </ul>
                </nav>
                <div className="flexBox">
                    {/* NEED TO DELETE THE STYLING  */}
                    {/* ADDED LINK BACK TO HOME PAGE  */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        {/* <LogoSvg /> */}
                        <img src={popcorn} alt="Popcorn Icon"/>
                    </div>
                    </Link>
                    <h1>Out Of Context</h1>
                </div>
            </div>
        </header>
    )
}

export default Header