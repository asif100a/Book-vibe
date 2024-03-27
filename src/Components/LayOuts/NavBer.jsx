import { NavLink } from "react-router-dom";
import './NavBer.css';

const NavBer = () => {
    const navLinks = <>
        <li><NavLink className={"hover:bg-[#23BE0A]"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={"hover:bg-[#23BE0A]"} to={'/listed'}>Listed Books</NavLink></li>
        <li><NavLink className={"hover:bg-[#23BE0A]"} to={'/read'}>Pages to Read</NavLink></li>
    </>


    return (
        <>
            <div className="navbar bg-base-100 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                            <li><a href="">Sign In</a></li>
                            <li><a href="">Sign Up</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-4 menu-horizontal px-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-4 hidden sm:flex">
                    <a className="btn text-white bg-[#23BE0A]">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default NavBer;