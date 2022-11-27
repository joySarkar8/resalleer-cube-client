import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px]">
                <form onSubmit={handleSubmit} className="card-body">
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className='text-white'>New member? <Link to='/register' className='underline text-red-400'>Register</Link> here.</p>
                </form>
            </div>
        </div>
    );
};

export default Login;