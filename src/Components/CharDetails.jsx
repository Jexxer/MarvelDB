import React from 'react';
import CharComics from './CharComics';

function CharDetails({searchData}) {
    return (
        <div className="search-page">
            <h1>{searchData.name}</h1>
            <img className="hero-img" src={`${searchData.thumbnail.path}.${searchData.thumbnail.extension}`} alt={searchData.name + " Image"}/>
            <p className="character-desc">{searchData.description}</p>
            <CharComics searchData={searchData} />
        </div>
    );
}

export default CharDetails;