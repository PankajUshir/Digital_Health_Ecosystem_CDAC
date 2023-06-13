
import './App.css';
import Homepage from './LandingComponant/Homepage';
import { Route, Routes } from 'react-router';
import LoginForm from './componant/LoginForm';
import PatientSignUp from './patient/PatientSignUp';
import Reactusereducer from './ambulance/AmbulanceRegisForm2';
import { BrowserRouter } from 'react-router-dom';
import AmbulanceProfilePg1 from './ambulance/AmbulanceProfilePg1';
import HospitalSignup from './hospital/HospitalSignup';
import HosptalProfilePg from './hospital/HosptalProfilePg';
import ChangeAmbulanceWorkingStatus from './ambulance/ChnageAmbuWorkingSt';
import UpdateAmbulanceProfile from './ambulance/UpdateAmbulanceProfile';
// import BloodbankProfilepg from './bloodbank/BloodbankProfilepg';
import PatientDashboard from './patient/Dashboard';
import Logout from './patient/Logout';
import UpdatePatientProfile from './patient/UpdateProfile';
import PatientProfile from './patient/Profile';
import SearchHospital from './patient/SearchHospital';
import SearchAmbulance from './patient/SearchAmbulance';
import BookAmbulance from './patient/BookAmbulance';
import ThankYou from './patient/ThankYou';
import YourOrders from './patient/YourOrders';
import PageNotFound from './patient/PageNotFound';
import AmbulanceDashbord from './ambulance/AmbulanceDashbord';
import AmbulanceOrderHostory from './ambulance/AmbulanceOrderHostory';
import AllHospitalDetail from './admin/AllHospitalDetail';
import AllAmbulanceDetails from './admin/AllAmbulanceDetails';
import AllPatientDetails from './admin/AllPatientDetails';
import AdminDashboard from './admin/AdminDashboard';
import UpdateHospital from './hospital/Update';
// import Landingpage from './LandingComponant/landingpage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<LoginForm />} />
            {/* <Route path='/signup' element={ <SignUp/> } /> */}
            {/* <Route path='/ambulanceregisteration' element={ <AmbulanceRegisForm/> } /> */}
            <Route path='/ambulanceregisteration' element={<Reactusereducer />} />
            <Route path='/hospitalregisteration' element={<HospitalSignup />} />
            <Route path='/patientsignup' element={<PatientSignUp />} />

            {/* for ambulance dashbord */}
            <Route path='/ambulancedashbord' element={<AmbulanceDashbord/>} />
            {/* For Ambulance profile page */}
            <Route path='/ambulanceprofilepg1' element={<AmbulanceProfilePg1 />} />
            {/* For change working status of ambulance */}
            <Route path='/changeworkingstatus' element={<ChangeAmbulanceWorkingStatus />} />
            {/* for update ambulance profile data  */}
            <Route path='/updateambulanceacc' element={<UpdateAmbulanceProfile />} />
            {/* for ambulance orders History */}
            <Route path='/ambulanceOrderHostory' element={<AmbulanceOrderHostory/>} />

            {/* For Hospital Profile Page */}
            <Route path='/hospitalprofilepg' element={<HosptalProfilePg />} />
            <Route path='/updatehospital' element={<UpdateHospital/>} />
            
            {/* for patient profile page */}
            <Route path='/patientdashboard' element={<PatientDashboard />} />
            <Route path='/patientprofile' element={<PatientProfile/>}/>
            <Route path='/updatepatientprofile' element={<UpdatePatientProfile/>}/>
            <Route path='/hospitalservice' element={<SearchHospital/>}/>
            <Route path='/ambulanceservice' element={<SearchAmbulance/>}/>
            <Route path='/bookambulance/:aid' element={<BookAmbulance/>}/>
            <Route path='/yourorders' element={<YourOrders/>}/>
            <Route path='/thankyou' element={<ThankYou/>}/>
            <Route path='/logout' element={<Logout/>} />
            <Route path="*" element={<PageNotFound/>}/>
            
            {/* for admin dashbord */}
            <Route path='/adminlogin' element={<AdminDashboard/>} />
            <Route path='/ambulanceSection' element={<AllAmbulanceDetails/>}/>
            <Route path='/hospitalSection' element={<AllHospitalDetail/>} />
            <Route path='/patientSection' element={<AllPatientDetails/>} />

          </Routes>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
