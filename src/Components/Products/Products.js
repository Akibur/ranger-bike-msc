import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import ProductCard from './ProductCard/ProductCard';
import { getProducts } from '../../store/products-slice';

export default function Products() {
    const dispatch = useDispatch();
    const { products, loading, productError } = useSelector((state) => state.products);
    console.log(productError);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
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
    );
}
