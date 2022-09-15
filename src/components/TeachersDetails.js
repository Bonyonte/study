import React from 'react'

function TeachersDetails({ teacher, id, onDeleteTeacher, teacherImage, teacherName, teacherEmail }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/teachers/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteTeacher(teacher));
  }
  return (
    <>
      <div className="teacher">
        <img src={teacherImage} alt="TEACHER" />
        <div>
            <p><span>Name:</span>{teacherName}</p>
            <p><span>Email:</span>{teacherEmail}</p>
        </div>
      </div>
      <div className="button">
        <input type="button" value="Update" /> 
        <input onClick = {handleDeleteClick} type="button" value="Delete" /> 
      </div>
      
    </>
  )
}

export default TeachersDetails