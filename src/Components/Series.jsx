import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MD5 } from 'crypto-js';
import Select from 'react-select'
import loadingGif from '../media/loadingGif.gif'
import { Link } from 'react-router-dom';

function Series({ match, seriesURL, setSeriesURL }) {

    const options = [
        { value: 5, label: '5' },
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
      ]

    const initialLimit = {
        value: 10
    }

    const comicBookId = match.params.id
    const [series, setSeries] = useState(null)
    const [loading, setLoading] = useState(true)
    const [comicIsLoading, setComicIsLoading] = useState(true)

    const [seriesOffset, setSeriesOffset] = useState(0)
    const [limit, setLimit] = useState(initialLimit)

    
    useEffect(() => {
        setSeriesOffset(0)
    },[limit])

    function nextPage(){
        let currentOffset = seriesOffset
        setSeriesOffset(currentOffset + limit.value)
    }

    function previousPage(){
        let currentOffset = seriesOffset
        setSeriesOffset(currentOffset - limit.value)
    }

    useEffect(() => {
        const getComicData = async (id) => {
            const ts = Date.now();
            const hash = MD5(ts + process.env.REACT_APP_PRIV_KEY + process.env.REACT_APP_PUB_KEY).toString();
            const api_url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hash}`;

            const res = await axios.get(api_url);
            setSeriesURL(`https${res.data.data.results[0].series.resourceURI.substring(4)}`);
            setComicIsLoading(false)
        }
        getComicData(comicBookId)
    }, [])

    useEffect(() => {
        const getSeries = async () => {
            if(comicIsLoading){
                return null
            } else {
                const ts = Date.now()
                const hash = MD5(ts+process.env.REACT_APP_PRIV_KEY+process.env.REACT_APP_PUB_KEY).toString()
                const api_url = `${seriesURL}/comics?noVariants=true&orderBy=issueNumber&limit=${limit.value}&offset=${seriesOffset}&ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hash}`
                
                const res = await axios.get(api_url)
                setSeries(res.data.data)
                setLoading(false)
            }
            
        }
        getSeries(comicBookId)
    },[comicBookId, limit, seriesOffset, comicIsLoading])

    if(loading){
        return (
            <div className="loading-screen">
                <img className="loading-gif" src={loadingGif} alt="loading page" />
            </div> 
        )
    } else {
        let seriesDisplay = series.results.map(item => {
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
        
        if(seriesDisplay.length === 0){
            return(
                <div className="no-comics-found">
                    <h1>No Series Found</h1>
                    <Link to={`/comicinfo/${comicBookId}`}>Go back</Link>
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
                    {seriesDisplay}
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

export default Series;