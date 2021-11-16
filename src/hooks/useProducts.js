import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);


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
    }, []);

    return [
        products,
        displayProducts,
        setDisplayProducts
    ];
};

export default useProducts;