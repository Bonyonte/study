import React from 'react';
import '../App';

function StudentsDetails({id, student, onDeleteStudent, studentImage, firstName, lastName, gender, email}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/students/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDeleteStudent(student));
      console.log(student);
  }
     
  return (
    <><div className="student">
      <img src={studentImage} alt="STUDENT" />
      <div>
          <p><span>FirstName:</span> {firstName}</p>
          <p><span>SurName: </span>{lastName}</p>
          <p><span>Gender: </span>{gender}</p>
          <p><span>Email:</span>{email}</p>
      </div>
      </div>
      <div className="keys">
        <input type="button" value="Update" /> 
        <input onClick = {handleDeleteClick} type="button" value="Delete" /> 
      </div>
      </>
    
  )
}


export default StudentsDetails

