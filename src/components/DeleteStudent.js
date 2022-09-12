import React from 'react'

function DeleteStudent(onDelete, student) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/students${student.id}`, {
          method: "DELETE",
        })
          .then((resp) => resp.json())
          .then(() => onDelete(student));
      }
      return (
        <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-gray max-w-96 h-50">
             <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{student.first_name}</h5>
             <p className="text-gray-700 text-base mb-4 " >{student.last_name}</p>
             <p className="text-gray-700 text-base mb-4 " >{student.gender}</p>
           <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"onClick={handleDeleteClick}>Delete</button>
          </div>
          </div>
        
      )
}

export default DeleteStudent