import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/users');

                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await res.json();
                setUsers(data.users);
                // console.log(data);
                // toast.success('Users loaded successfully');
            } catch (error) {
                console.error('Error fetching users:', error);
                toast.error('Error loading users');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className='bg-primary-subtle' style={{ height: '100vh' }}>
            {loading ? (<Spinner loading={loading} />) : (users.map((user) => (
                <li key={user.id}>{user.name}</li>
            )))}
        </div>
    )
}

export default Home
