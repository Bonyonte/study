import React, { useState } from 'react';
import '../App';

function StudentsDetails({first_name, last_name, gender, email}) {
    const [actualDetails, setActualDetails] = useState(false);

    const handleClick = () =>{
        setActualDetails(actual=> !actual)
    }
    console.log(news);
  return (
    <div>StudentsDetails</div>
  )
}


export default StudentsDetails

