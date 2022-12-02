import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';

const LeftSideNav = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user);
    const [isAdmin] = useAdmin(user);
    return (
        <div>
            <NavLink className='btn btn-primary w-full mt-4 mb-4' to='/dashboard/my-orders'>My Orders</NavLink>
            {
                isAdmin && 
                <>
                <NavLink className='btn btn-primary w-full  mb-4' to='/dashboard/all-sellers'>All Sellers</NavLink>
                <NavLink className='btn btn-primary w-full  mb-4' to='/dashboard/all-buyers'>All Buyers</NavLink>
                </>
            }
            {
                isSeller &&
                <>
                    <NavLink className='btn btn-primary w-full mb-4' to='/dashboard/add-product'>Add Product</NavLink>
                    <NavLink className='btn btn-primary w-full mb-4' to='/dashboard/my-products'>My Products</NavLink>
                </>
            }
        </div>
    );
};

export default LeftSideNav;