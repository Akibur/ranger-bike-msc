import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import Modal from './Modal/Modal';



export default function ManageProducts() {
    const [products,
        displayProducts,
        setDisplayProducts,
        isLoading,
        deleteProduct
    ] = useProducts([]);
    // for modal
    const [open, setOpen] = useState(false);
    const [productId, setProductId] = useState('');
    const cancelButtonRef = useRef();

    const confirmDelete = (val) => {
        if (val) {
            const id = productId;
            deleteProduct(id);
        } else {
            return;
        }
    };

    const handleProductDelete = (e, id) => {
        setProductId(id);
        e.preventDefault();
        setOpen(true);
        // updateOrder(id, status);
    };



    return (
        <>
            {/* // Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Modal open={open} setOpen={setOpen} confirmDelete={confirmDelete}  ></Modal>
                </Dialog>
            </Transition.Root>
            <div>
                <div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Description
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Edit
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {products.map((product) => (
                                                <tr key={product._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{product.name}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">${product.price}</div>
                                                    </td>
                                                    <td className=" px-6 py-4 flex-wrap whitespace-nowrap text-sm text-gray-500">{product.description.slice(0, 60)}</td>


                                                    <td className="flex flex-col justify-start content-start px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <form onSubmit={(e) => handleProductDelete(e, product._id)}>
                                                            <button type="submit" className="py-2 mt-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>
                                                                    {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                                                    </div> : "Delete"}
                                                                </div>
                                                            </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
