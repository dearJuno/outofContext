import './App.scss';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import InfoSection from './components/InfoSection';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {  

  return (
    <Router>
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<> 
        <InfoSection/>
        <Search/>
      </>}/>
      <Route path="movie/:movieID" element={
        <>          
              <Search/> 
              <Results/>
        </>
      } 
      />
        <Route path='aboutus' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;