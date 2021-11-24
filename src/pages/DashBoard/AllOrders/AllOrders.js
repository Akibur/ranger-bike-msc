import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import { getAllOrders, updateOrder } from '../../../store/orders-slice';

export default function AllOrders() {
    const dispatch = useDispatch();
    const { orders, statusUpdateLoading, loading, orderError, alert } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    const [status, setStatus] = useState("");
    const handleStatusUpdate = (e, id) => {
        e.preventDefault();
        const update = { id: id, status: status };
        dispatch(updateOrder(update));
    };

    const onStatusChange = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    };

    return (
        <div>
            <div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                {loading ?
                                    <Spinner />
                                    : (<table className=" min-w-full divide-y divide-gray-200">
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
                                                    Contact
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Product Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
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
                                            {orders.length > 1 ? (orders.map((order) => (
                                                <tr key={order._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{order.user.name}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{order.user.email}</div>
                                                        <div className="text-sm text-gray-500">{order.user.phone}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={"px-2 inline-flex text-xs leading-5 font-semibold rounded-full " + (
                                                            order.status == "placed" ? "bg-blue-100 text-blue-800" :
                                                                order.status == "dispached" ? "bg-yellow-100 text-yellow-800" :
                                                                    order.status == "completed" ? "bg-green-100 text-green-800" :
                                                                        "bg-red-100 text-red-800"
                                                        )}>
                                                            {order.status}
                                                        </span>
                                                    </td>

                                                    <td className="flex flex-col justify-start content-start px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <form onSubmit={(e) => handleStatusUpdate(e, order._id)}>
                                                            <select onChange={(e) => onStatusChange(e)} className=" w-full block w-30 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="status">
                                                                <option value={order.status}>
                                                                    Select an option
                                                                </option>
                                                                <option value="placed">
                                                                    Placed
                                                                </option>
                                                                <option value="dispached">
                                                                    Dispached
                                                                </option>
                                                                <option value="cancelled">
                                                                    Cancelled
                                                                </option>

                                                            </select>
                                                            <button type="submit" className="py-2 mt-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-sm  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>
                                                                    {statusUpdateLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                                                    </div> : "Update Status"}
                                                                </div>
                                                            </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            ))) : <h1 className="w-full text-center">No Orders Made</h1>}
                                        </tbody>
                                    </table>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
