import React from 'react';

export default function OrderConfirmed() {
    return (

        <div className="bg-white dark:bg-gray-800 ">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Your Order Has been Placed
                    </span>
                    <h4 className="md:text-2xl font-extrabold text-black dark:text-white sm:text-xl" >
                        <span className="block text-red-700">
                            We will get back to you soon.
                        </span>
                    </h4>

                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-6 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Browes Bikes
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
