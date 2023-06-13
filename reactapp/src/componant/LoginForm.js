import './Form.css';
import React, { Component, useReducer, useState } from "react";
import { json, useNavigate } from 'react-router-dom';
// import mystore from '../storeandreducer/store';
import ambulance from './ambulance.png';
import welcome from './welcome.gif';
import background from './background.jpeg';

const init = {
    uname: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update': return { ...state, [action.field]: action.val };
        case 'clear': return init;

    }
}



let LoginForm = () => {
    const [luser, setLuser] = useReducer(reducer, init);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let state = {};

    const handelLogin = (e) => {

        e.preventDefault()
        console.log(luser);
        if(luser.uname==="")
        {
            alert("Enter Username!!")
        }
        else if(luser.password==="")
        {
            alert("Enter Password!!")
        }
        else
        {
        fetch("http://localhost:8080/login",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(luser),

            }).then(res => res.text())
            .then(data => {
                if (data.length != 0) {
                    // assign to satate
                    console.log("-------")
                    console.log(state)
                    console.log("-------")
                    state = JSON.parse(data)
                    console.log("****")
                    console.log(state)
                    localStorage.setItem("loginInfo", JSON.stringify(state))
                    localStorage.setItem("isLogin", true);
                    setError("Login sucess!!");

                    if (state.lid.role == "ambulance" || state.lid.role == "Ambulance") {
                        console.log("go to  Ambulance")
                        // mystore.dispatch({type:"LOGGEDIN"});
                        navigate("/ambulancedashbord")
                    }
                    else if (state.lid.role == "hospital" || state.lid.role == "Hospital") {
                        console.log("go to Hospital profile")
                        navigate("/hospitalprofilepg")
                    }
                    else if (state.lid.role == "patient" || state.lid.role == "Patient") {
                        console.log(error.data)
                        navigate("/patientdashboard")

                    }
                    else if (state.lid.role == "ambulance" || state.lid.role == "Ambulance") {
                        navigate("/bloodbankprofile")
                    }
                    else if (state.role == "admin" || state.role == "Admin") {
                        navigate("/adminlogin")
                    }
                }
                else {
                    setError("Wrong userName/Password!!");
                }

            })
        }
    }

    return (
        <div style={{ backgroundImage: `url(${background}) `, backgroundRepeat: 'no-repeat',backgroundSize:'cover',height: '100vh'  }} className="Container-fluid" >


            <div >
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                                            {/* <li className="nav-item">
                    //       <a className="nav-link disabled" href="#">Disabled</a>
                    /  /     </li> */}
                                            {/* <li className="nav-item">
                                <a className="nav-link" href="/updateambulanceacc">Update Information</a>
                            </li> */}
                                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" onClick={deleteAC}>Delete Account</a>
                            </li> */}
                                            {/* <li className="nav-item">
                                {/* <Link to='/changeworkingstatus'>Change Working Status</Link> 
                                <a className="nav-link" href="/changeworkingstatus">Change Working Status</a>
                            </li> */}
                                            {/* <li className="nav-item">
                                                <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                                            </li> */}


                                        </ul>
                                    </nav>

                                </div>
                                {/* <div style={{ 
                        backgroundImage: `url("https://via.placeholder.com/500")` 
                        }}></div> */}
            <form id='form' className="container mt-5 ml-5">
                <div className='row' >
                    <div className='col-6'>
                        <div id='form' className="formInput">
                            <h3>Sign In</h3>
                            <div className='text-left'>
                                <div>
                                    <label >User ID</label>
                                    <input type="text" className="form-control " placeholder="Enter user name" name="uname"
                                        onChange={(u) => { setLuser({ type: 'update', field: 'uname', val: u.target.value }) }} />
                                </div>

                                <div>
                                    <label>Password</label>
                                    <input type="password" className="form-control " placeholder="Enter password" name="password"
                                        onChange={(u) => { setLuser({ type: 'update', field: 'password', val: u.target.value }) }} />
                                </div>

                                <button type="submit" className="btn btn-primary " onClick={handelLogin}>Login</button>
                                <p>{error}</p>
                               
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-6'>
                                <img src={background} height="350px" width="600px" alt='not found' />
                    </div> */}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

//****corerct code but not maintian local storage here */
// import './Form.css';
// import React, { Component, useReducer } from "react";

// const init = {
//     uname: "",
//     password: "",
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update': return { ...state, [action.field]: action.val };
//         case 'clear': return init;

//     }
// }
// let LoginForm = () => {
//     const [luser, setLuser] = useReducer(reducer, init);

//     return (
//         <>
//             <form id='form' className="container mt-5" action="http://localhost:8080/login" method="post">
//                 <div id='form' className="formInput">
//                     <h3>Sign In</h3>
//                     <div className='text-left'>
//                         <div>
//                             <label >User ID</label>
//                             <input type="text" className="form-control " placeholder="Enter user name" name="uname"
//                                 onChange={(u) => { setLuser({ type: 'update', field: 'uname', val: u.target.value }) }} />
//                         </div>

//                         <div>
//                             <label>Password</label>
//                             <input type="password" className="form-control " placeholder="Enter password" name="password"
//                                 onChange={(u) => { setLuser({ type: 'update', field: 'password', val: u.target.value }) }} />
//                         </div>

//                         {/* <div className="form-group">
//                             <div className="custom-control custom-checkbox">
//                                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                                 <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                             </div>
//                         </div> */}

//                         <button id='form' type="submit" className="btn btn-primary ">Login</button>

//                         <div>
//                             Forgot <a href="#">password?</a>
//                         </div>
//                         <div>
//                             Not User? <a href="/signup"> Register </a>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }

// export default LoginForm;