import '../App.css';
import logo from '.../assets/2273-Ampersand.png';

function Header() {
    return (
        <div className="Header">
            <h1>Header</h1>
            <img src={logo} alt='DND 5E Logo' />
        </div>
    )
}

export default Header;