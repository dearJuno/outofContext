function Header() {
    return (
        <header className="flexBox">
            {/* hidden/tab focusable skip to content button */}
            <a href="#searchSection" class="skip-link">Skip To Content</a>
            <div className="wrapper">
                <div className="flexBox">
                    {/* popcorn image */}
                    <h1>Out Of Context</h1>
                </div>
                <h2>A GIF generator for your favourite flix</h2>
                <div className="headerPbox flexBox">
                    {/* film strip image */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem sunt ullam, molestiae optio nemo mollitia ad sit tempora dicta!</p>
                    {/* moved this link into the div for positioning */}
                    <a href="#searchSection" class="button">Find GIF!</a> 
                </div>
            </div>
        </header>
    )
}

export default Header