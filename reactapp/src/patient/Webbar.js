
let Bar = (() => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark">
                <a className="navbar-brand" href="/">Digital Health Ecosystem</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/patientdashboard">Dashboard</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/patientprofile">Profile</a>
                        </li>

                        {/* <li className="nav-item dropdown">
                            <select className="nav-link dropdown-toggle btn btn-outline-primary">
                                <option className="dropdown-item">Select Service</option>
                                <option className="dropdown-item" ><a href="/hospitalservice">Hospital</a></option>
                                <option className="dropdown-item" ><Link to="/hospitalservice">Hospitals</Link></option>
                                <option className="dropdown-item" >Bloodbank</option>
                            </select>
                        </li> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="/hospitalservice">Hospital</a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="/ambulanceservice">Ambulance</a>
                        </li>
{/* 
                        <li className="nav-item">
                            <a className="nav-link" href="/bloodbankservice">Bloodbank</a>
                        </li> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="/yourorders">Your Orders</a>
                        </li>

                        <li className="nav-item  active">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
})
export default Bar;