## Documentation for Bike Ecommerce site

# Overview

The bike eCommerce store is an eCommerce platform merchants can use to display and sell their bikes online. They will be able to upload information about their bikes and customers will be able to buy the bikes using the platform.
The E-commerce store will have two user classes

- Customers
- Admin

The customer will be able to browse through the different bikes, login/register and order a bike that he likes
The admin will be able to login, manage the different product information, view and manage the orders and create other admins accounts.

The system will allow users to quickly and easily view the technical specifications of each bike and make a purchase from the comforts of their homes. They don’t need to go to a showroom to view and buy the bikes. This saves the customer time and at the same time, the platform’s owner can serve their customers 24/7.
The Ecommerce platform will have a backend API and a React-based frontend which will consume the API and provide the functionality to the software. A no SQL database called mongoDB will be used as the database.

# Features Documentation

# All Bikes Page

This page allows the user to view all the bikes available in the store

![alt text](https://i.ibb.co/4VNBfqh/all-bikes.png)

# Home Page

In the home page the customer will view info about the company and view some of the best bikes displayed in the home page.

![alt text](https://i.ibb.co/fDBnXth/home-page.png)

# Registration Page

The customer has to register before he can order a bike. THe customer will register using his name email and password

![alt text](https://i.ibb.co/LR2Jhdf/Untitled.png)

# Login Page

In the login page the customer will be able to login with hi email/ password or login using one click social accounts. The code for the react auth component is given below

```javascript
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import TemporaryAlert from "../../Components/UI/TemporaryAlert/TemporaryAlert";

export default function SignIn() {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="my-8 flex   justify-center">
      <div className="flex shadow-xl  flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>

        {authError ? (
          <TemporaryAlert delay={5000}>
            <div
              className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4"
              role="alert"
            >
              <p className="font-bold">Error</p>
              <p>{authError}</p>
            </div>
          </TemporaryAlert>
        ) : null}

        {/* google auth */}
        <div className="flex gap-4 item-center">
          <button
            disable
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
            <p>Facebook</p>
            <br />
            <p className="block text-xs text-center ">(Comming Soon)</p>
          </button>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Google
          </button>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Your email"
                  name="email"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">* Email is required</span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Your password"
                  name="password"
                />
              </div>
              {errors.password && (
                <span className="text-red-500">* Password is required</span>
              )}
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-8  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <div className="flex justify-center">
                  {isLoading ? (
                    <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"></div>
                  ) : (
                    "Sign In"
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className="flex font-thin items-center justify-center mt-6">
          <p>Dont Have an Account?</p>

          <NavLink
            to="/signup"
            className="inline-flex items-center  font-extrabold text-center text-red-700 hover:text-red-800 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">Sign Up</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
```

![alt text](https://i.ibb.co/sKvssqg/Login-Page.png)

# Client Side Tech

The client side made using React and tailwind CSS

# Features

## Customers

- Customers can Login
- Customers can Register
- Customers can Make orders
- Customers can View their Orders
- Customers can Cancel their order
- Customers can Give reviews

## Admin

- Admin Can Register
- Admin Can Manage Products
- Admin Can Add Products
- Admin Can make a user an admin
- Admin Can manage Orders
- Admin Can view profile

You can use the [editor on GitHub](https://github.com/Akibur/ranger-bike-msc/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1

## Header 2

### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Akibur/ranger-bike-msc/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
