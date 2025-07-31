import { getProduct } from '@/apis/productService';
import { createContext, useEffect, useState } from 'react';
import { Logger } from 'sass';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGird] = useState(true);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const handleLoadMoreProduct = () => {
        const query = {
            sortType: sortId,
            page: +page + 1,
            limit: showId
        };

        setIsLoadMore(true);
        getProduct(query)
            .then((res) => {
                setProducts((prev) => {
                    return [...prev, ...res.contents];
                });
                setPage(+res.page);
                setTotal(res.total);
                setIsLoadMore(false);
            })
            .catch((err) => {
                setIsLoadMore(false);
            });
    };

    const sortOption = [
        {
            label: 'Default sorting',
            value: '0'
        },
        {
            label: 'Sort by popularity',
            value: '1'
        },
        {
            label: 'Sort by average rating',
            value: '2'
        },
        {
            label: 'Sort by latest',
            value: '3'
        },
        {
            label: 'Sort by price: low to hight',
            value: '4'
        },
        {
            label: 'Sort by price: hight to low',
            value: '5'
        }
    ];

    const showOption = [
        {
            label: '8',
            value: '8'
        },
        {
            label: '12',
            value: '12'
        },
        {
            label: 'All',
            value: 'all'
        }
    ];

    const values = {
        sortOption,
        showOption,
        setSortId,
        setShowId,
        setIsShowGird,
        products,
        isShowGrid,
        isLoading,
        handleLoadMoreProduct,
        total,
        isLoadMore
    };

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };

        setIsLoading(true);

        const data = getProduct(query)
            .then((res) => {
                setProducts(res.contents);
                setTotal(res.total);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, [sortId, showId]);

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    );
};
