import React,{useState} from 'react'
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function Search() {
    const [searchField, setSearchField] = useState("");
    
const handleChange = e => {
    setSearchField(e.target.value);

};
    

    return (
        <div>
            <div id="search">
                <FontAwesomeIcon icon={faSearch} />
                <input  type = "search" placeholder = "Search Movie" onChange = {handleChange}/>
            </div>
            <MovieCard searchField={searchField}/>
        </div>

    )
}

export default Search
