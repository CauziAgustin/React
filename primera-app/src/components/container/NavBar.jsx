import React from "react";
import { Link } from "react-router-dom";
import Cartwidget from "./Cartwidget";


const NavBar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown mx-5" style={{width:'100px'}}>
            <label tabindex="0" class="btn btn-ghost btn-circle" style={{width:'100%'}} >
             <div  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
              <svg  style={{margin:'10px'}} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              MARCAS
             </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/marcas/iphone' >Iphone</Link></li>
              <li><Link to='/marcas/motorola' >Motorola</Link></li>
              <li><Link to='/marcas/samsung' >Samsung</Link></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <Link to='/' class="btn btn-ghost normal-case text-xl">CelularTech</Link>
        </div>
        <div class="navbar-end">
          <div className="flex mx-40">
            <li className="mx-5" style={{listStyle: "none"}}><Link to=''><a>Reparacion</a></Link></li>
            <li className="mx-5 md:w-40" style={{listStyle:'none'}}><Link to=''><a>Sobre Nosotros </a></Link></li>
          </div>
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <div><Cartwidget></Cartwidget></div>
    </div>
  );
};

export default NavBar;
