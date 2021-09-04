import React,{useState} from 'react'
import {MovieData} from "./MovieData"
import MovieList from './MovieList';
import { Add } from './Add';

const MovieCard = ({searchField}) => {
    const [movie, setMovie] = useState(MovieData);
    const addNew=(newMovie)=>setMovie([...movie,newMovie])
    
    
    return (
        <>
        <Add addNew={addNew} clasName="Add"/>
        <div id="movies">
            
            {movie.filter(
    movie => {
    return (
        movie
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        movie
        .rating
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    }
).map((film,i)=><MovieList MovieData={film} key={i}/>)} 
            
        </div>
        </>
    )
}

export default MovieCard
