import React from 'react';
import ProductCard from '../../Components/Products/ProductCard/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { getProducts } from '../../store/products-slice';


export default function AllBikes() {

    const dispatch = useDispatch();

    const { products, loading, productError } = useSelector((state) => state.products);

    console.log(productError);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <div>
                <h1 className="text-center my-8 text-5xl font-bold">All Custom Bikes</h1>

                <div className="flex flex-wrap items-center justify-center">
                    {!loading ?
                        products.slice(0, 6).map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                            >
                            </ProductCard>
                        ) : <Spinner></Spinner>
                    }
                    {
                        productError?.isError && <h1>No bikes found Something went wrong</h1>
                    }
                </div>

            </div>
        </div>
    );
}
