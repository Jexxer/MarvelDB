import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MD5 } from 'crypto-js';
import axios from 'axios';
import Select from 'react-select'
import loadingGif from '../media/loadingGif.gif'




function CharComics({ match }) {

    const options = [
        { value: 5, label: '5' },
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
      ]

    const initialLimit = {
        value: 10
    }

    const charId = match.params.id
    const [comics, setComics] = useState(null)
    const [loading, setLoading] = useState(true)

    const [comicsOffset, setComicsOffset] = useState(0)
    const [totalComics, setTotalComics] = useState(0)
    const [limit, setLimit] = useState(initialLimit)

    // 100 / limit(comics per page)

    // const [comicsReceived, setComicsReceived] = useState([])
    // let totalComicsReceived = []
    // totalComicsReceived = totalComicsReceived.concat(comics.results) // an array of results (each comic)

    
    // this is something to consider
    
    useEffect(() => {
        setComicsOffset(0)
    },[limit])

    function nextPage(){
        let currentOffset = comicsOffset
        setComicsOffset(currentOffset + limit.value)
    }

    function previousPage(){
        let currentOffset = comicsOffset
        setComicsOffset(currentOffset - limit.value)
    }

    useEffect(() => {
        const getComics = async (id) => {
            setLoading(true)
            const ts = Date.now()
            const hash = MD5(ts+process.env.REACT_APP_PRIV_KEY+process.env.REACT_APP_PUB_KEY).toString()
            const api_url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?format=comic&formatType=comic&noVariants=true&limit=${limit.value}&offset=${comicsOffset}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hash}`
            
            const res = await axios.get(api_url)
            setComics(res.data.data)
            setTotalComics(res.data.data.total)
            setLoading(false)
        }
        getComics(charId)
    },[charId, limit, comicsOffset])

    if(loading){
        return (
            <div className="loading-screen">
                <img className="loading-gif" src={loadingGif} alt="loading page" />
            </div> 
        )
    } else {
        let comicsDisplay = comics.results.map(item => {
            return (
                <div className="comic-item">
                    
                    <h3 className="comic-title">{item.title}</h3>
                    <div className="comic-item-img-container">
                        <Link to={`/comicinfo/${item.id}`}>
                            <img className="comic-cover-img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                        </Link>
                    </div>
                    
                </div>
            )
        })
        
        if(comicsDisplay.length === 0){
            return(
                <div className="no-comics-found">
                    <h1>No Comics Found</h1>
                    <Link to="/search">Go back</Link>
                </div>
            )
        } else {
            return (
            <div className="char-comics">
                <div className="select-container">
                    <Select
                    className='select'
                    options={options}
                    placeholder="Comics per page"
                    isSearchable={false}
                    onChange={setLimit}
                    />
                </div>
                <div className="comics-container">
                    {comicsDisplay}
                </div>
                <div className="page-buttons">
                    <button className='previous-button' onClick={previousPage}>Previous</button>
                    <button className='next-button' onClick={nextPage}>Next</button>
                </div>
            </div>
            );
        }
        
    }

    
    

    
    
}

export default CharComics;