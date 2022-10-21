import React, {useState, useEffect} from 'react'
import { Button }  from '../components/Button/Button'
import '../Utilities/Login-Register.css'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error';
import axios from 'axios'
import Success from '../components/Success/Success';

function Register() {
    const[first_name, setfirstname] = useState('')
    const[last_name, setlastname] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[confrim_password, setconfirmpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();


    async function register(){

        if (password==confrim_password){
            const user={
                first_name,
                last_name,
                email,
                password,
                confrim_password
            }

            try {
                setloading(true);
                const result = await axios.post('/api/users/register', user)
                    setloading(false);
                    setsuccess(true);
    
                    setfirstname('')
                    setlastname('')
                    setemail('')
                    setpassword('')
                    setconfirmpassword('')
            } catch (error) {
                console.log(error.response)
                setloading(false);
                seterror(true);
            }
            console.log(user)
        }
        else{
            alert('passwords dont match')
        }
    }
  return (
    <div className='box box-borders'>
        {loading && (<Loader />)}
        {error && (<Error message='Could not Register'/>)}
        {success && (<Success message='Registration success' />)}
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <div>
                    <h1>Register</h1>
                    <input type='text' className='form-control' placeholder='First Name' 
                    value={first_name} onChange={(e)=>{setfirstname(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Last Name' 
                    value={last_name} onChange={(e)=>{setlastname(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Email' 
                    value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Password' 
                    value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Confirm Password' 
                    value={confrim_password} onChange={(e)=>{setconfirmpassword(e.target.value)}}/>

                    <Button onClick={register}>Register</Button>
                </div>
            </div>
        </div>
        <a href='/login'>
            login
        </a>
    </div>
  )
}

export default Register