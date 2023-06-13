import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bar from "./Webbar";


const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
        case "uname":
            let regex1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,8}[a-zA-Z0-9]$/;
            if (!regex1.test(value)) {
                hasError = true;
                error = "User name A-Z a-z 0-9 ._- a-z len-10 "
            }
            break;

        case "password":
            let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!regex2.test(value)) {
                hasError = true;
                error = "len 6 one Upper & smaller char one number & special symbol "
            }
            break;

        case "fname":
            let regex3 = /^[A-Z][a-z]{2,15}$/;
            if (!regex3.test(value)) {
                hasError = true;
                error = "len-15 Driver name - first letter capital, rest - small "
            }
            break;

        case "lname":
            let regex31 = /^[A-Z][a-z]{2,15}$/;
            if (!regex31.test(value)) {
                hasError = true;
                error = "len-15 Last name - first letter capital, rest - small "
            }
            break;

        case "mono":
            let regex6 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
            if (!regex6.test(value)) {
                hasError = true;
                error = "10 digit mo no "
            }
            break;

        case "adharno":
            let regex61 = /^(\+\d{1,3}[- ]?)?\d{12}$/;
            if (!regex61.test(value)) {
                hasError = true;
                error = "12 digit mo no "
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


//end==========================================

let UpdatePatientProfile = () => {



    let pid = JSON.parse(localStorage.getItem("loginInfo")).pid;
    const navigate = useNavigate();
    const [aprofile, setAProfile] = useState([]);


    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/getprofiledetails?pid=" + pid)
            .then(resp => resp.json())
            .then(data => { setAProfile(data) })
            .then(console.log("get data is", aprofile.fname))
    }, []);

    const init = {
        // for loginAll table
        // uname: { value: "", hasError: true, touched: false, error: "" },
        // password: { value: "", hasError: true, touched: false, error: "" },
        // role: "Patient",
        // let pid = JSON.parse(localStorage.getItem("loginInfo")).pid;


        fname: { value: JSON.parse(localStorage.getItem("loginInfo")).fname, hasError: true, touched: false, error: "" },
        // fname: { value: "", hasError: true, touched: false, error: "" },
        lname: { value: JSON.parse(localStorage.getItem("loginInfo")).lname, hasError: true, touched: false, error: "" },
        email: { value: JSON.parse(localStorage.getItem("loginInfo")).email },
        mono: { value: JSON.parse(localStorage.getItem("loginInfo")).mono, hasError: true, touched: false, error: "" },
        adharno: { value: JSON.parse(localStorage.getItem("loginInfo")).adharno, hasError: true, touched: false, error: "" },
        dob: { value: JSON.parse(localStorage.getItem("loginInfo")).dob },
        gender: { value: JSON.parse(localStorage.getItem("loginInfo")).gender },
        bloodgrp: { value: JSON.parse(localStorage.getItem("loginInfo")).bloodgrp },
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

        fetch("http://localhost:8080/updatepatientaccount?pid=" + pid,
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
                    fname: state.fname.value,
                    lname: state.lname.value,
                    mono: state.mono.value,
                    email: state.email.value,
                    adharno: state.adharno.value,
                    gender: state.gender.value,
                    dob: state.dob.value,
                    bloodgrp: state.bloodgrp.value,
                    state: state.state.value,
                    city: state.city.value,
                    pincode: state.pincode.value,
                    landmark: state.landmark.value,
                    // ac_status: 1
                })
            }).then(res => {
                if (res.status == 200) {
                    alert("Profile Updated Sucessfully!!")
                    navigate("/patientprofile")
                }
                else {
                    alert("Some Proble Occures!!")
                }
            })
    }


    return (
        <div>
            <Bar />
            <form className="formInput container mt-5">
                <h3 className="form-title">Update Your Information </h3>
                <div className="signup-form text-left">
                    <div className="form-group">
                        <label >Enter First Name</label>
                        <input type="text" className="form-control" name="fname" value={state.fname.value} placeholder={aprofile.fname}
                            onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }} />
                        <p style={{ display: state.fname.touched && state.fname.hasError ? "block" : "none", color: "red" }}> {state.fname.error} </p>
                    </div>

                    <div className="form-group">
                        <label >Enter Last Name</label>
                        <input type="text" className="form-control" name="lname" value={state.lname.value} placeholder={aprofile.lname}
                            onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }} />
                        <p style={{ display: state.lname.touched && state.lname.hasError ? "block" : "none", color: "red" }}> {state.lname.error} </p>
                    </div>

                    <div className="form-group">
                        <label >Enter Your Mobile Number</label>
                        <input type="number" className="form-control" name="mono" value={state.mono.value} placeholder={aprofile.mono}
                            onChange={(e) => { onInputChange("mono", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("mono", e.target.value, dispatch) }} />
                        <p style={{ display: state.mono.touched && state.mono.hasError ? "block" : "none", color: "red" }}> {state.mono.error} </p>
                    </div>

                    <div className="form-group">
                        <label >Enter Your Email</label>
                        <input type="email" className="form-control" name="email" value={state.email.value} placeholder={aprofile.email}
                            onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                        />
                    </div>

                    <div className="form-group">
                        <label >Enter Your Aadhar ID</label>
                        <input type="number" className="form-control" name="adharno" value={state.adharno.value} placeholder={aprofile.adharno}
                            onChange={(e) => { onInputChange("adharno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("adharno", e.target.value, dispatch) }} />
                        <p style={{ display: state.adharno.touched && state.adharno.hasError ? "block" : "none", color: "red" }}> {state.adharno.error} </p>
                    </div>

                    <div className="form-group">
                        <label >Enter Your Aadhar ID</label>
                        <input type="number" className="form-control" name="adharno" value={state.adharno.value} placeholder={aprofile.adharno}
                            onChange={(e) => { onInputChange("adharno", e.target.value, dispatch) }}
                        />
                    </div>

                    <div className="form-group">
                        <label >Date of Birth</label>
                        <input type="date" className="form-control" name="dob" value={state.dob.value} placeholder={aprofile.dob}
                            onChange={(e) => { onInputChange("dob", e.target.value, dispatch) }}
                        />
                    </div>

                    <div className="form-group">
                        <div>
                            <label>Gender :</label>
                        </div>
                        <div className="form-check-inline">
                            <input type="radio" name="gender" id="M" value="Male"
                                onChange={(e) => { onInputChange("gender", e.target.value, dispatch) }} />
                            <label className="form-check-label" htmlFor="M">Male</label>
                        </div>
                        <div className="form-check-inline">
                            <input type="radio" name="gender" id="F" value="Female"
                                onChange={(e) => { onInputChange("gender", e.target.value, dispatch) }} />
                            <label className="form-check-label" htmlFor="F">Female</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label >Blood Group</label>
                        <input type="text" className="form-control" name="bloodgrp" value={state.bloodgrp.value} placeholder={aprofile.bloodgrp}
                            onChange={(e) => { onInputChange("bloodgrp", e.target.value, dispatch) }}
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
        </div>
    )
}
export default UpdatePatientProfile;