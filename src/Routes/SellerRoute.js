import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loading from '../pages/shared/Loading';

const SellerRoute = ({children}) => {
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    const [isSeller, setIsSeller] = useState(false);
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/seller/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsSellerLoading(false);
                setIsSeller(data.success);
            })
        }
    } ,[user?.email])

    
console.log(isSeller);


if (loader || isSellerLoading) {
    return <Loading></Loading>
}
    if (isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;