import React from "react";
import Navbar from './components/Navbar'
import {data} from './data'
import MovieCard from './components/MovieCard';

class App extends React.Component {
  componentWillMount(){
  this.props.store.dispatch({
    type:'ADD_MOVIES',
    movies:data
})
console.log(this.props.store.getState())
this.forceUpdate();
}

render(){
  const movies=this.props.store.getState();
  return(
<div className='App'>
        <Navbar></Navbar>
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favorites</div>
          </div>
          <div className='list'></div>
          {movies.map(movie => (
            <MovieCard movie={movie} key={`movie${movie.Title}`} />
          ))}
        </div>
    </div>
  )  
}
}
export default App;
