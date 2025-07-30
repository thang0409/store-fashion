import HeaderSideBar from '@/components/ContentSideBar/componentsSideBar/HeaderSideBar/HeaderSideBar';
import { IoCartOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import ItemProduct from '@/components/ContentSideBar/componentsSideBar/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';

function Cart() {
    const { container, btnCart, total, price } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<IoCartOutline />} title={'Cart'} />
                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p className={price}>$199.99</p>
                </div>

                <div>
                    <Button className={btnCart} content={'VIEW CART'} />
                    <Button
                        className={btnCart}
                        content={'CHECKOUT'}
                        isPrimary={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cart;
