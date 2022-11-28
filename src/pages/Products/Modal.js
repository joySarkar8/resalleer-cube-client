import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Modal = ({productInformation}) => {
    const { user } = useContext(AuthContext);
    const {model, resalePrice, meeting_location, phone} = productInformation;
    console.log(productInformation);
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h4 className="text-lg font-bold">{user?.displayName}</h4>
                    <h4 className="text-lg font-bold">{user?.email}</h4>
                    <h2 className="text-xl">{model}</h2>
                    <h2 className="text-xl">Price: {resalePrice}/-</h2>
                    <h2 className="text-xl">Meeting Location: {meeting_location}</h2>
                    <h2 className="text-xl mb-4">Phone: {phone}</h2>
                    <button className='btn btn-primary w-full'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;