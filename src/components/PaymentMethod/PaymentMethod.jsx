import styles from './styles.module.scss';
import Visa from '@/assets/icons/img/visa.jpeg';
import MasterCart from '@/assets/icons/img/master-card.jpeg';
import Paypal from '@/assets/icons/img/paypal.jpeg';
import Maestro from '@/assets/icons/img/maestro.jpeg';
import Bitcoin from '@/assets/icons/img/bitcoin.jpeg';
import America from '@/assets/icons/img/american-express.jpeg';

function PaymentMethod() {
    const srcMethod = [
        { src: Paypal },
        { src: MasterCart },
        { src: Maestro },
        { src: Bitcoin },
        { src: America },
        { src: Visa }
    ];

    const { containerMethod, titleMethod, boxMethod, imgMethod } = styles;
    return (
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
    );
}

export default PaymentMethod;
