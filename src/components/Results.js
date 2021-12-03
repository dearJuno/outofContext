import { useState, useEffect } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


function Results() {
// isLoading is a state to check if our API calls are still loading 
    const [isLoading, setIsLoading] = useState(false)
// updateKeyword holds the array of all the key words that pertain to the searched movie 
    const [updateKeyword, setUpdateKeyword] = useState([])
// updateArray holds one GIF per keyword
    const [updateArray, setUpdateArray] = useState([])
// gifArray that holds the three GIFs and their corresponding keywords
    const [gifArray, setGifArray] = useState([])
//error holds the error message if there is one
    const [error, setError] = useState('')
// movieID that comes from the URL
    const movieID = useParams()
//justChecking making sure the page rerenders after the onClick functions
    const [justChecking, setJustChecking] = useState(false)
//movieTitle title for the movie
    const [movieTitle, setMovieTitle] = useState('')
//moviePoster to retrieve the movie poster
    const [moviePoster, setMoviePoster] = useState('')
//loadingIcon determines when the loading icon is rendering 
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

                if (response.data.keywords.length === 0) {
                    return setError('This movie does not contain any keywords with which to grab gifs with')
                }

                if (response.data.keywords.length <= 2) {
                    return setError('There are not enough keywords to display 3 gifs for this movie!')
                }
                const keywordArray = []
                // An array to hold keywords
                for (let keyName in response.data.keywords) {
                    keywordArray.push(response.data.keywords[keyName].name)
                }
                
                // Randomize keywords
                for (let i = keywordArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [keywordArray[i], keywordArray[j]] = [keywordArray[j], keywordArray[i]];
                }

                setUpdateKeyword(keywordArray)

                // Now return all keywords
                return keywordArray
            })
            .then((response) => {
                console.log(response)
                // Pass each keyword to GIPHY API
                const test = response.map(keyword => {
                    //taking keyword and using the keyword to make call to Giphy API 
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

                            // Randomize GIF results
                            // one gif per keyword
                            const random = array[Math.floor(Math.random() * array.length)]
                            //pushing three single gifs to empty array made at top
                            return random
                            // state is expecting an array and now we have an array 
                            
                        }).catch(error => {
                            return error
                        }))
                   
                })

                // wrapped our test array in a promise.all function to be able to resolve the promises and display the results
                Promise.all(test).then((noPromise) => {
                    // update the state of the prop coming from the main app.js
                    setUpdateArray(noPromise)

                })
            }
            ).catch(error => {
                return error
            })
     
    }, [movieID.movieID])


    useEffect(() => {
        setLoadingIcon(false)
        setError('')

        const newKeyWordArray = []

        // remove any cases of undefined values
        for ( let i = updateKeyword.length - 1; i >= 0; i--) {
            if (updateArray[i] === undefined) {
                updateArray.splice(i, 1)
                updateKeyword.splice(i, 1)
            }
        }

        // slice the value so we are only left with 3 gifs with 3 matching keywords

        let threeKeywordArray;
        let threeGifArray;
        if (updateArray.length >= 3) {
            threeKeywordArray = updateKeyword.slice(0, 3)
            threeGifArray = updateArray.slice(0, 3)

        } else {
            return setLoadingIcon(true)
        }

        for (let i = 0; i < threeGifArray.length; i++) {
            newKeyWordArray.push({ name: threeKeywordArray[i], gif: threeGifArray[i] })
        }
    
        //Comment on 145 is to override the errorin order to deploy site on Netlify
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
        

            // checking to see which of the three GIFs were clicked by the user
            const index = clickedElement.dataset.index
            
            const attachedKeyword =  gifArray[index].name  

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

                // Randomize GIF results
                // one gif per keyword
                const random = array[Math.floor(Math.random() * array.length)]
                //pushing three single gifs to empty array made at top

                newerNewerArray[index].gif = random
                setGifArray(newerNewerArray)
                setJustChecking(!justChecking)
                setIsLoading(false)
                
            })
            
        }

        // Ensure that none of the keywords we get back when the user clicks, is the same as the other two (or it doesn't choose itself again)
    function handleKeyword (e) {
        // first find all indexes 
        setIsLoading(true)
        const indexArray = []
        // Ensuring the three GIFS are all different 
        gifArray.forEach(ele => {
            indexArray.push(updateKeyword.indexOf(ele.name)) 
        })
        // sort indexes from smallest to largest in order to
        indexArray.sort(function(a, b) {
            return a - b;
        })

        // remove the keywords from
        const newSplicedGifs = updateArray.map(stuff => {return stuff})
        const newSplicedKeywords = updateKeyword.map(stuff => {return stuff})
        //scan through array to find index positions 
        for (let i = indexArray.length -1; i >= 0; i--)
        {newSplicedKeywords.splice(indexArray[i],1);
        newSplicedGifs.splice(indexArray[i],1)}

        let newIndex = Math.floor(Math.random()*newSplicedKeywords.length)

        let newClickedElement
        if(e.target.tagName === 'P') {
            newClickedElement = e.target
        }else if(e.target.tagName === 'BUTTON') {
            newClickedElement = e.target.children[0]
        }

        // grab index of keyword clicked
        const index = newClickedElement.dataset.index

        //create copy of gifArray
        const newerArray = gifArray
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

    return (

        <section className="resultsSection wrapper">
            {error && <h2 className="resultsError">{error}</h2>}

            {!error && loadingIcon && <div className='loaderContainer'><FontAwesomeIcon icon={faSpinner} className='spinner' /></div>}
            
            <div className='titleResults'>
            <h2>GIFs for {movieTitle} </h2>
            
            <img src={`https://image.tmdb.org/t/p/original/${moviePoster}`} alt={movieTitle}/>
            </div>
            {!error && isLoading && <div className="loader"></div>}
            <ul className="results">

                
                { !error &&

                    gifArray.map(function (individualGif, index) {
                        return (
                            <li className="gifBox wrapper" key={index} >
                                <button className="gifButton" onClick={handleImage} disabled={isLoading}>
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