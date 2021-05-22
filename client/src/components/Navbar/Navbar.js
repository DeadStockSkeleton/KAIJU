
import Lbar from './Lbar';
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/live' ? (null) : (<nav className={location.pathname === '/login' || location.pathname === '/signup' ? ("navbar sticky-top"): ("login-true sticky-top navbar")}>
        <div className="container-fluid lbar p-2">            
        <b className={location.pathname === '/login' || location.pathname === '/signup' ? ("text-dark nav-logo navbar-brand") : ("text-light nav-logo navbar-brand")}>KAIJU<span className="text-primary">CODE</span></b>

          {location.pathname === '/login' || location.pathname === '/signup' ? (<></>) : (<Lbar />)}
            
        </div>
      </nav>)}
      
    </>
  );
}

export default Navbar;
