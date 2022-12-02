import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://reseller-cube-server.vercel.app/users/admin/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdminLoading(false);
                    setIsAdmin(data.success);
                })
        }
    }, [user?.email])
    return [isAdmin, isAdminLoading];
};

export default useAdmin;