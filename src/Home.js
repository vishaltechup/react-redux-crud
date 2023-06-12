import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

const Home = () => {
    const users = useSelector((state) =>state.users)
    console.log("users",users)

    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(deleteUser({
            id:id   
        }))
    }
  return (
    <div className='container'>
        <div className="d-flex justify-content-between my-3 mt-5">

        <h2>CRUD Using Redux</h2>
        <Link to="/create" className='btn btn-success'>Create</Link>
        </div>
        <table className='table text-center' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((userData,index) =>(
                    <tr key={index}>
                        <td>{userData.id}</td>
                        <td>{userData.name}</td>
                        <td>{userData.email}</td>
                        <td className='d-flex justify-content-end w-75'>
                            <Link to={`/update/${userData.id}`} className="btn btn-primary btn-sm me-5" >Edit</Link>
                            <div onClick={() =>{handleDelete(userData.id)}} className="btn btn-danger btn-sm ms-2">Delete</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}



export default Home