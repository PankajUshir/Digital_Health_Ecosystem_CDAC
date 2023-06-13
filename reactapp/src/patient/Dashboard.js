import Bar from "./Webbar";

let PatientDashboard = () => {
    
    let fname = JSON.parse(localStorage.getItem("loginInfo")).fname;
    let lname = JSON.parse(localStorage.getItem("loginInfo")).lname;


    return (
        <>
            <Bar />
            <div className="container mt-3">
                <h1 className="text-left">Welcome {fname + " " + lname}</h1>
            </div>
        </>
    );
}
export default PatientDashboard;