import { ReactComponent as LogoSvg} from './logo.svg';

function Header() {
    return (
        <header className="flexBox">
            <a href="#searchSection" class="skip-link">Skip To Content</a>
            <div className="wrapper">
                <div className="flexBox">
                    <div className="logo">
                        <LogoSvg />
                    </div>
                    <h1>Out Of Context</h1>
                </div>
                <h2>A GIF generator for your favourite flix</h2>
                <div className="headerPbox flexBox">
                    {/* film strip image */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem sunt ullam, molestiae optio nemo mollitia ad sit tempora dicta!</p>
                    <a href="#searchSection" class="button">Find GIF!</a>
                </div>
            </div>
        </header>
    )
}

export default Header