import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
       <div className="menu_style">
           <NavLink exact activeClassName="active_class" to="/">About</NavLink>
           <NavLink exact  activeClassName="active_class" to="/contact">Contact</NavLink>
           <NavLink exact activeClassName="active_class" to="/contact/name">Name</NavLink> 
           <NavLink exact activeClassName="active_class" to="/service/darsh/hello">Services</NavLink> 
       </div>
   );
}

export default Navbar