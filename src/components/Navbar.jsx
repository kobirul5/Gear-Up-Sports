import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars></FaBars>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/allEquipment">All Sports Equipment</NavLink></li>
                        <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
                        <li><NavLink to="/myEquipment">My Equipment List</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">GearUp Sports</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allEquipment">All Sports Equipment</NavLink></li>
                    <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
                    <li><NavLink to="/myEquipment">My Equipment List</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? 
                    <div className='flex justify-center gap-3 items-center'>
                        <img title={user && user.displayName} className='w-10 h-10 rounded-full border' src={user && user.photoURL}/>
                        <NavLink onClick={logout} to="/auth/login" className="btn">Logout</NavLink>
                    </div>
                    :
                    <div className='flex justify-center gap-3 items-center'>
                        <NavLink to="/auth/signUp" className="btn">Sign UP</NavLink>
                        <NavLink to="/auth/login" className="btn">Login</NavLink>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;