import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { trackPromise } from 'react-promise-tracker';



import { useNavigate } from "react-router-dom";
// 1. Create Search bar where user can input movie of choice
// 2. Call movie api by movie title which returns id of movie

function Search({ setUpdateArray, setUpdateKeyword }) {

  const [searchInput, setSearchInput] = useState('')
  // const [keyword] = useState ('')
  const navigate = useNavigate();

  // function to handle someone typing in the input field
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }
  //function to handle the submission of the movie title form
  const handleSubmit = (e) => {
    e.preventDefault();

    const keywordLabels = document.querySelectorAll('.gifBox ~ p')
    if (keywordLabels.length) {
      keywordLabels.textContent = ""
    }
    

    const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
    // Track Promise for Loader to reference
    trackPromise(axios({
      //Call API by inputing movie title 
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: apiKeyMov,
        query: searchInput,
      }
    }).then((response) => {
      

      const movieId = response.data.results[0].id
      navigate(`/movie/${movieId}`);
    }));
    // Clear search input field 
    setSearchInput('')
  }

  return (
    <section className="searchSection" id="searchSection">
      <div className="searchWrapper wrapper">
        <form action="submit" onSubmit={handleSubmit} role="search">
          <label htmlFor="search">Search movie, get GIF's</label>
          <div className="flexBox">
            <input type="search" id="search" placeholder="Enter a movie" value={searchInput} onChange={handleSearchInput} required />
            <button><FontAwesomeIcon icon={faSearch} /><span className="sr-only">Search</span></button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Search