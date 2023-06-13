import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router"

let AmbulanceDashbord = () => {

    const name = JSON.parse(localStorage.getItem("loginInfo")).drivername;
    const aid=JSON.parse(localStorage.getItem("loginInfo")).aid;

    const logout = () => {

        localStorage.clear();
        // navigate("/");
        window.location.href = "/login";
    }

    const [allorderlist, setAllOrderList] = useState([]);
    const[msg,setMsg]=useState("Accept");

    useEffect(() => {
        console.log("calling server API")
        fetch("http://localhost:8080/checkOrders?aid="+aid)
            .then(res => res.json())
            .then(data => setAllOrderList(data))
    }, []);
    
    // const[adata, setAdata] = useState();
    function acceptOrder(vaoid) {
        console.log("Get it is-", vaoid);

        fetch("http://localhost:8080/updateOrderStatus?aoid=" + vaoid
            , {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify()
            }
        )
            .then( res => {
                if (res.status == 200) {
                    alert("Request Accepted!! ")
                   window.location.reload();
                 
                }
                else {
                    alert("Some Proble Occures!!")
                }

            })
            // .then(data => {setAdata(data)})

            // console.log(adata);
            // // .then(res.data>1 ,setMsg("Accept") )
    }

    return (


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

                        <li className="nav-item active">
                            <a className="nav-link" href="/ambulanceprofilepg1">Profile</a>
                        </li>

                        <li className="nav-item  active">
                            <a className="nav-link" href="/ambulanceOrderHostory">Order History</a>
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

            <h2 className="mt-4">Welcome {name}</h2>

            <div >
                <h1>Your Order </h1>
                <table className="table table-bordered,table-danger">

                    <thead>
                        <tr className="bg-success">
                            <th>Sr.No.</th>
                            {/* <th>ID</th> */}
                            <th>Patient Name</th>
                            <th>Contact No.</th>
                            <th>Email</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Date</th>

                            <th>Gender</th>
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
                            allorderlist.map((v, indexaid) => {
                                return (
                                    <tr className="table-danger">
                                        <td className="table-danger">{indexaid}</td>

                                        {/* <td className="table-danger">{v.aid}</td> */}
                                        <td className="table-danger">{v.patient.fname} {v.patient.lname}</td>
                                        <td className="table-danger">{v.patient.mono}</td>
                                        <td className="table-danger">{v.patient.email}</td>
                                        <td className="table-danger">{v.source}</td>
                                        <td className="table-danger">{v.destination}</td>
                                        <td className="table-danger">{v.date}</td>

                                        <td className="table-danger">{v.patient.gender}</td>
                                        <td className="table-danger">{v.patient.bloodgrp}</td>
                                        <td className="table-danger">{v.patient.state}</td>
                                        <td className="table-danger">{v.patient.city}</td>
                                        <td className="table-danger">{v.patient.pincode}</td>
                                        <td className="table-danger">{v.patient.landmark}</td>
                                        {/* <td style={{ color: 'green', cursor: 'pointer' }} onClick={() => { removeRecord(v.aid) }}>Remove</td> */}
                                        {/* <td className="table-danger, text-danger" onClick={removeRecord(v.aid)}>  
                                        <button>Remove</button>
                                        </td> */}
                                        <td id="change" style={{ color: 'green', cursor: 'pointer' }} onClick={() => { acceptOrder(v.aoid) }}  >{msg}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                {/* {ambulancelist.length} */}
            </div>


        </div>
    )
}
export default AmbulanceDashbord