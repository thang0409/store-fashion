import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const userId = Cookies.get('userId');

    const handleGetListProduct = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };

    useEffect(() => {
        handleGetListProduct(Cookies.get('userId'), 'cart');
    }, []);
    return (
        <SideBarContext.Provider
            value={{
                isOpen,
                setIsOpen,
                type,
                setType,
                handleGetListProduct,
                listProductCart,
                isLoading,
                setIsLoading,
                userId
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};
