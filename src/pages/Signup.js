import '../css/login-signup.css';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

const Signup = () => {
    return <div className='home-page-body bg-clr'>
                <Navigation />
                <div class="container">
            <form id="form" class="form">
             <h3 class="heading-3 txt-align-cntr">Signup</h3>
            <div class="form-control p-1">
                <label for="username" class="heading-4">Username</label>
                <input type="text" id="username" placeholder="Enter username"/>
            </div>

            <div class="form-control p-1">
                <label for="username" class="heading-4">Email</label>
                <input type="text" id="username" placeholder="Enter email"/>
            </div>

            <div class="form-control p-1">
                <label for="password" class="heading-4">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
            </div>

            <div class="form-control p-1">
                <label for="password" class="heading-4">Re-enter Password</label>
                <input type="password" id="password" placeholder="Re-enter password" />
            </div>

            <div class="form-checkbox display-flex p-1">
                <input type="checkbox" id="terms-conditions" name="terms-conditions"/>
                <label for="terms-conditions" class="heading-4 m-l-1">I accept all Terms & Conditions</label>
            </div>
            <button type="submit" class="btn btn-solid-primary">Create New Account</button>
            <div class="form-link p-1 display-flex">
                <Link to='/login' class="new-accnt-link heading-4">
                    Already have an account
                    <i class="fa-solid fa-angle-right font-size-2pt6"></i>
                </Link>
            </div>
        </form>
         </div>
     </div>
}

export {Signup}