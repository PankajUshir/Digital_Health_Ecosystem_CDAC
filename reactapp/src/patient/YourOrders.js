import { useEffect, useState } from "react";
import Bar from "./Webbar";

let YourOrders = () => {

    let pid = JSON.parse(localStorage.getItem("loginInfo")).pid;
    const[msg,setMsg] = useState("");

    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/yourorders?pid=" + pid)
            .then(res => res.json())
            .then(data => setOrder(data))
        //console.log(order);
    }, [])
    console.log(order);

   

    return (
        <>
            <Bar />
            <div className="container mt-5">
                <div className="row text-left">
                    <div className="col-6">
                        <h3>Your Orders</h3>
                        <table className="table table-bordered mt-5">

                            <tr className="bg-success" >
                                <th>Sr.No.</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Booking Date</th>
                                <th>Drivername</th>
                                <th>Driver Mobile No.</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Booking Status</th>
                            </tr>
                            {
                                order.map((o, indexaid) => {
                                    return (
                                        <tr >
                                            <td >{indexaid + 1}</td>
                                            <td >{o.source} </td>
                                            <td >{o.destination}</td>
                                            <td >{o.date}</td>
                                            <td >{o.ambulance.drivername}</td>
                                            <td >{o.ambulance.mono}</td>
                                            <td >{o.ambulance.state}</td>
                                            <td >{o.ambulance.city}</td>
                                            <td >{o.aprove_status==0?"Pending":"Aproved"}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default YourOrders;