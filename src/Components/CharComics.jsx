import React from 'react';
import { Link } from 'react-router-dom';


function CharComics({searchData}) {

    let comicList = searchData.comics.items.map(item => {
        return (
            <Link to='/search'>
                <p>{item.name}</p>
            </Link>
        )
    })

    return <div>{comicList}</div>
    
}

export default CharComics;