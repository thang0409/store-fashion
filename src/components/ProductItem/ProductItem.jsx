import styles from './styles.module.scss';
import { iconProductItem } from '@/components/ProductItem/constant';
import IconItem from '@/components/ProductItem/IconItem/IconItem';

function ProductItem({ src, prevSrc, name, price }) {
    const { boxImg, showImg, showFnc, titleStyle, priceStyle } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='Product' />
                <img src={prevSrc} alt='' className={showImg} />
                <div className={showFnc}>
                    {iconProductItem.map((item, index) => (
                        <IconItem key={index} icon={item} />
                    ))}
                </div>
            </div>

            <div className={titleStyle}>{name}</div>
            <div className={priceStyle}>${price}</div>
        </div>
    );
}

export default ProductItem;
