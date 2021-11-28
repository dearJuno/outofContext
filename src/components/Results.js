function Results({ updateArray}) {
console.log('Props is working :)))))))))))))))', updateArray)

    return (
        // Elements containing li will probably need to be moved to app.js or separated in some way
       <section className="resultsSection">
            <ul className="results wrapper">
                {
                    updateArray.map(function (individualGif) {
                        return (
                            <li className="gifBox">
                                <img src={individualGif.images.original.url} alt={individualGif.title}/>
                            </li>)
                    })
                }
            </ul>
        </section>
    )
}

export default Results