import React, {useState, useEffect} from 'react'
import '../App';

function Teachers() {

  const [teachers, setTeachers] = useState([]);

    const fetchData = () =>{
      fetch("http://localhost:9292/teachers")
        .then(r =>
           r.json())
        .then(data => {
          setTeachers(data)
        })
    }
    useEffect(() => {
       fetchData(); 
    }, []);
    console.log(teachers)
  return (
    <>
    <div className="container">
    {teachers.map(({teacher_name})=>(
      <div>
        {teacher_name}
        </div>
        ))}
    </div> 
    </>
  )
}

export default Teachers 