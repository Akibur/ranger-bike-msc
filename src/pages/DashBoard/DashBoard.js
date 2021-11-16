import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../utils/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import AllOrders from './AllOrders/AllOrders';
import DashBoardHome from './DashBoardHome/DashBoardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Profile from './Profile/Profile';

export default function Dassboard() {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    console.log("Is Admin", admin);

    const adminNavlinks = (<>
        <NavLink
            to={`${url}/makeAdmin`}
            activeClassName="w-full font-thin uppercase text-red-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-red-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Make Admin
            </span>
        </NavLink>

        <NavLink
            to={`${url}/allOrders`}
            activeClassName="w-full font-thin uppercase text-red-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-red-500" href="#">
            <span className="mx-4 text-sm font-normal">
                All Orders
            </span>
        </NavLink>

        <NavLink
            to={`${url}/addProduct`}
            activeClassName="w-full font-thin uppercase text-red-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-red-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Add Product
            </span>
        </NavLink>
        <NavLink
            to={`${url}/manageProducts`}
            activeClassName="w-full font-thin uppercase text-red-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-red-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Manage Products
            </span>
        </NavLink>
    </>
    );

    const userNavLinks = (
        <NavLink
            to={`${url}/myOrders`}
            activeClassName="w-full font-thin uppercase text-red-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-red-500" href="#">
            <span className="mx-4 text-sm font-normal">
                My Orders
            </span>
        </NavLink>
    );

    return (
        <div>
            <main className="bg-gray-100  overflow-hidden relative">
                <div className="flex items-start  ">
                    <div className="h-screen hidden lg:block    shadow-lg relative w-60">
                        <div className="bg-white h-full   ">
                            <nav className="">
                                <div>
                                    <NavLink
                                        activeClassName="w-full font-thin uppercase text-red-500 flex items-center     transition-colors duration-200 justify-start bg-gradient-to-r from-white to-red-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-red-500"
                                        exact to={`${url}`}
                                        className="w-full font-thin uppercase text-gray-500  flex items-center p-4   transition-colors duration-200 justify-start hover:text-red-500" href="#">
                                        <span className="mx-4 text-sm font-normal">
                                            Profile
                                        </span>
                                    </NavLink>
                                    {admin ? adminNavlinks : userNavLinks}
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="container m-4 p-4">
                        <Switch>
                            <Route exact path={path}>
                                <Profile></Profile>
                            </Route>
                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/allOrders`}>
                                <AllOrders></AllOrders>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </main>
        </div>
    );
}
