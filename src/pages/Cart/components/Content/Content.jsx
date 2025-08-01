import MainLayout from '@/components/Layout/Layout';
import styles from '../../styles.module.scss';
import CartTable from '@/pages/Cart/components/Content/CartTable';
import CartSummary from '@/pages/Cart/components/Content/CartSummary';
import Button from '@/components/Button/Button';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBar';
import { addToCart, deleteAllCart, deleteItem } from '@/apis/cartService';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Content() {
    const {
        containerContent,
        boxFooter,
        boxCoupon,
        btnAgree,
        btnDeleteAll,
        boxDelete,
        boxEmptyCart
    } = styles;

    const {
        listProductCart,
        handleGetListProduct,
        isLoading,
        setIsLoading,
        userId
    } = useContext(SideBarContext);

    const navigate = useNavigate();

    const handleReturnToShop = () => {
        navigate('/shop');
    };

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addToCart(data)
            .then((res) => {
                handleGetListProduct(data.userId, 'cart');
            })
            .catch((err) => setIsLoading(false));
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);

        deleteItem(data)
            .then((res) => handleGetListProduct(data.userId, 'cart'))
            .catch((err) => setIsLoading(false));
    };

    const handleDeleteAllCart = (data) => {
        setIsLoading(true);

        deleteAllCart({ userId })
            .then((res) => handleGetListProduct(userId, 'cart'))
            .catch((err) => setIsLoading(false));
    };

    return (
        <MainLayout>
            <>
                {listProductCart.length > 0 && userId ? (
                    <div className={containerContent}>
                        <div>
                            <CartTable
                                listProductCart={listProductCart}
                                getData={handleReplaceQuantity}
                                isLoading={isLoading}
                                deleteItemCart={handleDeleteItemCart}
                            />

                            <div className={boxFooter}>
                                <div className={boxCoupon}>
                                    <input
                                        type='text'
                                        placeholder='Coupon code'
                                    />
                                    <Button
                                        className={btnAgree}
                                        content={'OK'}
                                        isPrimary={false}
                                    />
                                </div>

                                <div className={boxDelete}>
                                    <Button
                                        className={btnDeleteAll}
                                        content={
                                            <div
                                                style={{
                                                    display: 'flex'
                                                }}
                                            >
                                                <FaTrashAlt
                                                    style={{
                                                        marginRight: '10px'
                                                    }}
                                                />
                                                CLEAR SHOPPING CART
                                            </div>
                                        }
                                        isPrimary={false}
                                        onClick={() => handleDeleteAllCart()}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <CartSummary />
                        </div>
                    </div>
                ) : (
                    <div className={boxEmptyCart}>
                        <div>
                            <FiShoppingCart style={{ fontSize: '40px' }} />
                        </div>

                        <div>Your shopping cart is empty</div>
                        <div
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            We invite you to get acquainted with an assortment
                            of our shop. Surely you can find something for
                            yourself!
                        </div>

                        <div>
                            <Button
                                onClick={handleReturnToShop}
                                content={'RETURN TO SHOP'}
                            />
                        </div>
                    </div>
                )}
            </>
        </MainLayout>
    );
}

export default Content;
