import { node } from 'prop-types';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

// we define what our context looks like
const saleContextProps = {
    cart: [],
    addProduct: () => { },
    removeProduct: () => { },
    clearCart: () => { },
    modifyProduct: () => { },
    getTotal: () => { },
};

// const product = {
//     id: 0,
//     name: '',
//     description: 0,
//     price: 0,
// }

export const SaleContext = createContext(saleContextProps);

export const SaleProvider = ({ children }) => {
    const { get, set } = useLocalStorage('cart');
    const [cart, setCart] = useState(get() ?? []);

    const addProduct = (item) => {
        const newItem = { ...item, uuid: uuidv4() };
        setCart([...cart, newItem]);
        set([...cart, item]);
        toast.success('Producto agregado al pedido');
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    };

    const removeProduct = (product) => {
        const newCart = cart.filter((item) => item.uuid !== product.uuid);
        setCart(newCart);
        set(newCart);
    };

    const clearCart = () => {
        setCart([]);
        set([]);
    };

    return (
        <SaleContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
                clearCart,
                getTotal,
            }}
        >
            {children}
        </SaleContext.Provider>
    );
};

SaleProvider.propTypes = {
    children: node.isRequired,
};
