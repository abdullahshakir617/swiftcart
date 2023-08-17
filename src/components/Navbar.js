import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Swift-Cart</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                        </ul>

                        <button className="btn btn-outline-success mx-2" type="submit" ><Link to="LoginSignup" style={{ textDecoration: "none", color: "white" }}>{props.auth ? <Link style={{ textDecoration: "none", color: "white" }} onClick={props.authHandle} to="/home">Logout</Link> : "Welcome"}</Link ></button>a


                    </div>
                </div>
            </nav>
        </>
    )
}
