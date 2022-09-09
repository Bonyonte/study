import React, { useState } from 'react';
import '../App';

function NewsDetails({path, title, excerpt, webUrl, originalUrl, heat, tags, images, content}) {
    const [actualDetails, setActualDetails] = useState(false);

    const handleClick = () =>{
        setActualDetails(actual=> !actual)
    }
    console.log(news);
  return (
    <div>NewsDetails</div>
  )
}


export default NewsDetails

