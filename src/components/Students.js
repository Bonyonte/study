import React, { useState, useEffect} from 'react';
import '../App';
import NewsDetails from './StudentsDetails';


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
    console.log(students)

  return (
  <>
    <div className="students-list">
    {students.map(({first_name, last_name, email})=>(
      <div>
        {first_name}
        {last_name}
        {email}
      </div>
    ))}
    </div>
  </>
  )
}

export default Students 