import React from 'react'
import {useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { deleteUser, fetchUsers } from '../Redux/Action';

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.users)

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then(res=>dispatch(fetchUsers(res.data)))
    .catch((err)=>{console.log(err)})
},[dispatch])
const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
     <h1>List of Users</h1>
     <div className='w-75 rounded bg-white border shadow p-4'>
     <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add+</Link>
            </div>
     <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(data) ? (data.map((d,i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>
                                <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link> 
                                 <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                <button onClick={()=>handleDelete(d.id)}className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
     </div>
     </div>
  )
}

export default Home