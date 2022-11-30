import { useEffect, useState } from 'react';

const useSeller = (user) => {
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const [isSeller, setIsSeller] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/seller/${user?.email}`)
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