

import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

// const init = {
//     // for loginAll table
//     // uname: { value: "", hasError: true, touched: false, error: "" },
//     // password: { value: "", hasError: true, touched: false, error: "" },
//     // role: "Ambulance",
//     // let aid = JSON.parse(localStorage.getItem("loginInfo")).aid;


//     drivername: { value: JSON.parse(localStorage.getItem("loginInfo")).drivername, hasError: true, touched: false, error: "" },
//     // drivername: { value: "", hasError: true, touched: false, error: "" },
//     aregno: { value: JSON.parse(localStorage.getItem("loginInfo")).aregno, hasError: true, touched: false, error: "" },
//     avehicalno: { value: JSON.parse(localStorage.getItem("loginInfo")).avehicalno, hasError: true, touched: false, error: "" },

//     email: {value:JSON.parse(localStorage.getItem("loginInfo")).email},
//     mono: { value: JSON.parse(localStorage.getItem("loginInfo")).mono, hasError: true, touched: false, error: "" },

//     website: {value:JSON.parse(localStorage.getItem("loginInfo")).website},
//     state:{value: JSON.parse(localStorage.getItem("loginInfo")).state},
//     city: {value:JSON.parse(localStorage.getItem("loginInfo")).city},

//     pincode: { value: JSON.parse(localStorage.getItem("loginInfo")).pincode, hasError: true, touched: false, error: "" },

//     landmark:{value: JSON.parse(localStorage.getItem("loginInfo")).landmark,}
//     //  availablestatus: 1,
//     // ac_status: 1
// }


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


    }
    return { hasError, error }

}

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             const { name, value, hasError, error, touched, isFormValid } = action.data;
//             return {
//                 // ...state, [action.field]: action.val
//                 ...state,
//                 [name]: { ...state[name], value, hasError, error, touched },
//                 isFormValid
//             };
//         case 'clear':
//             return init;
//     }

// }

//end==========================================

let UpdateAmbulanceProfile = () => {



    let aid = JSON.parse(localStorage.getItem("loginInfo")).aid;
    const navigate = useNavigate();
    const [aprofile, setAProfile] = useState([]);


    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/getprofiledetails?aid=" + aid)
            .then(resp => resp.json())
            .then(data => { setAProfile(data) })
            .then(console.log("get data is", aprofile.drivername))
    }, []);

    const init = {
        // for loginAll table
        // uname: { value: "", hasError: true, touched: false, error: "" },
        // password: { value: "", hasError: true, touched: false, error: "" },
        // role: "Ambulance",
        // let aid = JSON.parse(localStorage.getItem("loginInfo")).aid;


        drivername: { value: JSON.parse(localStorage.getItem("loginInfo")).drivername, hasError: true, touched: false, error: "" },
        // drivername: { value: "", hasError: true, touched: false, error: "" },
        aregno: { value: JSON.parse(localStorage.getItem("loginInfo")).aregno, hasError: true, touched: false, error: "" },
        avehicalno: { value: JSON.parse(localStorage.getItem("loginInfo")).avehicalno, hasError: true, touched: false, error: "" },

        email: { value: JSON.parse(localStorage.getItem("loginInfo")).email },
        mono: { value: JSON.parse(localStorage.getItem("loginInfo")).mono, hasError: true, touched: false, error: "" },

        website: { value: JSON.parse(localStorage.getItem("loginInfo")).website },
        state: { value: JSON.parse(localStorage.getItem("loginInfo")).state },
        city: { value: JSON.parse(localStorage.getItem("loginInfo")).city },

        pincode: { value: JSON.parse(localStorage.getItem("loginInfo")).pincode, hasError: true, touched: false, error: "" },

        landmark: { value: JSON.parse(localStorage.getItem("loginInfo")).landmark, }
        //  availablestatus: 1,
        // ac_status: 1
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

    // const [ambulancesignup, dispatch] = useReducer(reducer, init);

    //strt=============================
    const [state, dispatch] = useReducer(reducer, init);
    // const [msg,setMsg] = useState("");

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

    const updateData = (e) => {

        e.preventDefault()
        console.warn("is in Updata profile data..")
        console.log("generated json obj is", state)

        fetch("http://localhost:8080/updateambprofile?aid=" + aid,
            {
                method: "PUT",
                headers:
                {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    // uname: state.uname.value,
                    // password: state.password.value,
                    // role: "Ambulance",
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
                    // availablestatus: 1,
                    // ac_status: 1
                })
            }).then(res => {
                if (res.status == 200) {
                    alert("Profile Updated Sucessfully!!")
                    navigate("/ambulanceprofilepg1")
                }
                else {
                    alert("Some Proble Occures!!")
                }

            })

    }

    const logout = () => {

        localStorage.clear();


        // navigate("/");
        window.location.href = "/login";
    }

    //end=====================================


    return (


        <div className="Container-fluid">

            <div >

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/ambulanceprofilepg1">Back</a>
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
                        <li className="nav-item active">
                            <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                        </li>


                    </ul>
                </nav>

            </div>

            <form className="formInput container mt-5">
                <div className="signup-form">

                    <h3 className="form-title">Update Your Information </h3>

                    {/* <div className="form-group">

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


            </div> */}


                    <div className="form-group">
                        <label >Enter Driver Name</label>
                        <input type="text" className="form-control" name="drivername" value={state.drivername.value} placeholder={aprofile.drivername}
                            onChange={(e) => { onInputChange("drivername", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("drivername", e.target.value, dispatch) }} />
                        <p style={{ display: state.drivername.touched && state.drivername.hasError ? "block" : "none", color: "red" }}> {state.drivername.error} </p>

                    </div>


                    {/* <div className="form-group">
                        <label >Enter Ambulance Registration Number</label>
                        <input type="text" className="form-control" name="aregno" value={state.aregno.value} placeholder={aprofile.aregno}
                            onChange={(e) => { onInputChange("aregno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("aregno", e.target.value, dispatch) }} />
                        <p style={{ display: state.aregno.touched && state.aregno.hasError ? "block" : "none", color: "red" }}> {state.aregno.error} </p>

                    </div> */}


                    {/* <div className="form-group">
                <label >Enter Ambulance Registration Number</label>
                <input type="text"  className="form-control" name="aregno" value={ambulancesignup.aregno}
                    onChange={(e) => { dispatch({ type: 'update', field: 'aregno', val: e.target.value }) }}

                />

            </div> */}


                    <div className="form-group">
                        <label >Enter Ambulance (Vehical) Number</label>
                        <input type="text" className="form-control" name="avehicalno" value={state.avehicalno.value} placeholder={aprofile.avehicalno}
                            onChange={(e) => { onInputChange("avehicalno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("avehicalno", e.target.value, dispatch) }} />
                        <p style={{ display: state.avehicalno.touched && state.avehicalno.hasError ? "block" : "none", color: "red" }}> {state.avehicalno.error} </p>

                    </div>

                    {/* ********************* */}
                    <div className="form-group">
                        <label >Enter Your Email</label>
                        <input type="email" className="form-control" name="email" value={state.email.value} placeholder={aprofile.email}
                            onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                        />

                    </div>


                    <div className="form-group">
                        <label >Enter Your Mobile Number</label>
                        <input type="number" className="form-control" name="mono" value={state.mono.value} placeholder={aprofile.mono}
                            onChange={(e) => { onInputChange("mono", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("mono", e.target.value, dispatch) }} />
                        <p style={{ display: state.mono.touched && state.mono.hasError ? "block" : "none", color: "red" }}> {state.mono.error} </p>


                    </div>


                    <div className="form-group">
                        <label >Enter Your Website (If having)</label>
                        <input type="text" className="form-control" name="website" value={state.website.value} placeholder={aprofile.website}
                            onChange={(e) => { onInputChange("website", e.target.value, dispatch) }}
                        />
                    </div>


                    <div className="form-group">
                        <label >Enter State</label>
                        <input type="text" className="form-control" name="state" value={state.state.value} placeholder={aprofile.state}
                            onChange={(e) => { onInputChange("state", e.target.value, dispatch) }}
                        />

                    </div>


                    <div className="form-group">
                        <label >Enter City</label>
                        <input type="text" className="form-control" name="city" value={state.city.value} placeholder={aprofile.city}
                            onChange={(e) => { onInputChange("city", e.target.value, dispatch) }}
                        />
                    </div>


                    <div className="form-group">
                        <label >Enter Pincode</label>
                        <input type="number" className="form-control" name="pincode" value={state.pincode.value} placeholder={aprofile.pincode}
                            onChange={(e) => { onInputChange("pincode", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("pincode", e.target.value, dispatch) }} />
                        <p style={{ display: state.pincode.touched && state.pincode.hasError ? "block" : "none", color: "red" }}> {state.pincode.error} </p>

                    </div>
                    <div className="form-group">
                        <label >Enter landmark</label>
                        <input type="text" className="form-control" name="landmark" value={state.landmark.value} placeholder={aprofile.landmark}
                            onChange={(e) => { onInputChange("landmark", e.target.value, dispatch) }}
                        />

                    </div>
                    <div className="form-group">
                        {/* <button className="btn btn-primary btn-blob" disabled={state.isFormValid ? false : true} */}
                        <button className="btn btn-primary btn-blob"
                            onClick={(e) => { updateData(e) }} >Submit</button>
                        {/* <span style={{ padding: '20px' }}></span>
                <input type="button" className="btn btn-primary btn-blob" value='reset'
                    onClick={() => { dispatch({ type: 'reset' }) }} /> */}

                    </div>
                </div>
            </form>

            {/* {JSON.stringify(ambulancesignup)} */}

        </div>
    )


}
export default UpdateAmbulanceProfile;