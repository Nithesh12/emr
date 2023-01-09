import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import PatientRegistration from './patient/patientRegistration';
import PatientLogin from './patient/patientlogin';
import DoctorRegistration from './doctor/doctorRegistration';
import DoctorLogin from './doctor/doctorLogin';
import Doctor from './doctor/doctor';
import PatientValidation from './doctor/patientValidation';
import Home from './Home';
import Homepage from './patient/homepage';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/patientRegistration' element={<PatientRegistration/>}/>
        <Route path='/doctorRegistration' element={<DoctorRegistration/>}/>
        <Route path='/doctorLogin' element={<DoctorLogin/>}/>
        <Route path='/patientLogin' element={<PatientLogin/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/patientValidation' element={<PatientValidation/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
