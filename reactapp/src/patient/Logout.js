

const Logout = () => {

    localStorage.clear();


    // navigate("/");
    window.location.href = "/login";
}

export default Logout;