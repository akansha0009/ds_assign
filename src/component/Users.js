import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/UserSlice';
import { userDeleted } from '../redux/UserSlice';

function Users(){
    const dispatch = useDispatch();
    const users = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);

    console.log(loading)

    useEffect(()=>{
        dispatch(fetchUser())
    }, [dispatch])

    const handleDelete = (id) => {
        console.log('deleted')
        dispatch(userDeleted(id))
    }

    console.log(users)
    return (
        <div>
        <h3>User List</h3>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul style={{ listStyle: 'none' }}>
                {users &&
                    users.map((user) => (
                        <li key={user.id} onClick={() => handleDelete(user.id)}>
                            <strong>Name:</strong> {user.name}<br />
                            <strong>Email:</strong> {user.email}<br />
                            <strong>City:</strong> {user.address.city}
                        </li>
                    ))
                }
            </ul>
        )}
    </div>
    )
}

export default Users;