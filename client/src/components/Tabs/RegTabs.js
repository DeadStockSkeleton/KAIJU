import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';
function RegTabs() {
    const location = useLocation();
    return (
      <>
        <ul class="nav nav-pills p-5 mx-auto nav-fill">
  <li class="nav-item">
    <Link to="/login" class={cn('nav-link', {'nav-link regActive': location.pathname === '/login'})}>Login</Link>
  </li>
  <li class="nav-item">
  <Link to="/signup" class={cn('nav-link', {'nav-link regActive': location.pathname === '/signup'})}>SignUp</Link>
  </li>
</ul>
      </>
    );
  }
  
  export default RegTabs;