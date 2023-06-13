
import { useEffect, useState } from "react";
// import Link from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';



let PatientProfile = () => {


    let pid = JSON.parse(localStorage.getItem("loginInfo")).pid;
    let userName = JSON.parse(localStorage.getItem("loginInfo")).lid.fname;


    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("calling server API")

        fetch("http://localhost:8080/getpatientprofile?pid=" + pid)
            .then(resp => resp.json())
            .then(data => { setPatient(data) })
            .then(console.log("get data is", patient.fname))
    }, []);

    // delete account soft delete
    // ac_status=0
    const deleteAC = (e) => {
        e.preventDefault()
        let st = window.confirm("Are You Really Want To DELETE Acount")
        if (st === true) {
            console.warn("TRy to delete ac soft delete..")
            fetch("http://localhost:8080/deletepatientaccount?pid=" + pid
                , {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify()
                }
            )
                .then(res => {
                    if (res.status == 200) {
                        alert("Account deleted sucessfull!!")
                        navigate("/login")
                    }
                    else {
                        alert("Some Proble Occures!!")
                    }

                })

        }
        else {
            navigate("#")
        }

    }


    return (

        <div className="Container-fluid">
            <div >
                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <a className="navbar-brand" href="/">Digital Health Ecosystem</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active" href="/patientdashboard">Dashboard</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/updatepatientprofile">Update Profile</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={deleteAC}>Delete Account</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="container mt-5">
                <div>
                    <h3>Profile Details</h3>
                    <div className="row text-left">
                        <div className="col-6">
                            <table className="table table-stripped data-resizable">
                                <tr>
                                    <td>First Name</td>
                                    <td>{patient.fname}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{patient.lname}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{patient.email}</td>
                                </tr>
                                <tr>
                                    <td>Contact Number</td>
                                    <td>{patient.mono}</td>
                                </tr>
                                <tr>
                                    <td>Aadhar ID</td>
                                    <td>{patient.adharno}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>{patient.dob}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{patient.gender}</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>{patient.bloodgrp}</td>
                                </tr>
                                <tr>
                                    <td>Working State</td>
                                    <td>{patient.state}</td>
                                </tr>
                                <tr>
                                    <td>Working City</td>
                                    <td>{patient.city}</td>
                                </tr>
                                <tr>
                                    <td>Landmark</td>
                                    <td>{patient.landmark}</td>
                                </tr>
                                <tr>
                                    <td>Working Area Pincode</td>
                                    <td>{patient.pincode}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PatientProfile;