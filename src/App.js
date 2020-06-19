import React from "react";
import Navbar from './components/Navbar'
import {data} from './data'
import MovieCard from './components/MovieCard';
class App extends React.Component {
render(){
  return(
    <div className='App'>
        <Navbar></Navbar>
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favorites</div>
          </div>
          <div className='list'></div>
          {data.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
    </div>
  )  
}
}
export default App;
