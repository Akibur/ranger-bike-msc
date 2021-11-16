import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard/ProductCard';


export default function Products() {
    const [products, displayProducts, setDisplayProducts] = useProducts();

    console.log("in products", products);
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center">
                {products?.length > 0 ?
                    products.slice(0, 6).map(product =>
                        <ProductCard
                            key={product._id}
                            product={product}
                        >
                        </ProductCard>
                    ) : <h1>No Bikes Found </h1>
                }
            </div>

        </div>
    );
}
