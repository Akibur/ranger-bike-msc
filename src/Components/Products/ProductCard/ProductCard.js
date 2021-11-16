import React from 'react';
import { useHistory } from 'react-router';

export default function ProductCard(props) {
    const { _id, name, price, description, image } = props.product;


    const history = useHistory();


    const handleCheckout = (_id) => {
        history.push(`/checkout/${_id}`);
    };

    return (
        <div>

            <div className="w-80 flex justify-center items-center">
                <div className="w-full p-4">
                    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                        <div className="prod-img">
                            <img src={image} alt={name} />
                        </div>
                        <div className="prod-title">
                            <p className="text-2xl text-center my-3 uppercase text-red-700 font-bold">
                                {name}
                            </p>
                            <p className=" text-center text-sm text-gray-400">
                                {description}
                            </p>
                        </div>
                        <div className="prod-info grid gap-10">
                            <div className="flex flex-col  justify-between items-center text-gray-900">
                                <p className="font-bold text-xl py-4">
                                    {price} $
                                </p>
                                <button onClick={() => handleCheckout(_id)} className="px-6 py-2 transition ease-in duration-100 uppercase rounded-full hover:bg-red-700 hover:text-white border-2 text-red-700 border-red-700 focus:outline-none">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
