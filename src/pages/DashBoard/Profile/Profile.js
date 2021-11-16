import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

export default function Profile() {
    const [signupData, setSignupData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignupData = { ...signupData };
        newSignupData[field] = value;
        console.log(newSignupData);
        setSignupData(newSignupData);
    };

    const handleSignupSubmit = e => {
        if (signupData.password !== signupData.confirm_password) {
            alert('Your password did not match');
            e.preventDefault();
            return;
        }
        console.log(signupData);
        registerUser(signupData.email, signupData.password, signupData.name, history);
        e.preventDefault();
    };
    return (
        <div className="flex justify-center">
            <div className="flex   flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Profile
                </div>

                {authError ?
                    <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4" role="alert">
                        <p className="font-bold">
                            Error
                        </p>
                        <p>
                            {authError}
                        </p>
                    </div> : null}
                <div className="p-6">
                    <form onSubmit={handleSignupSubmit}>

                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input onBlur={handleOnBlur} type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name="name" placeholder={user.displayName} />
                            </div>

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input onBlur={handleOnBlur} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name="email" placeholder={user.email} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input onBlur={handleOnBlur} type="password" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name="password" placeholder="password" />
                            </div>
                        </div>

                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-8  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <div className='flex justify-center'>
                                    {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                    </div> : "Update Profile"}
                                </div>
                            </button>
                        </div>
                    </form>

                </div>
            </div >
        </div >

    );
}
