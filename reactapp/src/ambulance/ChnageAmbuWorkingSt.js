import { useState } from "react";
import { json, useNavigate } from "react-router";



let ChangeAmbulanceWorkingStatus = () => {

    let aid = JSON.parse(localStorage.getItem("loginInfo")).aid;
    let navigate = useNavigate();
    const [status, setStatus] = useState(JSON.parse(localStorage.getItem("loginInfo")).availablestatus);

    // useEffect(() => {
    //     console.log("Change amb working useEffect")
    const updateStaus = (e) => {

        e.preventDefault()
        console.warn("try to update data ....")
        fetch("http://localhost:8080/changeambuworkingststus?aid=" + aid + "&availablestatus=" + status
            // fetch("http://localhost/changeambuworkingststus?aid=" + aid 
            , {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    availablestatus: status
                })
            }
        )
            .then(res => {
                if (res.status == 200) {
                    alert("Work Status Changed!!")
                    navigate("/ambulanceprofilepg1")
                }
                else {
                    alert("Some Proble Occures!!")
                }

            })
    }


    return (

        <div className="Container-fluid">
            {/* <p>this is working chek status{aid}</p> */}
            <div >

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active " href="#" style={{ fontSize: "19px" }}>Digital Health Ecosystem</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/ambulanceprofilepg1">Back</a>
                        </li>
                        {/* <li className="nav-item">
//       <a className="nav-link disabled" href="#">Disabled</a>
/  /     </li> */}
                        {/* <li className="nav-item">
            <a className="nav-link" href="/updateambulanceacc">Update Information</a>
        </li> */}
                        {/* <li className="nav-item">
            <a className="nav-link" href="#" onClick={deleteAC}>Delete Account</a>
        </li> */}
                        {/* <li className="nav-item">
            {/* <Link to='/changeworkingstatus'>Change Working Status</Link> 
            <a className="nav-link" href="/changeworkingstatus">Change Working Status</a>
        </li> */}
                        {/* <li className="nav-item">
            <a className="nav-link" href="/login" onClick={logout}>Logout</a>
        </li> */}


                    </ul>
                </nav>

            </div>

            <form>
                <h2>Availabe To Provide Service??</h2>
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="status" value="1"
                        // onChange={(e)=>{dispatch({type:'update',field:'gender',val:e.target.value})}} name="gender" />
                        onChange={(e) => setStatus(e.target.value)} />
                    <label style={ {fontSize:'20px'} } className="form-check-label" >Yes</label>
                </div>
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="status" value="0"
                        // onChange={(e)=>{dispatch({type:'update',field:'gender',val:e.target.value})}} name="gender" />
                        onChange={(e) => setStatus(e.target.value)} />
                    <label style={ {fontSize:'20px'} } className="form-check-label" >NO</label>
                    <br />
                </div>
                <div>
                    {/* <input type="butoon" value="Chnage Status"></input> */}
                    <button className="btn btn-primary btn-blob" style={{ color: 'red' }} onClick={updateStaus} >Chnage Status</button>
                </div>
            </form>
        </div>
    )

}
export default ChangeAmbulanceWorkingStatus;