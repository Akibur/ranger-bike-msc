import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch('https://sheltered-crag-02874.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            }).catch((err) => {
            });
    }, [isLoading]);

    const deleteProduct = (id) => {
        setIsLoading(true);
        fetch(`https://sheltered-crag-02874.herokuapp.com/products/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };

    const createProduct = (product) => {
        setIsLoading(true);
        fetch(`https://sheltered-crag-02874.herokuapp.com/products/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
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
        deleteProduct,
        createProduct
    ];
};

export default useProducts;