import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const CURRENTUSER = localStorage.getItem('CURRENTUSER');
  useEffect(() => {
    if (CURRENTUSER) {
      navigate('/');
    }
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !confirm_password) {
      toast.warn('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password !== confirm_password) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirm_password,
        })
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        toast.error(data.message || 'Registration failed');
        throw new Error(data.message || 'Something went wrong');
      }

      toast.success(data.message || 'Registration successful');
      navigate('/login');

    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="card p-5">
      <div className="login-header">
        Register
      </div>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Fullname</label>
          <input disabled={loading} value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input disabled={loading} value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirmPassword" />
        </div>
        <div className="mb-3 form-check">
          <input disabled={loading} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">I agree to term and condition</label>
        </div>
        <button disabled={loading} type="submit" className="btn btn-primary">{loading ? 'Loading...' : 'register'}</button>
        <br />
        <Link to={'/login'} className="my-3">Login now</Link>
      </form>
    </div>
  )
}

export default Register
