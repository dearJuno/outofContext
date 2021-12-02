import './App.scss';
// import axios from 'axios';
import {useEffect} from 'react';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import InfoSection from './components/InfoSection';
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


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
  //state variable that we can use to pass information between results component and search component
  const [movieTitle, setmovieTitle] = useState('')
  const [moviePoster, setMoviePoster] = useState('')

  //trying to change the keyword title for the GIFS 
  const [] = useState('')

  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      {/* sending the prop to allow the search component to update state */}
    </div>
    <Routes>
      <Route path='/' element={<> 
        <Header/>
        <InfoSection/>
        <Search setmovieTitle={setmovieTitle} setMoviePoster={setMoviePoster}/>
        <Footer/>
      </>}/>
      <Route path="movie/:movieID" element={
        <>          
        <Header/>
              <Search setmovieTitle={setmovieTitle} setMoviePoster={setMoviePoster} /> 
              {/* moved ul to App.js because we only want one to render */}
            
              <Results movieTitle={movieTitle} moviePoster={moviePoster} />
        </>
      }/>
    </Routes>
    </Router>
  );
}

export default App;