import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const model = form.model.value;
        const img = form.img.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const yearsOfUse = form.yearsOfUse.value;
        const cardPostingTime = form.cardPostingTime.value;
        const location = form.location.value;
        const meeting_location = form.meeting_location.value;
        const description = form.description.value;
        const phone = form.phone.value;
        const category = form.selection1.value;
        const condition = form.selection2.value;

        const product = {
            model,
            resalePrice,
            originalPrice,
            yearsOfUse,
            cardPostingTime,
            sellerName: user.displayName,
            location,
            description,
            img,
            meeting_location,
            phone,
            category,
            condition,
            email: user.email
        };
        console.log(product);

       
       fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                toast.success('Product Added');
                form.reset();
            }
            else{
                toast.error(data.message)
            }
        })
    }
    return (
        <div>
            <h2 className='text-4xl text-center mb-4 mt-4'>Add Product</h2>
            <form onSubmit={handleSubmit} className='text-center'>
                <input type="text" name='model' required placeholder="* Model Name" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='img' required placeholder="* Img" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='resalePrice' required placeholder="* Price" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='originalPrice' required placeholder="* Original Price" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='yearsOfUse' required placeholder="* Years of Use" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='cardPostingTime' required placeholder="* Posting Time" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='location' required placeholder="* Location" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='meeting_location' required placeholder="* Meeting Location" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='description' required placeholder="* Description" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <input type="text" name='phone' required placeholder="* phone" className="input input-bordered mr-2 ml-2 mb-2 w-full max-w-xs" />
                <select name='selection1' className="select select-bordered w-full mr-2 ml-2 mb-2 max-w-xs">
                    <option value='nokia'>Nokia</option>
                    <option value='oppo'>Oppo</option>
                    <option value='samsung'>Samsung</option>
                </select>
                <select required name='selection2' className="select select-bordered w-full mr-2 ml-2 mb-2 max-w-xs">
                    <option value='excellent'>Excellent</option>
                    <option value='fair'>Fair</option>
                    <option value='good'>Good</option>
                </select>

                <button className='btn btn-primary w-full'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;




// I am very pleased with my refurbished Galaxy s10 phone. So much added stuff as part of this Samsung phone and the reception I am getting is much better from my Galaxy Neo7 that I replaced. Great price, Fast delivery, good follow up on my order. Thank you.