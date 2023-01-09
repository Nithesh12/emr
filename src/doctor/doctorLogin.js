import { useState } from 'react';
import{
    signInWithEmailAndPassword,
} from "firebase/auth"  
import { auths }from '../doctorfirebase'
import { Link,useNavigate } from 'react-router-dom'

export default function DoctorLogin(){  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState("");
    const navigate=useNavigate();

    const login=e =>{
        e.preventDefault()
        signInWithEmailAndPassword(auths, email, password)
        .then(()=>{
          navigate('/patientValidation')
        })
        .catch(err => alert(err.message))
      }
return(
  <div className='hey'>
<h1 ><Link to='/'>Mithra</Link></h1>
  <div className='mainBox'>
  <img src="../undraw_Doctors_re_9ujc.png" className='hiddenpic'></img>
    <div className='login'>
     <form onSubmit={login} name='registration_form'>
      <div className='loginBox'>
       <h2>Doctor Login</h2>
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

          <button type='submit' className='button'>Login</button>
          </div>
        </form>
        <span>
          Havent't registered yet?
          <Link to='/doctorRegistration'>Register</Link>
        </span>
    </div>
    <img src="../undraw_Doctors_re_9ujc.png" className='img'></img>
    </div>
    </div>
)}