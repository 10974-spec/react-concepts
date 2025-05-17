import { use, useEffect, useState } from "react";

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json();

            if (result.products && result.products.length ) {
                setProducts(result.products);
                setLoading(false);
            }
               

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    if (loading) {
        return <div className="container">Loading...</div>
    }

    return <div className="container"></div>
}