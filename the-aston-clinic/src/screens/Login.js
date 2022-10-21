import React, {useState, useEffect} from 'react'
import { Button }  from '../components/Button/Button'
import '../Utilities/Login-Register.css'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import axios from 'axios'

function Login() {

    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const [loading, setloading] = useState();
    const [error, seterror] = useState();

    async function login(){
            const user={
                email,
                password,
            }
            try {
                setloading(true);
                const result = await axios.post('/api/users/login', user)
                setloading(false);
                localStorage.setItem('currentUser', JSON.stringify(result));
                window.location.href='/treatments'
            } catch (error) {
                setloading(false);
                seterror(true);
                console.log(error)
            }
            console.log(user)
    }

  return (
    <div>
    <div className='box box-borders'>
        {loading && (<Loader />)}
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                {error && (<Error message="Check Email and Password"/>)}
                <div>
                    <h1>Login</h1>
                    <input type='text' className='form-control' placeholder='Email' 
                    value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Password' 
                    value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <Button onClick={login}>Login</Button>
                </div>
            </div>
        </div>
        <a href='/register'>
            register
        </a>
    </div>
    </div>
  )
}

export default Login