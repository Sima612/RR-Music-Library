import {useState} from 'react';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar () {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <div>
            <form className='mb-4'>
                <input ref={term} type='text' placeholder='Search Here'
                onChange={(e) => handleSearch(e, term.current.value)}/>
            </form>
        </div>
    )
}

export default SearchBar