import { useEffect } from "react"

function Results({ updateArray, updateKeyword }) {
    // using props we grabbed the updateArray containing the 3 gifs we want to render
    console.log('Props is working :)))))))))))))))', updateArray, updateKeyword)
    const newKeyWordArray = []
    
useEffect(() => {for(let i =0; i < updateKeyword.length; i++){
        newKeyWordArray.push({name: updateKeyword[i], gif: updateArray[i]})
    }
    console.log(newKeyWordArray)}, [])

    return (
        <section className="resultsSection">
            <ul className="results wrapper">
                {
                    updateArray.map(function (individualGif) {
                        return (
                            <li className="gifBox">
                                <img src={individualGif.images.original.url} alt={individualGif.title} />
                            </li>)
                    })
                    
                }
            </ul>
             <ul className="results wrapper"> 
                {
                    updateKeyword.map(function(individualKeyword){
                        return(
                            <li>
                                <p>{individualKeyword}</p>
                            </li>
                        )
                    })
                }
            </ul> 
        </section>
    )
}

export default Results