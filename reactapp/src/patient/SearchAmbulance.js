import Bar from "./Webbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let SearchAmbulance = () => {

    const [city, setCity] = useState([]);
    const [data, setData] = useState([]);
    const [acity, setAcity] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/getambulancecities")
            .then(res => res.json())
            .then(usercity => setCity(usercity));   //city
            console.log(city);
    }, [])

    let ambulancedata = () => {
        fetch("http://localhost:8080/getAmbulances?city=" + acity)
            .then(res => res.json())
            .then(ambdata => setData(ambdata))
    }

    const handleChange = event => {
        console.log(event.target.value);
        setAcity(event.target.value);
    };


    return (
        <>
            <Bar />
            <div className="container mt-5">
                <h3 >Search Ambulances</h3>
                <select onChange={handleChange} className="btn btn-light border border-dark dropdown-toggle"  >
                    <option >Select City</option>
                    {
                        city.map((item) => {
                            return (

                                // <option onChange={setAcity(item.city)} key={item.city}>{item}</option>
                                <option key={item.city}>{item}</option>
                            )
                        })
                    }
                </select>
                <button className="btn btn-primary" onClick={ambulancedata}>Search</button>
            </div>

            <div className="container mt-5">
                {
                    data.map((ambulance) => {
                        return (
                            <table className="table table-bordered">
                                <tr className="bg-success">
                                    <th>Driver Name</th>
                                    <th>Ambulance Registration Number</th>
                                    <th>Ambulance (RTO) Number</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Pincode</th>
                                    <th>Option</th>
                                </tr>
                                <tr>
                                    <td>{ambulance.drivername}</td>
                                    <td>{ambulance.aregno}</td>
                                    <td>{ambulance.avehicalno}</td>
                                    <td>{ambulance.email}</td>
                                    <td>{ambulance.mono}</td>
                                    <td>{ambulance.state}</td>
                                    <td>{ambulance.city}</td>
                                    <td>{ambulance.pincode}</td>
                                    <td ><Link to={{ pathname: `/bookambulance/${ambulance.aid}` }} style={{ color: 'red', cursor: 'pointer' }}>Book</Link></td>
                                </tr>
                            </table>
                        )
                    })
                }
            </div>
        </>
    );
}



export default SearchAmbulance;