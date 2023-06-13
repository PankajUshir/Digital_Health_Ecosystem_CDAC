
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const init = {
    // for loginAll table
    uname: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    role: "Ambulance",

    drivername: { value: "", hasError: true, touched: false, error: "" },
    aregno: { value: "", hasError: true, touched: false, error: "" },
    avehicalno: { value: "", hasError: true, touched: false, error: "" },
    email:  { value: "", hasError: true, touched: false, error: "" },
    mono: { value: "", hasError: true, touched: false, error: "" },
    website: "",
    state: "",
    city: "",
    pincode: { value: "", hasError: true, touched: false, error: "" },
    landmark: "",
    availablestatus: 1,
    ac_status: 1
}


const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
        case "uname":
            let regex1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,8}[a-zA-Z0-9]$/;
            if (!regex1.test(value)) {
                hasError = true;
                error = "Small, Capital letter and Numbers len-10 allowd "
            }
            break;

        case "password":
            let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!regex2.test(value)) {
                hasError = true;
                error = "len 6 one Upper & smaller char one number & special symbol "
            }
            break;

        case "drivername":
            let regex3 = /^([A-Z][a-zA-Z]*)/;
            if (!regex3.test(value)) {
                hasError = true;
                error = "first alphabate capital, First name and Last name "
            }
            break;

        case "aregno":
            let regex4 = /^[A-Z][A-Z,0-9]{10}$/;
            if (!regex4.test(value)) {
                hasError = true;
                error = "Only capitals alphabets and number 10 length "
            }
            break;

        case "avehicalno":
            let regex5 = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
            if (!regex5.test(value)) {
                hasError = true;
                error = "Only Capital letter and numbers & spaces "
            }
            break;

        case "mono":
            let regex6 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
            if (!regex6.test(value)) {
                hasError = true;
                error = "10 digit only"
            }
            break;

        case "pincode":
            let regex7 = /^[0-9]{6}$/;
            if (!regex7.test(value)) {
                hasError = true;
                error = "len 6 digit  "
            }
            break;

            case "email":
                let regex8 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!regex8.test(value)) {
                    hasError = true;
                    error = "Enter correct email!!  "
                }
                break;
        
    }
    return { hasError, error }

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                // ...state, [action.field]: action.val
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
                isFormValid
            };
        case 'clear':
            return init;
    }

}



//end==========================================

// export default function AmbulanceRegisForm1()
let Reactusereducer = () => {
    // const [ambulancesignup, dispatch] = useReducer(reducer, init);

    //strt=============================
    const [state, dispatch] = useReducer(reducer, init);
    // const [msg,setMsg] = useState("");
    let navigate= useNavigate();

    //on change event
    const onInputChange = (name, value, dispatch) => {
        //validation logic
        const { hasError, error } = validateData(name, value); //form field, latest value

        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for (const key in state) {
            let item = state[key];
            /*if(key === name && hasError)
            {
                isFormValid = false;
                break;
            }
            else if(key !== name && item.hasError)
            {
                isFormValid = false;
                break;
            }*/
            if (item.hasError) {
                isFormValid = false;
                break;
            }
        }
        //gethered one more value - isFormValid
        //dispatch({type:'update',data:{name,value,hasError,error,touched: true, isFormValid}})

        //sending action object
        dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })

    }

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in state) {
            const item = state[key]
            if (key === name && hasError) {
                isFormValid = false
                break
            } else if (key !== name && item.hasError) {
                isFormValid = false
                break
            }
        }
        dispatch({
            type: "update",
            data: { name, value, hasError, error, touched: true, isFormValid },
        })
    }

    //end=====================================

    //when click on butoon this fun get called
    // const hancelClick = (e) => {
    const sendData = (e) => {
        e.preventDefault()
        // const ambulanceregistraion={uname, password,role, drivername,aregno,avehicalno,email,mono,website,
        // state,city,pincode,landmark,availablestatus,ac_status}
        console.log("hi");
        console.log(state);
        console.log("hi");

        fetch("http://localhost:8080/ambulancesignup",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    uname: state.uname.value,
                    password: state.password.value,
                    role: "Ambulance",
                    drivername: state.drivername.value,
                    aregno: state.aregno.value,
                    avehicalno: state.avehicalno.value,
                    email: state.email.value,
                    mono: state.mono.value,
                    website: state.website.value,
                    state: state.state.value,
                    city: state.city.value,
                    pincode: state.pincode.value,
                    landmark: state.landmark.value,
                    availablestatus: 1,
                    ac_status: 1
                })
            })
            // .then(() => { console.log("Ambulance registerd Sucessfully ") })
            .then(res => { if(res){
                if(res.status ==200){
                    // console.log("Success");
                    alert("Register/SignUp Sucessfully!!!");
                    navigate('/login');

                }
                else{
                    // console.log("fail");
                    alert("Register Fail--------")
                }
            } } )
    }

    //return method will return html to browser
    return (

        <div className="Container-fluid">

<div >

<nav className="navbar navbar-expand-xl navbar-dark">
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

            <form className="formInput container mt-5">
                <div className="signup-form">

                    <h3 className="form-title">Ambulance Register Form</h3>

                    <div className="form-group">

                        <label >Enter Username</label>
                        <input type="text" className="form-control" name="uname" value={state.uname.value}
                            onChange={(e) => { onInputChange("uname", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("empno", e.target.value, dispatch) }} />
                        <p style={{ display: state.uname.touched && state.uname.hasError ? "block" : "none", color: "red" }}> {state.uname.error} </p>


                    </div>



                    <div className="form-group">

                        <label >Enter Password</label>
                        <input type="password" className="form-control" name="password" value={state.password.value}
                            onChange={(e) => { onInputChange("password", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} />
                        <p style={{ display: state.password.touched && state.password.hasError ? "block" : "none", color: "red" }}> {state.password.error} </p>


                    </div>


                    <div className="form-group">
                        <label >Enter Driver Name</label>
                        <input type="text" className="form-control" name="drivername" value={state.drivername.value}
                            onChange={(e) => { onInputChange("drivername", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("drivername", e.target.value, dispatch) }} />
                        <p style={{ display: state.drivername.touched && state.drivername.hasError ? "block" : "none", color: "red" }}> {state.drivername.error} </p>

                    </div>


                    <div className="form-group">
                        <label >Enter Ambulance Registration Number</label>
                        <input type="text" className="form-control" name="aregno" value={state.aregno.value}
                            onChange={(e) => { onInputChange("aregno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("aregno", e.target.value, dispatch) }} />
                        <p style={{ display: state.aregno.touched && state.aregno.hasError ? "block" : "none", color: "red" }}> {state.aregno.error} </p>

                    </div>


                    {/* <div className="form-group">
                        <label >Enter Ambulance Registration Number</label>
                        <input type="text"  className="form-control" name="aregno" value={ambulancesignup.aregno}
                            onChange={(e) => { dispatch({ type: 'update', field: 'aregno', val: e.target.value }) }}

                        />

                    </div> */}


                    <div className="form-group">
                        <label >Enter Ambulance (Vehical) Number</label>
                        <input type="text" className="form-control" name="avehicalno" value={state.avehicalno.value}
                            onChange={(e) => { onInputChange("avehicalno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("avehicalno", e.target.value, dispatch) }} />
                        <p style={{ display: state.avehicalno.touched && state.avehicalno.hasError ? "block" : "none", color: "red" }}> {state.avehicalno.error} </p>

                    </div>

                    {/* ********************* */}
                    <div className="form-group">
                        <label >Enter Your Email</label>
                        <input type="email" className="form-control" name="email" value={state.email.value}
                            onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }} />
                        <p style={{ display: state.email.touched && state.email.hasError ? "block" : "none", color: "red" }}> {state.email.error} </p>


                    </div>


                    <div className="form-group">
                        <label >Enter Your Mobile Number</label>
                        <input type="number" className="form-control" name="mono" value={state.mono.value}
                            onChange={(e) => { onInputChange("mono", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("mono", e.target.value, dispatch) }} />
                        <p style={{ display: state.mono.touched && state.mono.hasError ? "block" : "none", color: "red" }}> {state.mono.error} </p>


                    </div>


                    <div className="form-group">
                        <label >Enter Your Website (If having)</label>
                        <input type="text" className="form-control" name="website" value={state.website.value}
                            onChange={(e) => { onInputChange("website", e.target.value, dispatch) }}
                        />
                    </div>


                    <div className="form-group">
                        <label >Enter State</label>
                        <input type="text" className="form-control" name="state" value={state.state.value}
                            onChange={(e) => { onInputChange("state", e.target.value, dispatch) }}
                        />

                    </div>


                    <div className="form-group">
                        <label >Enter City</label>
                        <input type="text" className="form-control" name="city" value={state.city.value}
                            onChange={(e) => { onInputChange("city", e.target.value, dispatch) }}
                        />
                    </div>


                    <div className="form-group">
                        <label >Enter Pincode</label>
                        <input type="number" className="form-control" name="pincode" value={state.pincode.value}
                            onChange={(e) => { onInputChange("pincode", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("pincode", e.target.value, dispatch) }} />
                        <p style={{ display: state.pincode.touched && state.pincode.hasError ? "block" : "none", color: "red" }}> {state.pincode.error} </p>


                    </div>
                    <div className="form-group">
                        <label >Enter landmark</label>
                        <input type="text" className="form-control" name="landmark" value={state.landmark.value}
                            onChange={(e) => { onInputChange("landmark", e.target.value, dispatch) }}
                        />

                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-blob" disabled={state.isFormValid ? false : true}
                            onClick={(e) => { sendData(e) }} >Submit</button>
                        {/* <span style={{ padding: '20px' }}></span>
                        <input type="button" className="btn btn-primary btn-blob" value='reset'
                            onClick={() => { dispatch({ type: 'reset' }) }} /> */}

                    </div>
                </div>
            </form>

            {/* {JSON.stringify(ambulancesignup)} */}

        </div>

    );

}
export default Reactusereducer;



















//==================================================



// import { useReducer, useState } from "react";
// import { useNavigate } from "react-router";

// const init = {
//     // for loginAll table
//     uname: "",
//     password: "",
//     role: "Ambulance",

//     drivername: "",
//     aregno: "",
//     avehicalno: "",
//     email: "",
//     mono: "",
//     website: "",
//     state: "",
//     city: "",
//     pincode: "",
//     landmark: "",
//     //  availablestatus: "",
//     ac_status: 1

// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             return {
//                 ...state, [action.field]: action.val
//             };
//         case 'clear':
//             return init;
//     }

// }

// // export default function AmbulanceRegisForm1()
// let Reactusereducer = () => {
//     const [ambulancesignup, dispatch] = useReducer(reducer, init);

//     let navigate = useNavigate();
//     const [sucess, setSucess] = useState("false");

//     //when click on butoon this fun get called
//     const hancelClick = (e) => {
//         e.preventDefault()
//         // const ambulanceregistraion={uname, password,role, drivername,aregno,avehicalno,email,mono,website,
//         // state,city,pincode,landmark,availablestatus,ac_status}
//         console.log("hi");
//         console.log(ambulancesignup);
//         console.log("hi");

//         fetch("http://localhost:8080/ambulancesignup",
//             {
//                 method: "POST",
//                 headers: { "Content-type": "application/json" },
//                 body: JSON.stringify(ambulancesignup)
//             }).then(res => { if(res){
//                 if(res.status ==200){
//                     // console.log("Success");
//                     alert("Register/SignUp Sucessfully!!!");
//                     navigate('/login');

//                 }
//                 else{
//                     // console.log("fail");
//                     alert("Register Fail--------")
//                 }
//             } } )
//             // .then( (data)=> setSucess(data))
//             //     if (sucess === true)
//             //             {
//             //                 alert("Register/SignUp Sucessfully!!!");
//             //                 // Navigator("/login");
//             //                 navigate('/login');
//             //             }
//             //         else
//             //         {
//             //             alert("Register Fail--------")
//             //         }
         
//             // .then((data) => {   console.log(data)
//                 // if (sucess === true)
//                 //     {
//                 //         alert("Register/SignUp Sucessfully!!!");
//                 //         // Navigator("/login");
//                 //         navigate('/login');
//                 //     }
//                 // else
//                 // {
//                 //     alert("Register Fail--------")
//                 // }
//             // })

//         //     if (sucess === "true")
//         //     {
//         //         alert("Register/SignUp Sucessfully!!!");
//         //         // Navigator("/login");
//         //         navigate('/login');
//         //     }
//         // else
//         // {
//         //     alert("Register Fail--------")
//         // }

//         // alert("Register/SignUp Sucessfully!!!");
//         // // Navigator("/login");
//         // navigate('/login');
//     }


//     // //fetch the data from api
//     // useEffect(() => {
//     //     fetch("http://localhost:8080/")
//     //         .then(res => res.json())
//     //         .then((result) => {
//     //             setStudents(result);
//     //         }
//     //         )
//     // }, [])

//     //return method will return html to browser
//     return (

//         <div>
//             <form className="formInput container mt-5">
//                 <div className="signup-form">

//                     <h3 className="form-title">Ambulance Register Form</h3>

//                     <div className="form-group">

//                         <label >Enter Username</label>
//                         <input type="text" className="form-control" name="uname" value={ambulancesignup.uname}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'uname', val: e.target.value }) }}
//                         />
//                     </div>

//                     <div className="form-group">

//                         <label >Enter Password</label>
//                         <input type="password" className="form-control" name="password" value={ambulancesignup.password}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'password', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Driver Name</label>
//                         <input type="text" className="form-control" name="drivername" value={ambulancesignup.drivername}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'drivername', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Ambulance Registration Number</label>
//                         <input type="text" className="form-control" name="aregno" value={ambulancesignup.aregno}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'aregno', val: e.target.value }) }}

//                         />

//                     </div>


//                     {/* <div className="form-group">
//                         <label >Enter Ambulance Registration Number</label>
//                         <input type="text"  className="form-control" name="aregno" value={ambulancesignup.aregno}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'aregno', val: e.target.value }) }}

//                         />

//                     </div> */}


//                     <div className="form-group">
//                         <label >Enter Ambulance (Vehical) Number</label>
//                         <input type="text" className="form-control" name="avehicalno" value={ambulancesignup.avehicalno}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'avehicalno', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Your Email</label>
//                         <input type="email" className="form-control" name="email" value={ambulancesignup.email}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'email', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Your Mobile Number</label>
//                         <input type="number" className="form-control" name="mono" value={ambulancesignup.mono}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'mono', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Your Website (If having)</label>
//                         <input type="text" className="form-control" name="website" value={ambulancesignup.website}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'website', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter State</label>
//                         <input type="text" className="form-control" name="state" value={ambulancesignup.state}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'state', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter City</label>
//                         <input type="text" className="form-control" name="city" value={ambulancesignup.city}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'city', val: e.target.value }) }}
//                         />

//                     </div>


//                     <div className="form-group">
//                         <label >Enter Pincode</label>
//                         <input type="number" className="form-control" name="pincode" value={ambulancesignup.pincode}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'pincode', val: e.target.value }) }}
//                         />

//                     </div>
//                     <div className="form-group">
//                         <label >Enter landmark</label>
//                         <input type="text" className="form-control" name="landmark" value={ambulancesignup.landmark}
//                             onChange={(e) => { dispatch({ type: 'update', field: 'landmark', val: e.target.value }) }}
//                         />

//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary btn-blob" onClick={hancelClick} >Submit</button>
//                         <span style={{ padding: '20px' }}></span>
//                         <input type="button" className="btn btn-primary btn-blob" value='reset' onClick={(e) => { dispatch({ type: 'clear' }) }} />

//                     </div>
//                 </div>
//             </form>

//             {/* {JSON.stringify(ambulancesignup)} */}

//         </div>

//     );

// }
// export default Reactusereducer;

