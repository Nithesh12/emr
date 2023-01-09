import { useState,useEffect } from 'react';
import{
    signInWithEmailAndPassword
} from "firebase/auth"  
import { auth }from '../firebaseconfig'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./pat.css"

export default function PatientLogin(){  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState("");
    const navigate = useNavigate()
  
  
    const login=e =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
          navigate("/homepage")
        })
        .catch(err => alert(err.message))
      }
return(
  <div className='hey'>
<h1 ><Link to='/'>Mithra</Link></h1>
  <div className='mainBox'>
  <img src="../undraw_my_app_re_gxtj.png" className='hiddenpic'></img>
    <div className='login'>
     <form onSubmit={login} name='registration_form'>
      <div className='loginBox'>
        <h2> Patient Login</h2>
          <input 
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>
          <button className='button' type='submit'>Login</button>
        </div>
        </form>
        <span>
          Haven't registered yet?
          <Link to='/patientRegistration'>Register</Link>
        </span>
    </div> 
    <img src="../undraw_my_app_re_gxtj.png" className='img'></img>
</div>
</div>
)}