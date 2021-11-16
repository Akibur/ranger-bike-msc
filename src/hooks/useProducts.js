import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
                setDisplayProducts(data);
            }).catch((err) => {
                console.log(err);
            });
    }, [isLoading]);

    const deleteProduct = (id) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };
    return [
        products,
        displayProducts,
        setDisplayProducts,
        isLoading,
        deleteProduct
    ];
};

export default useProducts;