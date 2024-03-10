import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [shop, setShop] = useState([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/bcfa9e5e-e5ce-4860-9128-127443bbba74')
            .then(res => setProduct(res.data));

        axios.get('https://mocki.io/v1/b0b7f718-8767-4e38-af04-a62d5e4f1d22')
            .then(res => setShop(res.data));
    }, []);

    return (
        <ProductContext.Provider value={{ product, setProduct, shop, setShop }}>
            {children}
        </ProductContext.Provider>
    );
};
