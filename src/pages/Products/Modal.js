import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Modal = ({productInformation, refetch}) => {
    const { user } = useContext(AuthContext);
    const {email, displayName} = user;
    const {model, resalePrice, meeting_location, phone, img, sellerName, _id} = productInformation;
    
    
    const handleBook = id => {



        
        const add = {
            status: 'sold',
            advertise: 'advertise'
        };

        fetch(`http://localhost:5000/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const booked = {
                        model,
                        resalePrice,
                        buyer_email: email,
                        buyer_name: displayName,
                        img,
                        meeting_location,
                        sellerName,
                        phone
                    };

                    fetch('http://localhost:5000/booked', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(booked)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                toast.success('Booking Confirmed');
                                refetch();
                            }
                            else {
                                toast.error(data.message)
                            }
                        })
                }
                else {
                    toast.error(data.message)
                }
            });
    };

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
                    <label htmlFor='booking' onClick={() => handleBook(_id)} className='btn btn-primary w-full'>Submit</label>
                </div>
            </div>
        </div>
    );
};

export default Modal;