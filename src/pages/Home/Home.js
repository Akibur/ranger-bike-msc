import React from 'react';
import Banner from './Banner/Banner';
import Products from '../../Components/Products/Products';
import Reviews from '../../Components/Reviews/Reviews';
import HomeAbout from './HomeAbout/HomeAbout';

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <h1 className="text-center my-8 text-5xl font-bold">Custom Bikes</h1>
            <Products></Products>
            <div className="text-center my-8 text-5xl font-bold"></div>
            <HomeAbout></HomeAbout>
            <h1 className="text-center my-8 text-5xl font-bold">Reviews</h1>
            <Reviews></Reviews>
        </>

    );
}
