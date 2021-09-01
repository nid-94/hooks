import React,{useState} from 'react'
import {MovieData} from "./MovieData"
import MovieList from './MovieList';
import { Add } from './Add';

const MovieCard = ({filteredMovies}) => {
    const [movie, setMovie] = useState(MovieData);
    const addNew=(newMovie)=>setMovie([...movie,newMovie])
    
    
    return (
        <div id="movies">
            {movie.map((film,i)=><MovieList MovieData={film} key={i}/>)} 
            <Add addNew={addNew}/>
            {filteredMovies.map((film,i)=><MovieList MovieData={film} key={i} />)}
        </div>
    )
}

export default MovieCard
