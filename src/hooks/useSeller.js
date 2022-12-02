import { useEffect, useState } from 'react';

const useSeller = (user) => {
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const [isSeller, setIsSeller] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://reseller-cube-server.vercel.app/users/seller/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSellerLoading(false);
                    setIsSeller(data.success);
                })
        }
    }, [user?.email])
    return [isSeller, isSellerLoading]
};

export default useSeller;