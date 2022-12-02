import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const { googleProviderLogin, login } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);

    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    

    const handleGoogleSignIn = () => {
        const selection = 'buyer';
        setLoader(true);
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                console.log(email);
                setUserToDb(name, email, selection);
                user && navigate(from, { replace: true });
                toast.success('Google Login Successfull!')
            })
            .catch(e => {
                toast.error(e.message);
                setLoader(false);
            })

    };

    

    
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setLoader(true)
        login(email, password)
            .then(result => {
                form.reset();
                toast.success('Login Successfull!')
            })
            .catch(e => {
                toast.error(e.message);
                setLoader(false);
            })
    };

    const setUserToDb = (name, email, selection) => {
        const user = {
            name,
            email,
            role: selection,
        };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user', data);
            })
    };


    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
                <form onSubmit={handleSubmit} className="card-body pb-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">{loader ? <div className=''>
                            <div style={{ borderTopColor: "transparent" }}
                                className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                        </div> : 'Login'}</button>
                    </div>
                </form>

                <div className='pl-8 pr-8'><button onClick={handleGoogleSignIn} className="btn btn-secondary w-full">Login with Google</button></div>
                <p className='text-white mt-3 mb-8 ml-8'>New User Please <Link className='underline text-red-400' to='/register'>Register</Link> here.</p>

            </div>
        </div>
    );
};

export default Login;