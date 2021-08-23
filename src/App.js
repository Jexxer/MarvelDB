import React, { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Search from './Components/Search';
import CharComics from './Components/CharComics';
import ComicDetails from './Components/ComicDetails';
import Series from './Components/Series';

function App() {

  const [searchData, setSearchData] = useState(null)
  const [seriesURL, setSeriesURL] = useState(null)

  return (
    <div className="App">

      <Header />

      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" render={() => (
          <Search searchData={searchData} setSearchData={setSearchData} /> 
        )}/>
        <Route exact path="/comics/:id" render={(routerProps) => (
          <CharComics match={routerProps.match}/>
        )}/>
        <Route exact path="/comicinfo/:id" render={(routerProps) => (
          <ComicDetails match={routerProps.match} seriesURL={seriesURL} setSeriesURL={setSeriesURL}/>
        )}/>
        <Route exact path="/series/:id" render={(routerProps) => (
          <Series match={routerProps.match} seriesURL={seriesURL} setSeriesURL={setSeriesURL}/>
        )}/>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
