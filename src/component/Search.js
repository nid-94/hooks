import React,{useState} from 'react'
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function Search({MovieData}) {
    const [searchField, setSearchField] = useState("");
    const filteredMovies = MovieData.filter(
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
);

const handleChange = e => {
    setSearchField(e.target.value);

};
    

    return (
        <div>
            <div id="search">
            <FontAwesomeIcon icon={faSearch} />
                <input  type = "search" placeholder = "Search Movie" onChange = {handleChange}/>
            </div>
            <MovieCard filteredMovies={filteredMovies}/>
        </div>

    )
}

export default Search
