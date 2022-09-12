import React from 'react';
import '../App';

function StudentsDetails({studentImage, firstName, lastName, gender, email}) {

    
    // console.log(news);
  return (
    <div className="student">
      <img src={studentImage} alt="STUDENT" />
      <div>
          <p><span>FirstName:</span> {firstName}</p>
          <p><span>SurName: </span>{lastName}</p>
          <p><span>Gender: </span>{gender}</p>
          <p><span>Email:</span>{email}</p>
      </div>
      </div>
  )
}


export default StudentsDetails

