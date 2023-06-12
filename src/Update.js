import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(i => i.id  == id)
    const { name, email } = existingUser[0]
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({ 
            id: id, 
            name: uname, 
            email: uemail
        }))
        navigate("/")
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='container w-50 border   p-5'>
                <form onSubmit={handleUpdate}>
                    <h3>Update User</h3>
                    <div>
                        <label>Name</label>
                        <input className='form-control' type='text' name='name' value={uname}
                        onChange={e=> setName(e.target.value)} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input className='form-control' type='text' name='email' value={uemail}
                        onChange={e => setEmail(e.target.value)} />
                    </div>

                    <input type='submit' className='btn btn-primary mt-2' value='Update' />
                    <input type='button' onClick={() => { navigate("/") }} className='btn btn-secondary ms-3 mt-2' value='Back' />


                </form>
            </div>
        </div>
    )
}

export default Update