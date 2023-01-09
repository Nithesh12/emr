import { useState } from 'react';
import{
    signInWithEmailAndPassword,
    signInWithCustomToken
} from "firebase/auth"  
import { auth }from '../firebaseconfig'
import { Link, useNavigate } from 'react-router-dom';

export default function PatientLogin(){  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState("");
    const [error, setError] = useState('')
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    const login= e =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
          const user=result.user;
          setUser(user);
          navigate('/doctor')
        })
        .catch(err => alert(err.message))
      }
return(
  <div className='hey'>
  <h1 ><Link to='/'>Mithra</Link></h1>
<div className='mainBox'>
<img src="../undraw_medicine_b1ol.png" className='hiddenpic'></img>
    <div className='login'>
 <span>{error}</span>
     <form onSubmit={login} name='registration_form'>
      <div className='loginBox'>
      <h2> Patient Validation</h2>
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

          <button type='submit' className='button'>validate</button>
          </div>
        </form><span>

          <Link to='/'>Home</Link>
        </span>
    </div>
    <img src="../undraw_medicine_b1ol.png" className='img'></img>
    </div>
    </div>
)}