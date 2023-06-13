import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

let AllHospitalDetail = () => {
    const navigate = useNavigate();

    const [hospitallist, setHospitalList] = useState([]);

    useEffect(() => {
        console.log("calling server API")
        fetch("http://localhost:8080/getAllhospitalList")
            .then(res => res.json())
            .then(data => setHospitalList(data))
    }, []);

    function removeRecord(vhid) {
        const newamhospitallist = hospitallist.fill((l) => l.vhid !== vhid);
        // console.log("dlt-",newambulancelistid)
        console.log("hid is-", vhid);

        // let st=window.confirm("Are You Really Want To DELETE Acount")
        // if(st===true)
        // {
        console.warn("TRy to delete ac soft delete..")
        fetch("http://localhost:8080/deleletHospitalList?hid=" + vhid
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

                        <li className="nav-item active">
                            <a className="nav-link" href="/adminlogin">Back</a>
                        </li>

                        {/* <li className="nav-item">
                                <a className="nav-link" href="#">Ambulance Section(fee)</a>
                            </li> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div style={{ backgroundColor: 'white' }}>
                <h1> All Registerd Hospital Service Provides </h1>
                <div className="table-responsive">

                    <table className="table table-bordered,table-danger ">
                        <thead>
                            <tr className="bg-success">
                                <th>Sr.No.</th>
                                {/* <th>ID</th> */}
                                <th>Hospital Name</th>
                                <th>Hospital Reg No.</th>
                                <th>Hospital Information</th>
                                <th>Genral Bed </th>
                                <th>ICU Bed </th>
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
                                hospitallist.map((v, indexaid) => {
                                    return (
                                        <tr className="table-danger">
                                            <td className="table-danger">{indexaid}</td>
                                            {/* <td className="table-danger">{v.aid}</td> */}
                                            <td className="table-danger">{v.hname}</td>
                                            <td className="table-danger">{v.hregno}</td>
                                            <td className="table-danger">{v.hinfo}</td>
                                            <td className="table-danger">{v.genralbed}</td>
                                            <td className="table-danger">{v.icubed}</td>
                                            <td className="table-danger">{v.email}</td>
                                            <td className="table-danger">{v.mono}</td>
                                            <td className="table-danger">{v.website}</td>
                                            <td className="table-danger">{v.state}</td>
                                            <td className="table-danger">{v.city}</td>
                                            <td className="table-danger">{v.pincode}</td>
                                            <td className="table-danger">{v.landmark}</td>
                                            <td style={{ color: 'red', cursor: 'pointer' }} onClick={() => { removeRecord(v.hid) }}>Remove</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                    {/* {hospitallist.length} */}
                </div>
            </div>
        </div>

    )

}
export default AllHospitalDetail;