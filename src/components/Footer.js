import '../css/nav.css';
import '../css/home-page.css';
import '../App.css';

export const Footer = () => {
    return <div className="footer display-flex primary-lght">
        <h1 className="footer-title fw-regular heading-4 m-rght-auto">Saifudin</h1>
        <div className='footer-icons display-flex'>
            <i className="f-icon fab fa-github heading-3 p-rl-1"></i>
            <i className="f-icon fab fa-linkedin heading-3 p-rl-1"></i>
            <i className="f-icon fab fa-twitter heading-3 p-rl-1"></i>
        </div>
        
    </div>
}