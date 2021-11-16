import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

export default function AddProduct() {

    const [createProductData, setCreateProductData] = useState({});
    const [products,
        displayProducts,
        setDisplayProducts,
        isLoading,
        deleteProduct,
        createProduct
    ] = useProducts([]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...createProductData };
        newProduct[field] = value;
        console.log(newProduct);
        setCreateProductData(newProduct);
    };

    const handleCreateProduct = (e) => {

        e.preventDefault();
        console.log(createProductData);
        createProduct(createProductData);
    };
    return (
        <div>
            <div className=" flex  justify-center">
                <div className="flex shadow-xl  flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                        Create a new Product
                    </div>
                    <div className="p-6 ">
                        <form onSubmit={handleCreateProduct}>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input onBlur={handleOnBlur} type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name="name" placeholder="Name" />
                                </div>

                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input onBlur={handleOnBlur} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        name="image"
                                        placeholder="Image URL" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input onBlur={handleOnBlur} type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        name="description"
                                        placeholder="Description" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input onBlur={handleOnBlur} type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        name="price"
                                        placeholder="Price" />
                                </div>
                            </div>
                            <div className="flex w-full my-4">
                                <button type="submit" className="py-2 px-8  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <div className='flex justify-center'>
                                        {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                        </div> : "Add Product"}
                                    </div>
                                </button>
                            </div>
                        </form>

                    </div>
                </div >
            </div >
        </div>
    );
}
