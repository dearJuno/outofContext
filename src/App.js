import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import Search from './components/Search';
import Header from './components/Header';

//Make two API calls  
//Make HTML foundation 
//Make Search Bar Component 
//Make a Footer Component 
//Make a Bottom Nav 
//Router/Routes/Route 
//set up Use State, Use Effect 
//Incorporate Firebase 

// Tasks for Saturday am.
// 1. Create Search bar where user can input movie of choice
// 2. Call movie api by movie title which returns id of movie
// 3. Using id of movie call api again to get list of keywords (contains keyword id and keyword name)
// 4. Create a randomizer to randomize and grab 3 keywords from the array
// 5. For each of the 3, call the giphy api and display a single gif (either the first one or random one)
// 6. Meet back here!




function App() {
    useEffect(() => {
      const apiKeyMov = `786c1383f2a24f7ee0f7ae525d2a9af4`
      const apiKeyGif = `gaER4NoH8CUjV7xNcUlFZdhPlYFRc1EY`
      axios({
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          api_key: apiKeyMov, 
          query: `Toy Story 2`, 
        }
      }).then((response) => {
        console.log(response.data.results)
      })


      axios({
        url: `https://api.themoviedb.org/3/movie/863/keywords`,
        params: {
          api_key: apiKeyMov 
        }
      }).then((response) => {
        console.log(response.data)
      })



      axios ({
        url: `https://api.giphy.com/v1/gifs/search`,
        params: {
          api_key: apiKeyGif,
          q: 'suicide'

        }
      }).then((response) => {
        console.log(response.data)
      })
    }, [])

  return (
    <div className="App">
      <Form 
      onChange={handleSearchInput}
      />
      <Header />
      <Search />
    </div>
  );
}

export default App;
