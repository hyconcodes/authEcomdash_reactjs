import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const CURRENTUSER = localStorage.getItem('CURRENTUSER');
    useEffect(() => {
        if (CURRENTUSER) {
            navigate('/');
        }
    }, [])
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            toast.warn('Enter your login details');
        } else {
            try {
                const res = await fetch('http://localhost:8000/api/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const data = await res.json();
                console.log(data);
                localStorage.setItem('CURRENTUSER', JSON.stringify(data.user));
                setLoading(false)
                if (!res.ok) {
                    console.log('Not Ok');
                    toast.error(data.message || "Invalid credentials");
                    throw new Error(data.message || "Invalid credentials");
                }
                toast.success(data.message || 'Login successful');
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="card p-5">
            <div className="login-header">
                Login
            </div>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input disabled={loading} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary">{loading ? 'Loading...' : 'login'}</button>
                <br />
                <Link to={'/register'} className="my-3">Register now</Link>
            </form>
        </div>

    )
}

export default Login
