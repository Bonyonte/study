import React, { useState, useEffect} from 'react';
import '../App';


const News = () => {

    const [news, setNews] = useState([]);

    const fetchData = () =>{
      fetch("http://localhost:4000/news")
        .then(r =>{
          return r.json()
        })
        .then(data => {
          setNews(data)
          // #console.log(data)
        })
    }
    useEffect(() => {
       fetchData(); 
    }, []);

  return (
    <div className="news-list">{filterNews.map}
    <div>
    </div>
    </div>
  )
}

export default News