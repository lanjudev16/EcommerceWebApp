import { createContext,  useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const authInfo = {
        product,
        setProduct
    }
    return (
        <CartContext.Provider value={authInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;