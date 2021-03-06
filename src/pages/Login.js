import '../css/login-signup.css';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginService } from '../utils/AuthFunctions'

const Login = () => {

     const navigate = useNavigate();
    const { setInitialAuth, initialAuth  } = useAuth();
    const { isLoggedIn } = initialAuth;
    const [loginData, setLoginData] = useState({
        email:'',
        password: ''
    });
    
    useEffect(() => {
        if(isLoggedIn === false){
            localStorage.clear()
        }
    }, [isLoggedIn])

    const loginInputHandler = (e) => {
        setLoginData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const loginHandler = async () => {
     const respData = await loginService(loginData.email, loginData.password)
     if(respData){
         setInitialAuth({isLoggedIn: true,
         token: respData.data.encodedToken});
        //  localStorage.setItem('userName', respData.data.foundUser[0]) 
         navigate('/') 
     } 
       
 }
 const guestLoginHandler = async () => {
     const respData = await loginService('saifbadani@gmail.com','saifbadani')

     if(respData){
         setInitialAuth({isLoggedIn: true,
             token: respData.data.encodedToken});
         localStorage.setItem('userName', respData.data.foundUser.firstName) 
         navigate('/')
          }
     }

    return <div className='home-page-body bg-clr'>
            <Navigation />
             <div className="container">
             <form id="form" className="form">
                    <h3 className="heading-3 txt-align-cntr">Login</h3>
                     <div className="form-control p-1">
                         <label htmlFor="email" className="heading-4">Email</label>
                        <input type="text" name="email" placeholder="Enter email"  required onChange={(e) => loginInputHandler(e)}/>
                     </div>

                <div className="form-control p-1">
                 <label htmlFor="password" className="heading-4">Password</label>
                 <input type="password" name="password" placeholder="Enter password" required onChange={(e) => loginInputHandler(e)}/>
                </div>

                <div className="form-checkbox display-flex p-1">
                 <input type="checkbox" id="remember-me" name="remember-me"/>
                 <label htmlFor="remember-me" className="heading-4 m-l-1">Remember Me</label>
                </div>
                     <button type="button" className="btn btn-solid-primary" onClick={loginHandler}>Login</button>
                     <button type="button" className="btn btn-solid-secondary" onClick={guestLoginHandler}>Login as Guest</button>
                <div className="form-link p-1 display-flex">
                     <Link to='/signup' className="new-accnt-link heading-4">
                Create New Account
                <i className="fa-solid fa-angle-right font-size-2pt6"></i>
            </Link>
         </div>
                </form>
         </div>
        </div>

}

export {Login}