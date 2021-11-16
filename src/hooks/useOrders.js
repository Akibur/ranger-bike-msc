import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            }).catch((err) => {
                console.log(err);
            });
    }, [isLoading]);

    const updateOrder = (id, status) => {
        setIsLoading(true);
        const order = { status: status };
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };

    return [
        orders,
        setOrders,
        isLoading,
        updateOrder
    ];
};

export default useOrders;