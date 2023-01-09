import React,{ useEffect, useState} from "react"
import { signOut,onAuthStateChanged } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth,db} from "../firebaseconfig"
import {uid} from "uid"
import {set,ref, onValue} from "firebase/database"
import "./doctor.css";
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
           
        })
    },[])

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
        navigate('/')
    }
    return(
        <div className="doctorForm">
            <h1><Link to='/'>Mithra</Link></h1>
            <div className="inputFields">
            <h3 className="head">Medical History</h3>
            <input
            type="text"
            placeholder="Doctor Name..."
            value={doctor}
            onChange={(e)=>setDoctor(e.target.value)}/>
             <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>
             <input
            type="text"
            placeholder="Diagnosis"
            value={diagnosis}
            onChange={(e)=>setDiagnosis(e.target.value)}/>
             <input
            type="text"
            placeholder="Prescription"
            value={prescription}
            onChange={(e)=>setPrescription(e.target.value)}/>
             <input
            type="text"
            placeholder="Insurance claimed"
            value={insurance}
            onChange={(e)=>setInsurance(e.target.value)}/>
            <button onClick={writeToDatabase}>Add</button>
            </div>
            <div className="card">

            {doctors.map((doctor) => (
                <div className="cards">
              <p>DoctorId : {doctor.doctor}</p>
              <p>Checkup : {doctor.date}</p>
              <p>Diagnosis : {doctor.diagnosis}</p>
              <p>Prescription : {doctor.prescription}</p>
              <p>Insurance Claimed : {doctor.insurance}</p>
            </div>
          ))}
          </div>
        </div>
         
    
    )
}