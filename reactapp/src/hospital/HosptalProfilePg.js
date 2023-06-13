

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


let HospitalProfilePg = () => {


    let hid = JSON.parse(localStorage.getItem("loginInfo")).hid;
    let userName=JSON.parse(localStorage.getItem("loginInfo")).lid.uname;
    
    const [hospital, setHospital] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/gethospitalprofiledetails?hid=" + hid)
            .then(resp => resp.json())
            .then(data =>{ setHospital(data) } )
            .then(console.log("get data is", hospital.hname))
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
        let st=window.confirm("Are You Really Want To DELETE Acount ? ")
        if(st===true)
        {
        console.warn("TRy to delete ac soft delete..")
        fetch("http://localhost:8080/deletehospital?hid="+hid
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


    return (
       

        <div className="Container-fluid">
        <div >

             <nav className="navbar navbar-expand-lg  navbar-dark">
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
                     <li className="nav-item active">
                         <a className="nav-link" href="/updatehospital">Update Information</a>
                     </li>
                     <li className="nav-item active">
                         <a className="nav-link" href="#" onClick={deleteAC}>Delete Account</a>
                     </li>
                    
                     <li className="nav-item active">
                         <a className="nav-link" style={{cursor:'pointer'}} onClick={logout}>Logout</a>
                     </li>
                    

                 </ul>
             </nav>

         </div>

        
            <div className="formInput container mt-5">
                <div>
                    <h3>Welcome  {userName}</h3>
                        <table border={1}  className="table table-bordered">
                        <tr>
                            <td>Hospital Name</td>
                            <td>{hospital.hname}</td>
                            
                        </tr>
                        <tr>
                            <td>Hospital Registration Number</td>
                            <td>{hospital.hregno}</td>
                            
                        </tr>
                        <tr>
                            <td>Hospital Informtion</td>
                            <td>{hospital.hinfo}</td>
                            
                        </tr>
                        <tr>
                            <td>Total No. of General Beds</td>
                            <td>{hospital.genralbed}</td>
                            
                        </tr>
                        <tr>
                            <td>Total No. of I.C.U Beds </td>
                            <td>{hospital.icubed}</td>
                            
                        </tr>
                        <tr>
                            <td>Email-Id </td>
                            <td>{hospital.email}</td>
                            
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{hospital.mono}</td>
                           
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{hospital.state}</td>
                            
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{hospital.city}</td>
                            
                        </tr>
                        <tr>
                            <td>Pincode </td>
                            <td>{hospital.pincode}</td>
                           
                        </tr>
                        <tr>
                            <td>Landmark</td>
                            <td>{hospital.landmark}</td>
                            
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>{hospital.website}</td>
                            
                        </tr>
                        <tr>
                            <td>General Beds now available</td>
                            <td>{hospital.genbedlastupdate}</td>
                            
                        </tr>
                        <tr>
                            <td>I.C.U Beds now available </td>
                            <td>{hospital.icubedlastupdate}</td>
                           
                        </tr>
                        
                    </table>

                </div>
            </div>

        </div>
    )
}
export default HospitalProfilePg;