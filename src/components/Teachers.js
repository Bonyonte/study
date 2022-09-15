import React, {useState, useEffect} from 'react'
import '../App';
import TeachersDetails from './TeachersDetails';

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

    function deleteTeachers(deleteTeachers){
      const updatedTeachers = teachers.filter((teacher)=>teacher.id !== deleteTeachers.id)
        setTeachers(updatedTeachers)
    }
  return (
    <>
    <div className="container">
    {teachers.map((teacher)=>(
      <div>
        <TeachersDetails
        teacherImage={teacher.teacher_image}
        teacherName={teacher.teacher_name}
        teacherEmail={teacher.teacher_email}
        onDeleteTeacher={deleteTeachers}
       teacher = {teacher}
       id = {teacher.id}
        />
        </div>
        ))}
    </div> 
    </>
  )
}

export default Teachers 