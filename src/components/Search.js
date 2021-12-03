import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { trackPromise } from 'react-promise-tracker';
import { useNavigate } from "react-router-dom";

function Search() {

  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();


  // function to handle someone typing in the input field
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    
  }
  //function to handle the submission of the movie title form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')


    const keywordLabels = document.querySelectorAll('.gifBox ~ p')
    if (keywordLabels.length) {
      keywordLabels.textContent = ""
    }

    const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
    // // Track Promise for Loader to reference
    trackPromise(axios({
      //Call API by inputing movie title 
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: apiKeyMov,
        query: searchInput,
      }
    }).then((response) => {
      
        //error handling if there aren't any movies returne
      if (response.data.results.length === 0) {
        setError(` Uh Oh! There is no movie that matches the input: '${searchInput}' Try another movie or different spelling!`)
      
          return
      }

      const movieId = response.data.results[0].id
      navigate(`/`)
      navigate(`/movie/${movieId}`);
    }).catch(error => {
        return error
    }))

    // Clear search input field 
    setSearchInput('')

  }

  
  return (
    <section className="searchSection" id="searchSection">
      {error && <h2 className="searchError">{error}</h2>}
      <div>
        <form action="submit" onSubmit={handleSubmit} role="search">
          <label htmlFor="search">Search movie, get GIF's</label>
          <div className="searchBar">
            <input type="search" id="search" placeholder="Search Movie" value={searchInput} onChange={handleSearchInput} required />
            <button><FontAwesomeIcon icon={faSearch} /><span className="sr-only">Search</span></button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Search