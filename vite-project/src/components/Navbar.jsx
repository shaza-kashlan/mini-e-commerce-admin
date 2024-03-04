import sideBar from '../assets/menu-icon.png'
import logo from '../assets/logo.png'

const Navbar = ({onSidebarToggle}) => {
    return (
     <>
     <div className='navbar'>
     <img  src={sideBar} className='sideBar' alt="sideBar" onClick={onSidebarToggle}/>
     <img  src={logo} alt="logo"/>
     <h3> E-commerce App</h3>
     </div>
    </>
    );
}

export default Navbar;