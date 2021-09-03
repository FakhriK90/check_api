import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Users from './component/Users';

const UsersList = () => {
    const [users, setUsers] =useState([])
    useEffect(() => {
        const getData = async () => {
            try{
                const result = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                )
                setUsers(result.data)
            }
            catch (error) {
                console.log(error.response.data)
            }
        }
        
        getData()
    }, [])
    return (
        <div>
            {users.map((user) => {
                return <Users key={user.id} user={user} />
            })}
        </div>
    )
}

export default UsersList
