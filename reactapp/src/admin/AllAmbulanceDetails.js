import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


let AllAmbulanceDetails = () => {

    const [ambulancelist, setAmbulanceList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("calling server API")
        fetch("http://localhost:8080/getAllambulanceList")
            .then(res => res.json())
            .then(data => setAmbulanceList(data))
    }, []);

    function removeRecord(vaid) {
        // const newambulancelistid = ambulancelist.fill((l) => l.vaid !== vaid);
        const newambulancelistid=ambulancelist.filter((l) => l.vaid !== vaid);
        // console.log("dlt-",newambulancelistid)
        console.log("aid is-", vaid);

        // let st=window.confirm("Are You Really Want To DELETE Acount")
        // if(st===true)
        // {
        console.warn("TRy to delete ac soft delete..")
        fetch("http://localhost:8080/deleletAmbulnceList?aid=" + vaid
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

        // }
        // else
        // {
        //     navigate("/ambulanceSection")
        // }

    }
    const logout = () => {

        localStorage.clear();


        // navigate("/");
        window.location.href = "/login";
    }

    return (
        <div className="Container-fluid">

            <div >

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" href="/adminlogin">Back</a>
                        </li>
                        {/* <li className="nav-item">
//       <a className="nav-link disabled" href="#">Disabled</a>
/  /     </li> */}
                        {/* <li className="nav-item">
            <a className="nav-link" href="#">Hospital Section</a>
        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Ambulance Section(fee)</a>
                        </li> */}
                        {/* <li className="nav-item">
            <a className="nav-link" href="#">Bloodbank Section</a>
        </li> */}

                        <li className="nav-item">
                            <a className="nav-link active" href="/login" onClick={logout}>Logout</a>
                        </li>


                    </ul>
                </nav>
            </div>

            <div style={{ backgroundColor: 'white' }} >
                <h1> All Registerd Ambulance Service Provides </h1>
                <table className="table table-bordered,table-danger container">

                    <thead>
                        <tr className="bg-success">
                            <th>Sr.No.</th>
                            {/* <th>ID</th> */}
                            <th>Driver Name</th>
                            <th>Ambulance Reg No.</th>
                            <th>RTO Number</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Website</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Pincode</th>
                            <th>Landmark</th>
                            <th>Option</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            ambulancelist.map((v, indexaid) => {
                                return (
                                    <tr className="table-danger">
                                        <td className="table-danger">{indexaid}</td>

                                        {/* <td className="table-danger">{v.aid}</td> */}
                                        <td className="table-danger">{v.drivername}</td>
                                        <td className="table-danger">{v.aregno}</td>
                                        <td className="table-danger">{v.avehicalno}</td>
                                        <td className="table-danger">{v.email}</td>
                                        <td className="table-danger">{v.mono}</td>
                                        <td className="table-danger">{v.website}</td>
                                        <td className="table-danger">{v.state}</td>
                                        <td className="table-danger">{v.city}</td>
                                        <td className="table-danger">{v.pincode}</td>
                                        <td className="table-danger">{v.landmark}</td>
                                        <td style={{ color: 'red', cursor: 'pointer' }} onClick={() => { removeRecord(v.aid) }}>Remove</td>
                                        {/* <td className="table-danger, text-danger" onClick={removeRecord(v.aid)}>  
                                        <button>Remove</button>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                {ambulancelist.length}
            </div>


        </div>
    )
}
export default AllAmbulanceDetails;