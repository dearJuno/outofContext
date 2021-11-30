import { useState, useEffect } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';

function Results() {

    const [updateKeyword, setUpdateKeyword] = useState([])
    const [updateArray, setUpdateArray] = useState([])
    // Keyword Bank for click change
    const [keywordClickArray, setKeywordClickArray] = useState([])
    const [gifArray, setGifArray] = useState([])
    const movieID = useParams()

    useEffect(() => {
        //Pass movie id to keyword point
        
        const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}/keywords`,
            params: {
                api_key: apiKeyMov
            }
        })
            .then((response) => {
                console.log(response.data)
                // An array to hold keywords
                const keywordArray = []
                for (let keyName in response.data.keywords) {
                    keywordArray.push(response.data.keywords[keyName].name)
                }

                // Send All Keywords To keywordClickArray
                setKeywordClickArray(response.data)

                console.log(keywordArray)
                console.log(keywordClickArray, 'keywordclickArray first set')
                
                // Randomize keywords
                for (let i = keywordArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [keywordArray[i], keywordArray[j]] = [keywordArray[j], keywordArray[i]];
                }
                console.log(keywordArray)
                // Take only three keywords
                const threeKeywordArray = keywordArray.slice(0, 3)
                setUpdateKeyword(threeKeywordArray)
                return threeKeywordArray
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
                            // Randomize GIF results
                            //one gif per keyword
                            const random = array[Math.floor(Math.random() * array.length)]
                            //pushing three single gifs to empty array made at top
                            return random
                            //state is expecting an array and now we have an array 
                            
                        }))
                    
                })
                
                console.log(test, 'This is promise array')
                // wrapped our test array in a promise.all function to be able to resolve the promises and display the results
                Promise.all(test).then((noPromise) => {
                    console.log(noPromise, "This is value")

                    // update the state of the prop coming from the main app.js
                    setUpdateArray(noPromise)
                })                
            })       
        
    }, [movieID.movieID])    
    
    useEffect(() => {
        // using props we grabbed the updateArray containing the 3 gifs we want to render
        console.log('Props is working :)))))))))))))))', updateArray, updateKeyword)
        const newKeyWordArray = []

        for (let i = 0; i < updateKeyword.length; i++) {
            newKeyWordArray.push({ name: updateKeyword[i], gif: updateArray[i] })
        }
        console.log(updateKeyword, 'updateKeyword')
        console.log(updateArray, 'updateArray')
        setGifArray(newKeyWordArray)

    }, [updateArray])

    
        // Update images when clicked
        function handleImage(e) {
            const keywordsToUse = keywordClickArray.keywords
            console.log(keywordsToUse, 'not random keywords after click')

            // function to randomize keyword index
            function randomIntFromInterval(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

            // Variable references random index between 0 and total number of keyword object
            const rndInt = randomIntFromInterval(0, keywordClickArray.keywords.length)

            console.log(keywordsToUse[rndInt], 'random choice')
           
            const apiKey = 'vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
            // Track Promise for Loader to reference
            trackPromise(axios({
                url: 'https://api.giphy.com/v1/gifs/search',
                params: {
                    api_key: apiKey,
                    q: keywordsToUse[rndInt].name,
                }
            }
            ).then((response) => {
                const newGifArray = response.data.data

                // Randomize GIF results
                const randomGifs = newGifArray[Math.floor(Math.random() * newGifArray.length)]
                e.target.src = randomGifs.images.original.url
                e.target.key = randomGifs.images.original.id
                e.target.alt = randomGifs.images.original.title
                e.target.title = randomGifs.images.original.title
                e.nativeEvent.originalTarget.nextElementSibling.innerText = keywordsToUse[rndInt].name

            }));
            
        }
    
    


    
    return (
       
            <>
                {
                    
                    gifArray.map(function (individualGif) {
                        return (
                            <li className="gifBox">
                                <img src={individualGif.gif.images.original.url} alt={individualGif.gif.title} onClick={handleImage}/>
                                <p>{individualGif.name}</p>
                            </li>)
                    })
                    
                }
            
            </>
    )
}

export default Results