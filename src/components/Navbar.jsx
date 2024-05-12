import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import title from '../assets/images/title.png';
import { AuthContext } from "../provider/AuthProvider";
//import userImg from '../assets/images/user.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = (e) => {
        const newTheme = e.target.checked ? 'synthwave' : 'light';
        setTheme(newTheme);
    };
    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Home</span> </NavLink>
            </li>
            <li>
                <NavLink to="/allService" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>All Service</span> </NavLink>
            </li>
            <li>
                {
                    user && <li
                        className="dropdown dropdown-content z-50">
                        <NavLink to="/dashboard"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} >
                            <span
                            >Dashboard
                            </span>
                        </NavLink>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 lg:border border-purple-600'>
                            <li>
                                <Link to='/addService' className="hover:bg-purple-500 hover:text-white">Add Service</Link>
                            </li>
                            <li>
                                <Link to='/manageService' className="hover:bg-purple-500 hover:text-white">Manage Service</Link>
                            </li>
                            <li>
                                <Link to='/bookedService' className="hover:bg-purple-500 hover:text-white">Booked Service </Link>
                            </li>
                            <li>
                                <Link to='/serviceToDo' className="hover:bg-purple-500 hover:text-white">Service To Do</Link>
                            </li>

                        </ul>
                    </li>
                }
            </li>
        </>
    );


    return (
        <div className={`fixed z-10 w-full border-b ${theme === 'synthwave' ? 'dark' : 'bg-base-100'}`}>
            <div className="navbar flex justify-between lg:mx-28">
                <div className="navbar">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-purple-600 rounded-box w-32 h-32 space-y-2">
                            {links}
                        </ul>
                    </div>
                    <div className="lg:ml-20">
                        <img className="h-full w-56 " src={title} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-8 text-[16px] font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar md:flex lg:flex space-x-2 lg:ml-36">
                    <div className="hidden lg:flex">
                        <div className="mr-4 mt-1 ">
                            {user && (
                                <div className="tooltip  tooltip-primary" data-tip={user.displayName}>
                                    <div className="rounded-full border border-red-600"><img className="rounded-full w-10 h-10" src={user.photoURL} alt="image is not found" /></div>
                                </div>
                            )}
                        </div>
                        <div>
                            {
                                user ?
                                    <button onClick={handleSignOut} className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">LOG OUT</button>
                                    :
                                    <Link to='/login'>
                                        <button className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">LOG IN</button>
                                    </Link>
                            }
                        </div>
                    </div>
                    <div className=" h-[25px] bg-fuchsia-700 text-purple-600 hidden lg:block">|</div>
                    <div className="hidden lg:flex">
                        <Link to='/register' className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">REGISTER</Link>
                    </div>
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Navbar;