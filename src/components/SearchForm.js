import React from 'react'

const SearchForm = (props) => {
    return (
        <form>
            <label>Search Questions</label>
            <input type="text"
                value={props.searchTerm}
                onChange={props.onInputChange}/>
        </form>
    )
}

export default SearchForm