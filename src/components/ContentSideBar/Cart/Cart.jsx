import HeaderSideBar from '@/components/ContentSideBar/componentsSideBar/HeaderSideBar/HeaderSideBar';
import { IoCartOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import ItemProduct from '@/components/ContentSideBar/componentsSideBar/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBar';
import Loading from '@/components/Loading/Loading';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        products,
        btnCart,
        total,
        price,
        containerListProductCart,
        overlayLoading,
        isEmpty,
        boxEmpty
    } = styles;

    const navigate = useNavigate();

    const { isLoading, listProductCart, setIsOpen } =
        useContext(SideBarContext);

    const totalPrice = listProductCart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const handleNavigateToCart = () => {
        setIsOpen(false);

        navigate('/cart');
    };
    return (
        <div
            className={classNames(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar icon={<IoCartOutline />} title={'Cart'} />

            {listProductCart.length ? (
                <div>
                    <div className={products}>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            listProductCart.map((item, index) => (
                                <ItemProduct
                                    key={index}
                                    src={item.images[0]}
                                    titleApi={item.name}
                                    quantity={item.quantity}
                                    priceApi={item.price}
                                    sizeApi={item.size}
                                    sku={item.sku}
                                    productId={item.productId}
                                    userId={item.userId}
                                />
                            ))
                        )}
                    </div>

                    <div>
                        <div className={total}>
                            <p>SUBTOTAL:</p>
                            <p className={price}>${totalPrice.toFixed(2, 0)}</p>
                        </div>

                        <div>
                            <Button
                                onClick={handleNavigateToCart}
                                className={btnCart}
                                content={'VIEW CART'}
                            />
                            <Button
                                className={btnCart}
                                content={'CHECKOUT'}
                                isPrimary={false}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div
                        style={{
                            marginBottom: '20px'
                        }}
                    >
                        No product in the cart.
                    </div>
                    <div>
                        <Button
                            className={btnCart}
                            content={'RETURN TO SHOP'}
                            isPrimary={false}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
