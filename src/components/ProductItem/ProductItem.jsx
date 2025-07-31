import Button from '@/components/Button/Button';
import styles from './styles.module.scss';
import { iconProductItem } from '@/components/ProductItem/constant';
import IconItem from '@/components/ProductItem/IconItem/IconItem';
import classNames from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ProductItem({ src, prevSrc, name, price, detail, isHomePage = true }) {
    const {
        container,
        boxImg,
        showImg,
        showFnc,
        titleStyle,
        priceStyle,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content
    } = styles;

    const { isShowGrid } = useContext(OurShopContext);

    return (
        <div className={!isShowGrid ? container : ''}>
            <div className={boxImg}>
                <img src={src} alt='Product' />
                <img src={prevSrc} alt='' className={showImg} />
                <div className={showFnc}>
                    {iconProductItem.map((item, index) => (
                        <IconItem key={index} icon={item} />
                    ))}
                </div>
            </div>

            <div className={!isShowGrid ? content : ''}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {detail.size.map((item, index) => (
                            <div key={index} className={size}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className={classNames(titleStyle, {
                        [textCenter]: !isHomePage && isShowGrid
                    })}
                >
                    {name}
                </div>
                <div
                    className={classNames(priceStyle, {
                        [textCenter]: !isHomePage
                    })}
                >
                    ${price}
                </div>

                {!isHomePage && (
                    <div className={boxBtn}>
                        <Button content={'Add To Card'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
