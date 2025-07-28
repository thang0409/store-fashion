import { dataInfo } from '@/components/Info/constant';
import styles from '../styles.module.scss';

function InfoCard({ title, des, icon: Icon }) {
    const { containerCard, iconStyle, containerContent, titleStyle, desStyle } =
        styles;

    return (
        <div className={containerCard}>
            <div className={iconStyle}>
                <Icon />
            </div>
            <div className={containerContent}>
                <div className={titleStyle}>{title}</div>
                <div className={desStyle}>{des}</div>
            </div>
        </div>
    );
}

export default InfoCard;
