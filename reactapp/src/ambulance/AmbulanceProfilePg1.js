

import { useEffect, useState } from "react";
// import Link from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';



let AmbulanceProfilePg1 = () => {

    let aid = JSON.parse(localStorage.getItem("loginInfo")).aid;
    let userName=JSON.parse(localStorage.getItem("loginInfo")).lid.uname;
    let avst = JSON.parse(localStorage.getItem("loginInfo")).availablestatus;

    const [ambulance, setAmbulance] = useState([]);
    const navigate=useNavigate();
    const[msg,setMsg]=useState("");


    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/getprofiledetails?aid=" + aid)
            .then(resp => resp.json())
            .then(data =>{ setAmbulance(data) ; if(data.availablestatus==1){setMsg("Available")}else {setMsg("Not Avilable")}} )
            .then(console.log("get data is", ambulance.drivername))
    }, []);


    const logout = () => {

        localStorage.clear();


        // navigate("/");
        window.location.href="/login";
    }

    // delete account soft delete
    // ac_status=0
    const deleteAC=(e)=>
    {
        e.preventDefault()
        let st=window.confirm("Are You Really Want To DELETE Acount")
        if(st===true)
        {
        console.warn("TRy to delete ac soft delete..")
        fetch("http://localhost:8080/deleteacount?aid="+aid
        ,{
            method: "DELETE",
            headers: { 
                "Accept":"application/json",
                "Content-type": "application/json" },
            body: JSON.stringify()
        }
        )
        .then(res => {
            if (res.status==200) {
                alert("Account deleted sucessfull!!")
                navigate("/login")
            }
            else {
                alert("Some Proble Occures!!")
            }

        })
        
    }
    else
    {
        navigate("#")
    }

    }

    // const avstatus={
    //     if(JSON.parse(localStorage.getItem("loginInfo")).availablestatus)
    //     {

    //     }
    // }
    

    return (

        <div className="Container-fluid">
            <div >

                 <nav className="navbar navbar-expand-lg navbar-dark">
                     <ul className="navbar-nav">
                     <li className="nav-item">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                         <li className="nav-item active">
                             <a className="nav-link" href="/">Home</a>
                         </li>
                         <li className="nav-item  active">
                             <a className="nav-link" href="/ambulancedashbord">Back</a>
                         </li>
                         {/* <li className="nav-item">
                             //       <a className="nav-link disabled" href="#">Disabled</a>
                             /  /     </li> */}
                         <li className="nav-item active">
                             <a className="nav-link" href="/updateambulanceacc">Update Information</a>
                         </li>
                         <li className="nav-item active">
                             <a className="nav-link" href="#" onClick={deleteAC}>Delete Account</a>
                         </li>
                         <li className="nav-item active">
                            {/* <Link to='/changeworkingstatus'>Change Working Status</Link> */}
                              <a className="nav-link" href="/changeworkingstatus">Change Working Status</a>
                         </li>
                         <li className="nav-item active">
                             <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                         </li>
                        

                     </ul>
                 </nav>

             </div>

            {/* <h2>hiiiii {aid} </h2> */}
        
            <div className="formInput container mt-5">
                <div>
                    <h3>Welcome {userName}</h3>
                        <table border={1} className="table table-bordered">
                        <tr>
                            <td>Driver Name</td>
                            <td>{ambulance.drivername}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Ambulance Registration Number</td>
                            <td>{ambulance.aregno}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Ambulance (RTO) Number</td>
                            <td>{ambulance.avehicalno}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{ambulance.email}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{ambulance.mono}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Working State</td>
                            <td>{ambulance.state}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Working City</td>
                            <td>{ambulance.city}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Working Area Pincode</td>
                            <td>{ambulance.pincode}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Landmark</td>
                            <td>{ambulance.landmark}</td>
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td>Your Facility Availabilty Status Is </td>
                            <td>{msg}  </td> 
                            {/* <td>change</td> */}
                            {/* <td></td> */}
                        </tr>
                    </table>

                </div>
            </div>

            {/* //Change Working Status from here .... */}
            {/* <div style={ {display:flag? 'block':'none'} }>

                <h4>this is for changing its availabilty Status</h4>
            </div> */}

        </div>
    )
}
export default AmbulanceProfilePg1;