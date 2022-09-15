import React, { useState, useEffect} from 'react';
import '../App';
import StudentsDetails from './StudentsDetails';


const Students = () => {

    const [students, setStudents] = useState([]);

    const fetchData = () =>{
      fetch("http://localhost:9292/students")
        .then(r =>
           r.json())
        .then(data => {
          setStudents(data)
        })
    }
    useEffect(() => {
       fetchData(); 
    }, []);
    // console.log(students)

    function deleteStudents(deleteStudents){
      const updatedStudents = students.filter((student)=>student.id !== deleteStudents.id)
        setStudents(updatedStudents)
    }
  return (
  <>
    <div className="students-list">
    {students.map((student)=>(
      <div>
       <StudentsDetails
       studentImage={student.student_image}
       firstName={student.first_name}
       lastName={student.last_name}
       gender={student.gender}
       email={student.email}
       onDeleteStudent={deleteStudents}
       student = {student}
       id = {student.id}/>
      </div>
    ))}
    </div>
  </>
  )
}

export default Students 