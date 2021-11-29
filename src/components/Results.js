import { useEffect } from "react"

function Results({ updateArray, updateKeyword }) {
    // using props we grabbed the updateArray containing the 3 gifs we want to render
    console.log('Props is working :)))))))))))))))', updateArray, updateKeyword)
    const newKeyWordArray = []
    
for(let i =0; i < updateKeyword.length; i++){
        newKeyWordArray.push({name: updateKeyword[i], gif: updateArray[i]})
    }
    console.log(newKeyWordArray)

    return (
        <section className="resultsSection">
            <ul className="results wrapper">
                {
                    newKeyWordArray.map(function (individualGif) {
                        return (
                            <li className="gifBox">
                                <img src={individualGif.gif.images.original.url} alt={individualGif.gif.title}/>
                                <p>{individualGif.name}</p>
                            </li>)
                    })
                    
                }
            </ul>
        </section>
    )
}

export default Results