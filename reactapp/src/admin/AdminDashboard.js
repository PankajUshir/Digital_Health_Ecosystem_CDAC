import { useNavigate } from "react-router";
// import './welcome.gif'
import welcome from './welcome.gif';


let AdminDashboard = () => {

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");

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
                        {/* <li className="nav-item">
            //       <a className="nav-link disabled" href="#">Disabled</a>
            /  /     </li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="/patientSection">Patient Section</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/hospitalSection">Hospital Section</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/ambulanceSection">Ambulance Section</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Bloodbank Section</a>
                        </li> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="/login" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </nav>

            </div>




            <h2>Welcome Back!!!</h2>
            <div >
                <img className="rounded-circle" src={welcome} width={'800px'} height={'500px'} alt="NA"></img>
            </div>
        </div>
    )

}
export default AdminDashboard;