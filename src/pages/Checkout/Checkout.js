import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Spinner from '../../Components/UI/Spinner/Spinner';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../store/orders-slice';


import TemporaryAlert from "../../Components/UI/TemporaryAlert/TemporaryAlert";



export default function Checkout() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");
    const [productLoading, setProductLoading] = useState(false);

    const phonedRef = useRef();
    const nameRef = useRef();
    const creditCardRef = useRef();
    const dispatch = useDispatch();
    const { loading, orderError, alert } = useSelector((state) => state.orders);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        setProductLoading(true);
        fetch(`https://sheltered-crag-02874.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setProductLoading(false);
            }).catch((err) => {
                setProductLoading(false);
                console.log(err);

            });
    }, [id]);

    const onSubmit = data => {

        const order = {
            user: {
                uid: user.uid,
                name: data.name,
                email: user.email,
                phone: data.phone,
                card: data.card,
            },
            product: product,
            status: "Placed"
        };
        console.log(order);
        dispatch(createOrder(order));
        if (!loading && !orderError.isError) {
            history.replace('/orderConfirmed');
        }

    };

    // const handleCheckout = (e) => {
    //     e.preventDefault();
    //     const order = {
    //         user: {
    //             uid: user.uid,
    //             name: nameRef.current.value,
    //             email: user.email,
    //             phone: phonedRef.current.value,
    //             card: creditCardRef.current.value,
    //         },
    //         product: product,
    //         status: "Placed"
    //     };

    //     try {
    //         setError('');
    //         setLoading(true);
    //         fetch('https://sheltered-crag-02874.herokuapp.com/orders', {
    //             method: 'POST',
    //             cache: 'no-cache',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(order) // body data type must match "Content-Type" header
    //         }).then((res) => {
    //             setLoading(false);
    //             history.replace('/orderConfirmed');
    //         });

    //     } catch (error) {
    //         setError(error);
    //         setLoading(false);
    //     }
    // };


    return (
        <div className="my-8 flex   justify-center">
            <div className="flex flex-col w-full max-w-md px-4  pb-8 bg-white rounded-lg  dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center  text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    <h1 className="font-bold md:text-5xl sm:text-2xl">Checkout</h1>
                </div>

                {productLoading ?
                    <Spinner></Spinner> :
                    <div className="w-100 flex justify-center items-center">
                        <div className="w-full p-2">
                            <div className="card flex flex-col justify-center p-4 bg-white rounded-lg  ">
                                <div className="prod-img">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="prod-title">
                                    <p className="text-2xl text-center my-3 uppercase text-red-700 font-bold">
                                        {product.name}
                                    </p>
                                    <p className=" text-center text-sm text-gray-400">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="prod-info grid gap-5">
                                    <div className="flex flex-col  justify-between items-center text-gray-900">
                                        <p className="font-bold text-xl py-4">
                                            {product.price} $
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {error ?
                    <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4" role="alert">
                        <p className="font-bold">
                            Error
                        </p>
                        <p>
                            {error}
                        </p>
                    </div> : null}

                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">

                                <input {...register("name", { required: true })} type="text"
                                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Name"
                                    name="name"
                                />

                            </div>
                            {errors.name && <span className="text-red-500">* Name is required</span>}

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input
                                    {...register("phone", { required: true })}
                                    type="number"
                                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Phone"
                                    name="phone"
                                />
                            </div>
                            {errors.phone && <span className="text-red-500">* Phone is required</span>}


                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input
                                    {...register("card", { required: true })}
                                    type="text"
                                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" placeholder="Credit Card Number"
                                    name="card"
                                />

                            </div>
                            {errors.card && <span className="text-red-500">* Card is required</span>}

                        </div>
                        <div className="flex w-full">
                            <button type="submit" className="py-2 px-8  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <div className='flex justify-center'>
                                    {loading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                    </div> : "Place Order"}
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
