import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <>
      <nav className="flex space-x-4 text-white mb-10">
        <Link to='/agent'>Agent</Link>
        <Link to='/maps'>Maps</Link>
        <Link to='/weapons'>Weapons</Link>
      </nav>
    </>
   );
}
 
export default NavBar;