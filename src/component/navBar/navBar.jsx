import React from 'react';
import "./navBar.css";

const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg bg-dark">
  <div className='container-fluid d-flex justify-content-between'> 
<div className='logo_style '>
Agrimmo
</div>
<div className='my-auto col-4'>
<ul className='w-100 d-flex justify-content-between my-auto' >
    <li className='nav_item_style '>Accueil</li>
    <li className='nav_item_style'>Project</li>
    <li className='nav_item_style'>Contact</li>
    <li className='nav_item_style'>Partenaire</li>
</ul>
</div>
  </div>
</nav>
    );
};

export default NavBar;