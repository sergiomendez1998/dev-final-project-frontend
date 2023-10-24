import { useContext } from 'react';
import { SaleContext } from '../context/SaleContext';

export const useSale = () => {
  const {
    cart,
    addProduct,
    clearCart,
    removeProduct,
    getTotal,
    open,
    setOpen,
  } = useContext(SaleContext);


  return {
    cart,
    addProduct,
    clearCart,
    removeProduct,
    getTotal,
    open,
    setOpen,
  };
};
