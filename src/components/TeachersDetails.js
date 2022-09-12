import React from 'react'

function TeachersDetails({ teacherImage, teacherName, teacherEmail }) {
  return (
    <div className="teacher">
        <img src={teacherImage} alt="TEACHER" />
        <div>
            <p><span>Name:</span>{teacherName}</p>
            <p><span>Email:</span>{teacherEmail}</p>
        </div>
        </div>
  )
}

export default TeachersDetails