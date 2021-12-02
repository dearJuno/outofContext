import { useState, useEffect } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";

//trying loading screen 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
 

function Results() {

    const [isLoading, setIsLoading] = useState(false)
    const [updateKeyword, setUpdateKeyword] = useState([])
    const [updateArray, setUpdateArray] = useState([])
    const [gifArray, setGifArray] = useState([])
    const [error, setError] = useState('')
    const movieID = useParams()
    const [justChecking, setJustChecking] = useState(false)
    const [movieTitle, setMovieTitle] = useState('')
    const [moviePoster, setMoviePoster] = useState('')

    const [loadingIcon, setLoadingIcon] = useState(false)


    useEffect(() => {
        //Pass movie id to keyword point
        setError('')
        setIsLoading(true)
        const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}/keywords`,
            params: {
                api_key: apiKeyMov
            }
        })
            .then((response) => {
                console.log(response.data)

                if (response.data.keywords.length === 0) {
                    return setError('This movie does not contain any keywords with which to grab gifs with')
                }
                // What should we do if there is only 1 or 2 keywords in the array : right now it just goes through normally (ie: sam) ========================>
                if (response.data.keywords.length <= 2) {
                    return setError('There are not enough keywords to display 3 gifs for this movie!')
                }
                // An array to hold keywords
                
                const keywordArray = []
                for (let keyName in response.data.keywords) {
                    keywordArray.push(response.data.keywords[keyName].name)
                }

                
                // Randomize keywords
                for (let i = keywordArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [keywordArray[i], keywordArray[j]] = [keywordArray[j], keywordArray[i]];
                }
                console.log(keywordArray)

                setUpdateKeyword(keywordArray)

                //now return all keywords
                return keywordArray
            })
            .then((response) => {
                console.log(response)
                // Pass each keyword to GIPHY API
                const test = response.map(keyword => {
                    //taking keyword and using the keyword to make call to Giph API 
                    const apiKey = 'vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
                    return (
                        axios({
                            url: 'https://api.giphy.com/v1/gifs/search',
                            params: {
                                api_key: apiKey,
                                q: keyword,
                            }
                        }
                        ).then((response) => {
                            const array = response.data.data
                            // in the case that the giphy api doesnt return any gifs for our selected keyword, we should ? =============================>
                            if (array.length === 0) {
                                console.log('yo no gifs here')
                            
                            }
                            console.log(array)
                            // Randomize GIF results
                            //one gif per keyword
                            const random = array[Math.floor(Math.random() * array.length)]
                            //pushing three single gifs to empty array made at top
                            return random
                            //state is expecting an array and now we have an array 


                            
                        }).catch(error => {
                            console.log(error)
                            return error

                        }))
                    
                })

                console.log(test, 'This is promise array')
                // wrapped our test array in a promise.all function to be able to resolve the promises and display the results
                Promise.all(test).then((noPromise) => {
                    console.log(noPromise, "This is value")
                    // in the case that the value from api is undefined

                    // update the state of the prop coming from the main app.js
                    setUpdateArray(noPromise)

                })
            }
            ).catch(error => {
                console.log(error)
                return error
            })
    
     
    }, [movieID.movieID])

    
    useEffect(() => {
        setLoadingIcon(false)
        setError('')
        // using props we grabbed the updateArray containing the 3 gifs we want to render
        setError('')
        console.log('Props is working :)))))))))))))))', updateArray, updateKeyword)
        const newKeyWordArray = []

        // remove any cases of undefined values
        for ( let i = updateKeyword.length - 1; i >= 0; i--) {
            if (updateArray[i] === undefined) {
                console.log('removed a value!')
                updateArray.splice(i, 1)
                updateKeyword.splice(i, 1)
            }
        }
        // slice the value so we are only left with 3 gifs with 3 matching keywords

        let threeKeywordArray;
        let threeGifArray;
        console.log(updateArray.length)
        if (updateArray.length >= 3) {
            threeKeywordArray = updateKeyword.slice(0, 3)
            threeGifArray = updateArray.slice(0, 3)

        } else { // right now this message always plays at start of render....
            // error message if initially there are atleast 3 keywords for said movie, but after removing the keywords that don't result in gifs from the api, there are less than 3.
            console.log('hi')
            return setLoadingIcon(true)
        }

        for (let i = 0; i < threeGifArray.length; i++) {
            newKeyWordArray.push({ name: threeKeywordArray[i], gif: threeGifArray[i] })
        }
        console.log(threeKeywordArray, 'updateKeyword')
        console.log(threeGifArray, 'updateArray')
        setGifArray(newKeyWordArray)
        setIsLoading(false)
        // eslint-disable-next-line
    }, [updateArray])
    

        // Update images when clicked
        function handleImage(e) {
            setIsLoading(true)
            let clickedElement

            if(e.target.tagName === 'IMG') {
                clickedElement = e.target
            }else if(e.target.tagName === 'BUTTON') {
                clickedElement = e.target.children[0]
            }
            console.log(clickedElement.dataset.index)
 
            console.log (clickedElement.currentSrc)
            // console.log(gifArray.findIndex(x => x.gif.images.original.url === e.target.currentSrc))
            // const index = gifArray.findIndex(x => x.gif.images.original.url === clickedElement.currentSrc)
            const index = clickedElement.dataset.index
            
            const attachedKeyword =  gifArray[index].name  
            console.log(attachedKeyword)

            const newerNewerArray = gifArray.map(stuff => {return stuff})
            
            const apiKey = 'vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
            axios({
                url: 'https://api.giphy.com/v1/gifs/search',
                params: {
                    api_key: apiKey,
                    q: attachedKeyword,
                }
            }
            ).then((response) => {
                const array = response.data.data
                // in the case that the giphy api doesnt return any gifs for our selected keyword, we should ? =============================>
                if (array.length === 0) {
                    console.log('yo no gifs here')

                }
                console.log(array)
                // Randomize GIF results
                //one gif per keyword
                const random = array[Math.floor(Math.random() * array.length)]
                //pushing three single gifs to empty array made at top

                newerNewerArray[index].gif = random
                setGifArray(newerNewerArray)
                setJustChecking(!justChecking)
                setIsLoading(false)
                
            })
            

        }

    // logic is not fully there for when you start changing a lot...
    function handleKeyword (e) {
        // first find all indexes 
        setIsLoading(true)
        const indexArray = []

    
        gifArray.forEach(ele => {
            console.log(ele)
            indexArray.push(updateKeyword.indexOf(ele.name)) 
        })
        console.log( indexArray)
        // sort indexes from smallest to largest
        indexArray.sort(function(a, b) {
            return a - b;
          });
          
        console.log(indexArray)

        // remove the keywords from
        const newSplicedGifs = updateArray.map(stuff => {return stuff})
        const newSplicedKeywords = updateKeyword.map(stuff => {return stuff})
        for (let i = indexArray.length -1; i >= 0; i--)
        {newSplicedKeywords.splice(indexArray[i],1);
        newSplicedGifs.splice(indexArray[i],1)}
        console.log(updateKeyword)
        console.log(newSplicedKeywords)

        let newIndex = Math.floor(Math.random()*newSplicedKeywords.length)

        console.log(e)

        let newClickedElement
        if(e.target.tagName === 'P') {
            newClickedElement = e.target
        }else if(e.target.tagName === 'BUTTON') {
            newClickedElement = e.target.children[0]
        }
        console.log(newClickedElement.dataset.index)


        console.log( e.target.innerHTML)

        // grab index of keyword clicked
        console.log(gifArray.findIndex(x => x.name === e.target.innerHTML))
        const index = newClickedElement.dataset.index

        //create copy of gifArray
        const newerArray = gifArray

        // grab new keyword and gif
        // const newIndex = Math.floor(Math.random()*(updateKeyword.length-4) + 4)
        // let newIndex = Math.floor(Math.random()*(updateKeyword.length-4) + 4)



        const newKeyword = newSplicedKeywords[newIndex];
        const newGif = newSplicedGifs[newIndex];

        // change old keyword and gif with new keyword and gif
        newerArray[index].gif = newGif
        newerArray[index].name = newKeyword
        setGifArray(newerArray)
        setJustChecking(!justChecking)
        setIsLoading(false)
    }


    // Grab movie name and movie poster 
    useEffect(() => {

        const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}`,
            params: {
                api_key: apiKeyMov
            }
        }).then(response=> {
            console.log(response.data)
            setMovieTitle(response.data.original_title)
            setMoviePoster(response.data.poster_path)
        })

    }, [movieID.movieID])

    console.log(gifArray)
    return (

        <section className="resultsSection wrapper">
            {error && <h2 className="resultsError">{error}</h2>}

            {!error && loadingIcon && <div className='loaderContainer'><FontAwesomeIcon icon={faSpinner} className='spinner' /></div>}
            
            <div className='titleResults'>
            <h2>GIFs for {movieTitle } </h2>
            
            <img src={`https://image.tmdb.org/t/p/original/${moviePoster}`} alt={movieTitle}/>
            </div>
            {!error && isLoading && <div className="loader"></div>}
            <ul className="results">

                
                { !error &&

                    gifArray.map(function (individualGif, index) {
                        return (
                            <li className="gifBox" key={index} >
                                <button className="gifButton" onClick={handleImage} disabled={isLoading}>
                                    {/* added title att. (title appears as tooltip on hover) */}
                                    <img src={individualGif.gif.images.original.url} alt={individualGif.gif.title} data-index={index} title={individualGif.gif.title} />
                                </button>
                                <button className="keywordButton" onClick={handleKeyword} disabled={isLoading}>

                                    <p data-index={index}>{individualGif.name}</p>

                                </button>
                            </li>)
                    })
                    
                }

            </ul>
        </section>
    )
}

export default Results