import '../css/login-signup.css';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

const Login = () => {
    return <div className='home-page-body bg-clr'>
            <Navigation />
             <div className="container">
                <form id="form" className="form">
                    <h3 className="heading-3 txt-align-cntr">Login</h3>
                     <div className="form-control p-1">
                         <label htmlFor="username" className="heading-4">Username</label>
                        <input type="text" id="username" placeholder="Enter username"/>
                     </div>

                <div className="form-control p-1">
                 <label htmlFor="password" className="heading-4">Password</label>
                 <input type="password" id="password" placeholder="Enter password"/>
                </div>

                <div className="form-checkbox display-flex p-1">
                 <input type="checkbox" id="remember-me" name="remember-me"/>
                 <label htmlFor="remember-me" className="heading-4 m-l-1">Remember Me</label>
                </div>
                     <button type="submit" className="btn btn-solid-primary">Login</button>
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