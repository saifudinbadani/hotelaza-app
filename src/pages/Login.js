import '../css/login-signup.css';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

const Login = () => {
    return <div className='home-page-body bg-clr'>
            <Navigation />
             <div class="container">
                <form id="form" class="form">
                    <h3 class="heading-3 txt-align-cntr">Login</h3>
                     <div class="form-control p-1">
                         <label for="username" class="heading-4">Username</label>
                        <input type="text" id="username" placeholder="Enter username"/>
                     </div>

                <div class="form-control p-1">
                 <label for="password" class="heading-4">Password</label>
                 <input type="password" id="password" placeholder="Enter password"/>
                </div>

                <div class="form-checkbox display-flex p-1">
                 <input type="checkbox" id="remember-me" name="remember-me"/>
                 <label for="remember-me" class="heading-4 m-l-1">Remember Me</label>
                </div>
                     <button type="submit" class="btn btn-solid-primary">Login</button>
                <div class="form-link p-1 display-flex">
                     <Link to='/signup' class="new-accnt-link heading-4">
                Create New Account
                <i class="fa-solid fa-angle-right font-size-2pt6"></i>
            </Link>
         </div>
                </form>
         </div>
        </div>

}

export {Login}