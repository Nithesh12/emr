import React,{ useEffect, useState} from "react"
import { signOut,onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth,db} from "../firebaseconfig"
import {uid} from "uid"
import {set,ref, onValue} from "firebase/database"
import './pat.css'
import { Link } from "react-router-dom"

export default function Homepage(){
    const navigate=useNavigate();
    const [doctor,setDoctor]=useState('')
    const [date,setDate]=useState('')
    const [diagnosis,setDiagnosis]=useState('')
    const [prescription,setPrescription]=useState('')
    const [insurance,setInsurance]=useState('')

    const [doctors,setDoctors]=useState([])

    useEffect(()=>{
        let data=[]
        auth.onAuthStateChanged(user=>{
            if(user){
                onValue(ref(db,`/${auth.currentUser.uid}`),(snapshot)=>{
                    setDoctors([])
                    const data =snapshot.val();
                    if(data!==null){
                        Object.values(data).map((doctor)=>{
                            setDoctors((oldArray)=>[...oldArray,doctor]);
                        })
                    }
                })
            }
            else if(!user){
                navigate('/patientLogin')
            }
        })
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(()=>{
            navigate("/pateintLogin")
        })
        .catch(err=>{alert(err.message);})
    }
    const writeToDatabase=()=>{
        const uidd=uid();
        set(ref(db,`/${auth.currentUser.uid}/${uidd}`),{
            doctor:doctor,
            date:date,
            diagnosis:diagnosis,
            prescription:prescription,
            insurance:insurance,
            date:date,
            uidd:uidd

        })
        setDoctor("");
        setDate("");
        setDiagnosis("");
        setPrescription("");
        setInsurance("");
    }
    return(
        <div className="doctorForm">
        <h1><Link to='/'>Mithra</Link></h1>
        {/* <img src="../../undraw_Notes_re_pxhw.png" className="image"></img> */}
        <div className="">
        <div>
            <div className="card">
            {doctors.map((doctor) => (
                <div className="cards">
              <p>Doctor Id : {doctor.doctor}</p>
              <p>Checkup : {doctor.date}</p>
              <p>Diagnosis : {doctor.diagnosis}</p>
              <p>Prescription : {doctor.prescription}</p>
              <p>Insurance Claimed : {doctor.insurance}</p>
                </div>
          ))}
          </div>

        </div>
         </div>
         </div>

    
    )
}