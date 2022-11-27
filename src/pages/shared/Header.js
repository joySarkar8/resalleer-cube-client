import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Log Out complete!')
            })
            .catch(error => toast.error(error))
    };

    const menuItems = <>
        <li className='text-success'><Link to='/'>Home</Link></li>
        <li className='text-success'><Link to='/about'>Blog</Link></li>
        {user?.uid ?
            <>
                <li className='text-success'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='text-success'><button onClick={handleLogOut}>Logout</button></li>
            </>
            :
            <li className='text-success'><Link to='/login'>Login</Link></li>}
    </>

    return (
        <div className='bg-slate-700 '>
            <div className="navbar flex justify-between container m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={1} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><strong className='mr-1'>RESELLER</strong>CUBE</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;