import React, { useState, useEffect } from "react";
import { MD5 } from "crypto-js";
import { Link } from 'react-router-dom';
import axios from "axios";
import loadingGif from '../media/loadingGif.gif'

function ComicDetails({ match, seriesURL, setSeriesURL }) {
  const comicId = match.params.id;
  const [loading, setLoading] = useState(true);
  const [comicBook, setComicBook] = useState(null);

  useEffect(() => {
    const getComic = async (id) => {
      const ts = Date.now();
      const hash = MD5(ts + process.env.REACT_APP_PRIV_KEY + process.env.REACT_APP_PUB_KEY).toString();
      const api_url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${hash}`;

      const res = await axios.get(api_url);
      setComicBook(res.data.data.results);
      // setSeriesURL()
      setLoading(false);
    };
    getComic(comicId);
  }, [comicId]);

  if (loading) {
    return (
      <div className="loading-screen">
        <img className="loading-gif" src={loadingGif} alt="loading page" />
      </div>
    );
  } else {
      console.log(comicBook)
      let releaseDate = comicBook[0].dates[0].date.substring(0, 10)
    return (
        <div className="comic-details-container">
          <div className="comic-book-img-container">
            <img className="comic-book-img" src={`${comicBook[0].thumbnail.path}.${comicBook[0].thumbnail.extension}`} />
          </div>
            
          <div className="single-comic-info">
            <div className="comic-book-details-section">
                <div className="comic-book-details-section-content">
                  <h2 className="single-comic-title" >{comicBook[0].title}</h2>
                  <p className="comic-description" >{comicBook[0].description}</p>
                  <br/>
                  <p><strong>Release Date:</strong> {releaseDate}</p>
                  <br/>
                  <p><strong>Page Count:</strong> {comicBook[0].pageCount}</p>
                  <br/>
                  <p><strong>Issue Number: </strong>{comicBook[0].issueNumber}</p>
                  <br/>
                  <p className="link-to-marvel"><strong>Print Price:</strong> ${comicBook[0].prices[0].price}</p>
                  <br/>
                  <Link to={`/series/${comicBook[0].id}`}>
                    <p className="series-button">Series</p>
                  </Link>
                  <br/>
                  <a href={comicBook[0].urls[0].url} target="_blank"><strong>View on Marvel.com</strong></a>
                </div>
            </div>
            
          </div>
          
        </div>
    )
  }
}

export default ComicDetails;
