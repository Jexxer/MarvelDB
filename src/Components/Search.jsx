import React, { useState } from 'react';
import { MD5 } from 'crypto-js';
import CharDetails from './CharDetails';

function Search({searchData, setSearchData}) {

    let initialState = {
        input: ''
    }

    const [formState, setFormState] = useState(initialState)

    function handleChange(event){
            setFormState({
                ...formState,
                input: event.target.value
            })
    }

    function handleSubmit(event){
        event.preventDefault()
        getSearch(formState.input)
        setFormState(initialState)
    }

    function getSearch(input){
        let search = input.split(' ').join('+')
        const ts = Date.now()
        const hash = MD5(ts+process.env.REACT_APP_PRIV_KEY+process.env.REACT_APP_PUB_KEY).toString()
        const url = "http://gateway.marvel.com/v1/public/characters?"

        const api_url = `${url}nameStartsWith=${search}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hash}`
        console.log(api_url)
            fetch(api_url)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setSearchData(res.data.results)
            })
            .catch(console.error())
    }

    if(searchData === null){
        return (
        <div className="search-page">
            <form onSubmit={handleSubmit}>
                <input className="search-bar" placeholder="Search for a character" id="input" type="text" onChange={handleChange} value={formState.input}/>
            </form>
        </div>
        );
    } else {
        return (
        <div className="search-page">
            <form onSubmit={handleSubmit}>
                <input className="search-bar" id="input" type="text" onChange={handleChange} value={formState.input}/>
            </form>
            <CharDetails searchData={searchData}/>
        </div>
        )
    }

    
}

export default Search;