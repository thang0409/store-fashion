import Button from '@/components/Button/Button';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import Visa from '@/assets/icons/img/visa.jpeg';
import MasterCart from '@/assets/icons/img/master-card.jpeg';
import Paypal from '@/assets/icons/img/paypal.jpeg';
import Maestro from '@/assets/icons/img/maestro.jpeg';
import Bitcoin from '@/assets/icons/img/bitcoin.jpeg';
import America from '@/assets/icons/img/american-express.jpeg';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBar';
import { StepperContext } from '@/contexts/StepperProvider';

function CartSummary() {
    const {
        containerSummary,
        titleSummary,
        boxTotal,
        btnTotal,
        priceSubTotal,
        subTotal,
        containerMethod,
        titleMethod,
        imgMethod,
        boxMethod
    } = styles;

    const { setCurrentStep } = useContext(StepperContext);

    const srcMethod = [
        { src: Paypal },
        { src: MasterCart },
        { src: Maestro },
        { src: Bitcoin },
        { src: America },
        { src: Visa }
    ];

    const { listProductCart, handleGetListProduct, isLoading, setIsLoading, userId } =
        useContext(SideBarContext);

    const handleProcessCheckOut = () => {
        setCurrentStep(2);
    };

    const totalPrice = listProductCart
        .reduce((sum, item) => {
            const result = sum + item.price * item.quantity;
            return result;
        }, 0)
        .toFixed(2);
    return (
        <>
            <div className={containerSummary}>
                <div className={titleSummary}>Cart Total</div>
                <div className={classNames(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={priceSubTotal}>${totalPrice}</div>
                </div>

                <div className={classNames(boxTotal)}>
                    <div>Total</div>
                    <div>${totalPrice}</div>
                </div>

                <div>
                    <Button
                        className={btnTotal}
                        content={'PROCEED TO CHECKOUT'}
                        onClick={handleProcessCheckOut}
                    />
                    <Button className={btnTotal} content={'CONTINUE SHOPPING'} isPrimary={false} />
                </div>
            </div>

            <div className={containerMethod}>
                <div className={titleMethod}>
                    Guaranteed <span>safe</span> checkout
                </div>

                <div className={boxMethod}>
                    {srcMethod.map((item, index) => (
                        <div key={index} className={imgMethod}>
                            <img src={item.src} alt='' />
                        </div>
                    ))}
                </div>
            </div>

            <div
                style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: '14px',
                    color: '#555'
                }}
            >
                Your Payment is 100% Secure
            </div>
        </>
    );
}

export default CartSummary;
