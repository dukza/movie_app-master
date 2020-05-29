import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading : true
  }
  getMovies = async () => {
    // const movie = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    const {
      data:{
        data:{movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading:false})
  }
  componentDidMount(){
   this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <>
        {isLoading ? "Loading..." : movies.map( movie => {
          return (
            <Movie id={movie.id} year={movie.year} title={year.title} summary={title.summary} poster={summary.medium_cover_image}/>
          )
        })}
      </>
    )
  }
}

export default App;
  