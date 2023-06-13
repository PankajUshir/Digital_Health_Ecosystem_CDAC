import { useEffect, useState } from "react";

let AllPatientDetails=()=>
{

    
    const [patientlist, setPatientList] = useState([]);
    const navigate = useState();

    useEffect(() => {
        console.log("calling server API")
        fetch("http://localhost:8080/getAllpatinetList")
            .then(res => res.json())
            .then(data => setPatientList(data))
    }, []);
    // localStorage.setItem("Patinetlist",JSON.stringify(patientlist)) just for cheking 

    function removeRecord(vpid) {
        const newambulancelistid = patientlist.fill((l) => l.vpid !== vpid);
        // console.log("dlt-",newambulancelistid)
        console.log("aid is-", vpid);

        console.warn("TRy to delete ac soft delete..")
        fetch("http://localhost:8080/deleletPatientList?pid=" + vpid
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
                    alert("Record deleted sucessfull!! ")
                    // alert("Refresh page to see Changes ")
                    window.location.reload();
                    // navigate("/ambulanceSection")
                    // setAmbulanceList(newambulancelistid)
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
    return(


        <div className="Container-fluid">
            
            <div >

                <nav className="navbar navbar-expand-lg  navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" href="/adminlogin">Back</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/login" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div style={{ backgroundColor: 'white'}} >
                <h1> All Registerd Patients </h1>
                <div className="table-responsive">
                <table className="table table-bordered,table-danger">
                    <thead>
                        <tr className="bg-success">
                            <th>Sr.No.</th>
                            {/* <th>ID</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Adhar No.</th>
                            <th>Date Of Birth </th>
                            <th>Gender</th>
                            {/* <th>Age</th> */}
                            <th>Blood Grp.</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Pincode</th>
                            <th>Landmark</th>
                            <th>Option</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            patientlist.map((v, indexaid) => {
                                return (
                                    <tr className="table-danger">
                                        <td className="table-danger">{indexaid}</td>
                                   {/* <td className="table-danger">{v.aid}</td> */}
                                        <td className="table-danger">{v.fname}</td>
                                        <td className="table-danger">{v.lname}</td>
                                        <td className="table-danger">{v.mono}</td>
                                        <td className="table-danger">{v.email}</td>

                                        <td className="table-danger">{v.adharno}</td>
                                        <td className="table-danger">{v.dob}</td>
                                        <td className="table-danger">{v.gender}</td>
                                        {/* <td className="table-danger">{v.age}</td> */}
                                        <td className="table-danger">{v.bloodgrp}</td>
                                        <td className="table-danger">{v.state}</td>
                                        <td className="table-danger">{v.city}</td>
                                        <td className="table-danger">{v.pincode}</td>
                                        <td className="table-danger">{v.landmark}</td>
                                        <td style={{ color: 'red', cursor: 'pointer' }} onClick={() => { removeRecord(v.pid) }}>Remove</td>
                                        {/* <td className="table-danger, text-danger" onClick={removeRecord(v.aid)}>  
                                        <button>Remove</button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                </div>
                {/* {ambulancelist.length} */}
            </div>

        </div>
    )
}
export default AllPatientDetails;