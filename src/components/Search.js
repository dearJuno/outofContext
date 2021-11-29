import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'



import { useNavigate } from "react-router-dom";
// 1. Create Search bar where user can input movie of choice
// 2. Call movie api by movie title which returns id of movie


function Search({setUpdateArray, setUpdateKeyword}) {

  // const emptyArray = []
  
  const [searchInput, setSearchInput] = useState ('') 
  // const [keyword] = useState ('')
  const [movieId, setMovieId] = useState(100)
  const navigate = useNavigate();

  // function to handle someone typing in the input field
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }
  //function to handle the submission of the movie title form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
    //Call API by inputing movie title 
    axios({
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: apiKeyMov, 
        query: searchInput, 
      }
      }).then((response) => {
        console.log(response.data.results)
    
        const movieId = response.data.results[0].id
        setMovieId(movieId)
        //Pass movie id to keyword point
        axios({
        url: `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
        params: {
          api_key: apiKeyMov 
        }
        }).then((response) => {
          console.log(response.data)
          // An array to hold keywords
          const keywordArray = []
          for (let keyName in response.data.keywords) {
              keywordArray.push(response.data.keywords[keyName].name)
          }
          console.log(keywordArray)
          // Randomize keywords
          for (let i = keywordArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [keywordArray[i], keywordArray[j]] = [keywordArray[j], keywordArray[i]];
          }
          console.log(keywordArray)
          // Take only three keywords
          const threeKeywordArray = keywordArray.slice(0,3)
          setUpdateKeyword(threeKeywordArray)
          return threeKeywordArray
          })
          .then((response) => {
            console.log(response) 
            // Pass each keyword to GIPHY API
           const test = response.map(keyword => {
             //taking keyword and using the keyword to make call to Giph API 
                const apiKey ='vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
                return(
            axios({
                url: 'https://api.giphy.com/v1/gifs/search', 
                params: {
                    api_key: apiKey,
                    q: keyword, 
                }} 
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
            Promise.all(test).then((noPromise) =>{console.log(noPromise, "This is value")

            // update the state of the prop coming from the main app.js
            setUpdateArray(noPromise)
            navigate(`/movie/${movieId}`);
          })
            }
          )
        }) 
    // Clear search input field 
    setSearchInput('')
  }
  
  return (
      <section className="searchSection" id="searchSection">
          <div className="searchWrapper wrapper">
              <form action="submit" onSubmit={handleSubmit} role="search">
                  <label htmlFor="search">Search movie, get GIF's</label>
                  <div className="flexBox">
                    <input type="search" id="search" placeholder="Enter a movie" value={searchInput} onChange={handleSearchInput} required/>
            <button><FontAwesomeIcon icon={faSearch} /><span class="sr-only">Search</span></button>
                  </div> 
              </form>
          </div>
      </section>    
  )
}

export default Search