import Bar from "./Webbar";
import { useEffect, useState } from "react";

let SearchHospital = () => {

    const [hcity, setHcity] = useState([]);
    const [data, setData] = useState([]);
    const [ahcity, setAhcity] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/gethospitalcities")
            .then(res => res.json())
            .then(usercity => setHcity(usercity));   //city
        console.log(hcity);
    }, [])

    let hospitaldata = () => {
        fetch("http://localhost:8080/getHospital?city=" + ahcity)
            .then(res => res.json())
            .then(ambdata => setData(ambdata))
    }
    const handleChange = event => {
        console.log(event.target.value);
        setAhcity(event.target.value);
    };


    return (
        <>
            <Bar />
            <div className="container mt-5">
                <h3 >Search Hospitals</h3>
                <select onChange={handleChange} className="btn btn-light border border-dark dropdown-toggle"  >
                    <option >Select City</option>
                    {
                        hcity.map((item) => {
                            return (
                                <option key={item.hcity}>{item}</option>
                            )
                        })
                    }
                </select>
                <button className="btn btn-primary" onClick={hospitaldata}>Search</button>
            </div>

            <div className="container mt-5">
                {
                    data.map((hospital) => {
                        return (
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tr className="bg-success">
                                        <th>Hospital Name</th>
                                        <th>Hospital Registration Number</th>
                                        <th>Hospital Information</th>
                                        <th>Total General Beds</th>
                                        <th>Total I.C.U beds</th>
                                        <th>Available general beds</th>
                                        <th>Available I.C.U beds</th>
                                        <th>Hospital Website</th>
                                        <th>Email</th>
                                        <th>Contact Number</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Pincode</th>
                                        <th>landmark</th>


                                    </tr>
                                    <tr>
                                        <td>{hospital.hname}</td>
                                        <td>{hospital.hregno}</td>
                                        <td>{hospital.hinfo}</td>
                                        <td>{hospital.genralbed}</td>
                                        <td>{hospital.icubed}</td>
                                        <td>{hospital.genbedlastupdate}</td>
                                        <td>{hospital.icubedlastupdate}</td>
                                        <td>{hospital.website}</td>
                                        <td>{hospital.email}</td>
                                        <td>{hospital.mono}</td>
                                        <td>{hospital.state}</td>
                                        <td>{hospital.city}</td>

                                        <td>{hospital.pincode}</td>
                                        <td>{hospital.landmark}</td>



                                    </tr>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}



export default SearchHospital;