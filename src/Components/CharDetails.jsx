import React from 'react';
import { Link } from 'react-router-dom';
import loadingGif from '../media/loadingGif.gif'


function CharDetails({searchData}) {

    if(searchData === null){
        return (
            <div className="loading-screen">
                <img className="loading-gif" src={loadingGif} alt="loading page" />
            </div>
        )
    } else {

        let characters = searchData.map(item => {
            return (
                <div className="search-page-results">

                    <div className="hero-name-container">
                        <h1 className="hero-name">{item.name}</h1>
                    </div>
                    <div className="search-page-content">
                        <div className="hero-img-container">
                            <img className="hero-img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name + " Image"}/>
                        </div>
                        <div className="search-page-content-right">
                            <p className="character-desc">{item.description}</p>
                            
                            <div className="comic-series">
                                <p><strong>Comics: </strong>{item.comics.available}</p>
                                <p><strong>Series: </strong>{item.series.available}</p>
                            </div>
                            
                            <div className="character-links">
                                <Link to={`/comics/${item.id}`}>
                                    <p className="details-buttons">Comics</p>
                                </Link>
                                <Link to="/">
                                    <p className="details-buttons">Series</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                
            
                </div>
            )
        })

        return (
            <div>{characters}</div>
        );
    }
    
    
}

export default CharDetails;