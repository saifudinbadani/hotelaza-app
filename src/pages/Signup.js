import '../css/login-signup.css';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

const Signup = () => {
    return <div className='home-page-body bg-clr'>
                <Navigation />
                <div className="container">
            <form id="form" className="form">
             <h3 className="heading-3 txt-align-cntr">Signup</h3>
            <div className="form-control p-1">
                <label htmlFor="username" className="heading-4">Username</label>
                <input type="text" id="username" placeholder="Enter username"/>
            </div>

            <div className="form-control p-1">
                <label htmlFor="username" className="heading-4">Email</label>
                <input type="text" id="username" placeholder="Enter email"/>
            </div>

            <div className="form-control p-1">
                <label htmlFor="password" className="heading-4">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
            </div>

            <div className="form-control p-1">
                <label htmlFor="password" className="heading-4">Re-enter Password</label>
                <input type="password" id="password" placeholder="Re-enter password" />
            </div>

            <div className="form-checkbox display-flex p-1">
                <input type="checkbox" id="terms-conditions" name="terms-conditions"/>
                <label htmlFor="terms-conditions" className="heading-4 m-l-1">I accept all Terms & Conditions</label>
            </div>
            <button type="submit" className="btn btn-solid-primary">Create New Account</button>
            <div className="form-link p-1 display-flex">
                <Link to='/login' className="new-accnt-link heading-4">
                    Already have an account
                    <i className="fa-solid fa-angle-right font-size-2pt6"></i>
                </Link>
            </div>
        </form>
         </div>
     </div>
}

export {Signup}