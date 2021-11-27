import { useState } from 'react';
import axios from 'axios';
// 1. Create Search bar where user can input movie of choice
// 2. Call movie api by movie title which returns id of movie


function Search() {
  
  const [searchInput, setSearchInput] = useState ('') 
  // const [keyword] = useState ('')

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

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
          console.log(threeKeywordArray)
          return threeKeywordArray
          })
          .then((response) => {
            console.log(response) 
            // Pass each keyword to GIPHY API
            response.forEach(keyword => {
                const apiKey ='vKgSlbA9IvP9mzh808UAXFD7YeIabsQe'
            axios({
                url: 'https://api.giphy.com/v1/gifs/search', 
                params: {
                    api_key: apiKey,
                    q: keyword, 
                }
              }).then((response) => {
                  const array = response.data.data
                  // Randomize GIF results
                  const random = array[Math.floor(Math.random() * array.length)]
                  console.log(random)
                })
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
              <h2>Lorem ipsum dolor sit amet.</h2>
              <form action="submit" onSubmit={handleSubmit} role="search">
                  <label htmlFor="search">Lorem ipsum dolor sit amet consectetur adipisicing.</label>
                  <input type="search" id="search" placeholder="Enter a movie" value={searchInput} onChange={handleSearchInput} required/>
                  <button>Submit</button>
              </form>
          </div>
      </section>    
  )
}

export default Search