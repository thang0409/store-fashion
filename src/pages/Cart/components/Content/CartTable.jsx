import React from 'react';
import styles from '../../styles.module.scss';

import { FaTrashAlt } from 'react-icons/fa';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import LoadingCart from '@/pages/Cart/components/LoadingCart';

const CartTable = ({ listProductCart, getData, isLoading, deleteItemCart }) => {
    const showOption = [
        {
            label: '1',
            value: '1'
        },
        {
            label: '2',
            value: '2'
        },
        {
            label: '3',
            value: '3'
        },
        {
            label: '4',
            value: '4'
        },
        {
            label: '5',
            value: '5'
        },
        {
            label: '6',
            value: '6'
        },
        {
            label: '7',
            value: '7'
        }
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        };

        getData(data);
    };
    return (
        <div className={styles.cartWrapper}>
            <table className={styles.cartTable}>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {listProductCart.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className={styles.productCell}>
                                    <img src={item.images[0]} alt={item.name} />
                                    <div className={styles.info}>
                                        <p className={styles.name}>
                                            {item.name}
                                        </p>
                                        <p className={styles.size}>
                                            Size: {item.size}
                                        </p>
                                    </div>
                                    <FaTrashAlt
                                        onClick={() =>
                                            deleteItemCart({
                                                userId: item.userId,
                                                productId: item.productId
                                            })
                                        }
                                        className={styles.trashIcon}
                                    />
                                </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    defaultValue={item.quantity}
                                    options={showOption}
                                    getValue={(e) => {
                                        getValueSelect(
                                            item.userId,
                                            item.productId,
                                            e,
                                            item.size
                                        );
                                    }}
                                    type='sort'
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}

                    {isLoading && (
                        <tr>
                            <td colSpan='5'>
                                <LoadingCart />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
