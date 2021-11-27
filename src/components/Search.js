import { useState } from 'react';
// 1. Create Search bar where user can input movie of choice
// 2. Call movie api by movie title which returns id of movie


function Search() {

    const [searchInput, setSearchInput] = useState ('') 

    const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
    e.preventDefault();
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