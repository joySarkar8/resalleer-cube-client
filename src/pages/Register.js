import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const { googleProviderLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    
    const navigate = useNavigate();

    
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const selection = 'buyer';
        setLoader(true);
        googleProviderLogin(googleProvider)
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                setUserToDb(name, email, selection);
                toast.success('Google Login Successfull!')
                navigate('/')
            })
            .catch(e => {
                toast.error(e.message);
                setLoader(false);
            });
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const selection = form.selection.value;
        console.log(name, email, password, selection);

        setLoader(true)
        createUser(email, password)
            .then(() => {
                form.reset();
                handleUpdateProfile(name, email, selection);

                toast.success('Create Account Successfull!')
            })
            .catch(e => {
                toast.error(e.message);
                setLoader(false);
            })
    };

    const handleUpdateProfile = (name, email, selection) => {
        const profile = { displayName: name }
        updateUserProfile(profile)
            .then(() => {
                setUserToDb(name, email, selection)
            })
            .catch(e => toast.error(e.message))
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
                navigate('/')
            })
    };


    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
                <form onSubmit={handleSubmit} className="card-body pb-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <select name='selection' className="select select-bordered w-full max-w-xs">
                        <option value='buyer' defaultValue>For Buyer Account</option>
                        <option value='seller'>For Seller Account</option>
                    </select>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">{loader ? <div className=''>
                            <div style={{ borderTopColor: "transparent" }}
                                className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                        </div> : 'Register'}</button>
                    </div>
                </form>

                <div className='pl-8 pr-8'><button onClick={handleGoogleSignIn} className="btn btn-secondary w-full">Login with Google</button></div>

                <p className='text-white mt-3 mb-8 ml-8'>Allready have account? <Link className='underline text-red-400' to='/login'>Login</Link> here.</p>
            </div>
        </div>
    );
};

export default Register;

