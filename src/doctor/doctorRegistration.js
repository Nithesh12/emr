import { useState } from 'react';
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    // signInWithCustomToken
} from "firebase/auth"  
import { auths }from '../doctorfirebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function DoctorLogin(){  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const navigate=useNavigate()

    const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        alert('Passwords does not match')
      }
    }
    return isValid
  }
  
    const register=e =>{
        e.preventDefault()
        if(validatePassword()){
        const user=createUserWithEmailAndPassword(auths,email,password).then(()=>{
          navigate('/patientValidation')
        }).catch(error=>
            alert(error.message))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
    
return(
  <div className='hey'>
<h1 ><Link to='/'>Mithra</Link></h1>
  <div className='mainBox'>
  <img src="../undraw_Private_data_re_4eab.png" className='hiddenpic'></img>
    <div className='login'>
     <form onSubmit={register} name='registration_form'>
      <div className='loginBox'>
      <h2>Doctor SignUp</h2>
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

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>
          <button type='submit' className='button'>Register</button>
          </div>
        </form>
        <span>
        Already registered?  
          <Link to='/doctorLogin'>login</Link>
        </span>
        <span>
          <Link to="/">Home</Link>
        </span>
    </div>
    <img src="../undraw_Private_data_re_4eab.png" className='img'></img>
</div>
    </div>
)}