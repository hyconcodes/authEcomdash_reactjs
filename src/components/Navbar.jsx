import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('CURRENTUSER')) || null;
    const handleLogout = () => {
        localStorage.removeItem('CURRENTUSER');
        navigate('login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">E-Dash</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={'/'} aria-current="page">All product
                                <span className="visually-hidden" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/add_product"}>Create Product</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">{user.name}</a>
                                <a className="dropdown-item" href="#">{user.email}</a>
                                <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button> */}
                    </form>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
