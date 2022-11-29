import toast from 'react-hot-toast';


const AdvertiseCard = ({ advertiseItem, user, refetch }) => {
    
    const {displayName} = user;

    
    

    const { model, img, condition, resalePrice, _id, email, meeting_location, sellerName, phone } = advertiseItem;
    // console.log(model);

    const handleBook = id => {
        const add = {
            status: 'sold'
        };


        fetch(`http://localhost:5000/advertise/${id}`, {
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
                        email,
                        displayName,
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
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {model}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2>Price: {resalePrice} /-</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{condition}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
            <button onClick={() => handleBook(_id)} className='btn btn-primary'>Buy</button>
            {/* <Link to={`/products/${categoryName}`}><button className="btn btn-primary">View Products</button></Link> */}
        </div>
    );
};

export default AdvertiseCard;