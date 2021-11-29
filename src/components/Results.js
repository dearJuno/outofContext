function Results({ updateArray}) {
    // using props we grabbed the updateArray containing the 3 gifs we want to render
console.log('Props is working :)))))))))))))))', updateArray)

    return (
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