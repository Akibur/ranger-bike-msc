import React from 'react';
import ProductCard from '../../Components/Products/ProductCard/ProductCard';
import useProducts from '../../hooks/useProducts';

export default function AllBikes() {
    const [products, displayProducts, setDisplayProducts] = useProducts();

    return (
        <div>
            <div>
                <h1 className="text-center my-8 text-5xl font-bold">All Custom Bikes</h1>

                <div className="flex flex-wrap items-center justify-center">
                    {products?.length > 0 ?
                        products.map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                            >
                            </ProductCard>
                        ) : <h1>No Bikes Found </h1>
                    }
                </div>

            </div>
        </div>
    );
}
