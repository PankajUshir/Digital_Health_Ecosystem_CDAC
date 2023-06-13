

import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";





const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
        case "uname":
            let regex1 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,8}[a-zA-Z0-9]$/;
            if (!regex1.test(value)) {
                hasError = true;
                error = "Small, Capital letter and Numbers len-10 allowed "
            }
            break;

        case "password":
            let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!regex2.test(value)) {
                hasError = true;
                error = "len 6 one Upper & smaller char one number & special symbol "
            }
            break;

        case "hname":
            /*let regex3 = /^[A-Z][a-z]{2,15}$/;*/
            let regex3 = /^([A-Z][a-zA-Z]*)/;
            if (!regex3.test(value)) {
                hasError = true;
                error = "first alphabate capital, First name and Last name "
            }
            break;

       /* case "hregno":
            let regex4 = /^[A-Z][A-Z,0-9]{10}$/;
            if (!regex4.test(value)) {
                hasError = true;
                error = "Only capitals alphabets and number 10 length "
            }
            break;
            */

        case "mono":
            let regex5 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
            if (!regex5.test(value)) {
                hasError = true;
                error = "10 digit only  "
            }
            break;

        case "pincode":
            let regex6 = /^[0-9]{6}$/;
            if (!regex6.test(value)) {
                hasError = true;
                error = "len 6 digit  "
            }
            break;


    }
    return { hasError, error }

}



let UpdateHospital = () => {



    let hid = JSON.parse(localStorage.getItem("loginInfo")).hid;
    const navigate = useNavigate();
    const [aprofile, setAProfile] = useState([]);


    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/gethospitalprofiledetails?hid=" + hid)
            .then(resp => resp.json())
            .then(data => { setAProfile(data) })
            .then(console.log("get data is", aprofile.hname))
    }, []);

    const init = {
       


        hname: { value: JSON.parse(localStorage.getItem("loginInfo")).hname, hasError: true, touched: false, error: "" },
        
        hregno: { value: JSON.parse(localStorage.getItem("loginInfo")).hregno },
        hinfo: { value: JSON.parse(localStorage.getItem("loginInfo")).hinfo },
        genralbed: { value: JSON.parse(localStorage.getItem("loginInfo")).genralbed, hasError: true, touched: false, error: "" },
        icubed: { value: JSON.parse(localStorage.getItem("loginInfo")).icubed, hasError: true, touched: false, error: "" },
        genbedlastupdate: { value: JSON.parse(localStorage.getItem("loginInfo")).genbedlastupdate, hasError: true, touched: false, error: "" },
        icubedlastupdate: { value: JSON.parse(localStorage.getItem("loginInfo")).icubedlastupdate, hasError: true, touched: false, error: "" },
        

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

    
    const [state, dispatch] = useReducer(reducer, init);
    
    const onInputChange = (name, value, dispatch) => {
        //validation logic
        const { hasError, error } = validateData(name, value); //form field, latest value

        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for (const key in state) {
            let item = state[key];
           
            if (item.hasError) {
                isFormValid = false;
                break;
            }
        }
        
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
        console.warn("Updating Profile information . ..")
        console.log("generated json obj is", state)

        fetch("http://localhost:8080/updatehospital?hid=" + hid,
            {
                method: "PUT",
                headers:
                {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    
                    hname: state.hname.value,
                    hregno: state.hregno.value,
                    hinfo:state.hinfo.value,
                    genralbed: state.genralbed.value,
                    icubed: state.icubed.value,
                    genbedlastupdate: state.genbedlastupdate.value,
                    icubedlastupdate: state.icubedlastupdate.value,
                   
                    
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
                    alert("Your Profile Updated Sucessfully!!")
                    navigate("/hospitalprofilepg")
                }
                else {
                    alert("Something went wrong !!")
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

            <nav className="navbar navbar-expand-lg  navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/hospitalprofilepg">Back</a>
                    </li>
                  
                    <li className="nav-item active">
                        <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                    </li>


                </ul>
            </nav>

        </div>

            <form className="formInput container mt-5">
                <div className="signup-form">

                    <h3 className="form-title">Update Your Information </h3>

                   




                    <div className="form-group">
                        <label >Enter Hospital Name</label>
                        <input type="text" className="form-control" name="hname" value={state.hname.value} placeholder={aprofile.hname}
                            onChange={(e) => { onInputChange("hname", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("hname", e.target.value, dispatch) }} />
                        <p style={{ display: state.hname.touched && state.hname.hasError ? "block" : "none", color: "red" }}> {state.hname.error} </p>

                    </div>


                 {/*   <div className="form-group">
                        <label >Enter Hospital Registration Number</label>
                        <input type="text" className="form-control" name="hregno" value={state.hregno.value} placeholder={aprofile.hregno}
                            onChange={(e) => { onInputChange("hregno", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("hregno", e.target.value, dispatch) }} />
                        <p style={{ display: state.hregno.touched && state.hregno.hasError ? "block" : "none", color: "red" }}> {state.hregno.error} </p>

                    </div>
                 */}
                    <div className="form-group">
                        <label >Hospital Information</label>
                        <input type="text" className="form-control" name="hinfo" value={state.hinfo.value} placeholder={aprofile.hinfo}
                            onChange={(e) => { onInputChange("hinfo", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("hinfo", e.target.value, dispatch) }} />
                        <p style={{ display: state.hinfo.touched && state.hinfo.hasError ? "block" : "none", color: "red" }}> {state.hinfo.error} </p>

                    </div>




                    <div className="form-group">
                        <label >Total No. of General Beds</label>
                        <input type="number" className="form-control" name="genralbed" value={state.genralbed.value} placeholder={aprofile.genralbed}
                            onChange={(e) => { onInputChange("genralbed", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("genralbed", e.target.value, dispatch) }} />
                        <p style={{ display: state.genralbed.touched && state.genralbed.hasError ? "block" : "none", color: "red" }}> {state.genralbed.error} </p>

                    </div>

                    <div className="form-group">
                        <label >Total No. of I.C.U Beds</label>
                        <input type="number" className="form-control" name="icubed" value={state.icubed.value} placeholder={aprofile.icubed}
                            onChange={(e) => { onInputChange("icubed", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("icubed", e.target.value, dispatch) }} />
                        <p style={{ display: state.icubed.touched && state.icubed.hasError ? "block" : "none", color: "red" }}> {state.icubed.error} </p>

                    </div>

                    <div className="form-group">
                        <label >Available General beds </label>
                        <input type="number" className="form-control" name="genbedlastupdate" value={state.genbedlastupdate.value} placeholder={aprofile.genbedlastupdate}
                            onChange={(e) => { onInputChange("genbedlastupdate", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("genbedlastupdate", e.target.value, dispatch) }} />
                        <p style={{ display: state.genbedlastupdate.touched && state.genbedlastupdate.hasError ? "block" : "none", color: "red" }}> {state.genbedlastupdate.error} </p>

                    </div>

                    <div className="form-group">
                        <label >Available I.C.U  beds </label>
                        <input type="number" className="form-control" name="icubedlastupdate" value={state.icubedlastupdate.value} placeholder={aprofile.icubedlastupdate}
                            onChange={(e) => { onInputChange("icubedlastupdate", e.target.value, dispatch) }}
                            onBlur={(e) => { onFocusOut("icubedlastupdate", e.target.value, dispatch) }} />
                        <p style={{ display: state.icubedlastupdate.touched && state.icubedlastupdate.hasError ? "block" : "none", color: "red" }}> {state.icubedlastupdate.error} </p>

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

            {/* {JSON.stringify(HospitalSignUp)} */}

        </div>
    )


}
export default UpdateHospital;