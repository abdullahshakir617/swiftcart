import React, { useState } from 'react'
import './style.css'

export default function LoginSingup(props) {

    const [users, setUsers] = useState([]);
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [message, setMessage] = useState('');

    //Handling the signup Logic

    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = { username: signupEmail, password: signupPassword };
        setUsers([...users, newUser]);
        setMessage('Sign up successful! Please login.');
    };

    //Handling the Login Logic
    //User will only be able to login if he has already signed up.

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === loginEmail && u.password === loginPassword);
        if (user) {
            alert(`Welcome, ${user.username}!`);

            setTimeout(props.authHandle, 2000);

        } else {
            // setMessage('Login failed. Please check your username and password.');
            alert('Login failed. Please check your username and password.')
        }
    }



    return (
        <>
            <div className="container-fluid LoginSignup" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid black"
            }}>



                {/* Signup Form */}
                <form onSubmit={handleSignup} style={{ width: "40%", border: "2px solid black", margin: "10px", padding: "10px", borderRadius: "10px" }}>
                    <h3>Sign up</h3>
                    <div className="form-group">
                        <label style={{ fontWeight: "bold" }} htmlFor="exampleInputEmail1">Email address</label>

                        <input value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        <small id="emailHelp" className="form-text text-dark " style={{ fontStyle: "italic" }}>We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label style={{ fontWeight: "bold" }} htmlFor="exampleInputPassword1">Password</label>

                        <input value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary my-2">Signup</button>
                </form>


                <div id="message" style={{ fontWeight: "bold" }} className="text-dark">{message}</div>


                {/* Login Form */}
                <form onSubmit={handleLogin} style={{ width: "40%", border: "2px solid black", margin: "10px", padding: "10px", borderRadius: "10px" }}>
                    <h3>Login</h3>
                    <div className="form-group">

                        <label style={{ fontWeight: "bold" }} htmlFor="exampleInputEmail1">Email address</label>
                        <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label style={{ fontWeight: "bold" }} htmlFor="exampleInputPassword1">Password</label>

                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-success my-2">{props.auth ? "Logout" : "Login"}</button>
                </form>
            </div >
        </>
    )
}
