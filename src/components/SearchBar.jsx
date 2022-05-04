import {useState} from 'react';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar () {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <div>
            <form>
                <input ref={term} type='text' placeholder='Search Here'
                onChange={(e) => handleSearch(e, term.current.value)}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default SearchBar