import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';

const Create = () => {
    const [name,setName] = useState('');
    const[email,setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(addUser({id : users.length !== 0? users[users.length-1].id+1 : 1, name: name, email:email}))
        navigate("/")
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='container w-50 border   p-5'>
            <form onSubmit={handleSubmit}>
                <h3>Create User</h3>
                <div>
                    <label>Name</label>
                    <input className='form-control' type='text' name='name'
                    onChange={(e) =>{setName(e.target.value)}} />
                </div>

                <div>
                    <label>Email</label>
                    <input className='form-control' type='text' name='email'
                    onChange={(e) =>{setEmail(e.target.value)}} />
                </div>

                    <input type='submit' className='btn btn-primary mt-2' value='Submit' />
                    <input type='button' onClick={() =>{navigate("/") }} className='btn btn-secondary ms-3 mt-2' value='Back' />
                

            </form>
        </div>
        </div>
    )
}

export default Create