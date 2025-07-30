import { dataMenu } from '@/components/Footer/constant';
import styles from './styles.module.scss';
import Logo from '@/assets/icons/img/marseille-logo.webp';
import Checkout from '@/assets/icons/img/checkout.webp';

function Footer() {
    const { container, navMenu, navItem } = styles;
    return (
        <div className={container}>
            <div>
                <img src={Logo} alt='' width={160} height={55} />
            </div>
            <div className={navMenu}>
                {dataMenu.map((item, index) => (
                    <div className={navItem} key={index}>
                        {item.content}
                    </div>
                ))}
            </div>

            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
                <img src={Checkout} alt='' />
            </div>

            <div>
                Copyright © 2024 XStore theme. Created by 8theme – WordPress
                WooCommerce themes.
            </div>
        </div>
    );
}

export default Footer;
