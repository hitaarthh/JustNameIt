import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView';
import MovieNotFound from './components/MovieNotFound';

function App() {

  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setSearchResult(data.results)
      })
    }
  }, [searchText])
  

  return (
    <div className="App">

      <Navbar searchText={searchText} setSearchText={setSearchText}></Navbar>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchView keyword={searchText} searchResult={searchResult}/>}></Route>
        <Route path="/movies/:id" element={<MovieView/>}></Route>
        <Route path="*" element={<MovieNotFound text="Error 404 - The Page you're searching for is not found!"/>}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
