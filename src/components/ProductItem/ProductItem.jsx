import Button from '@/components/Button/Button';
import styles from './styles.module.scss';
import { iconProductItem } from '@/components/ProductItem/constant';
import IconItem from '@/components/ProductItem/IconItem/IconItem';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBar';
import { ToastContext } from '@/contexts/ToastProvider';
import { addToCart } from '@/apis/cartService';
import Loading from '@/components/Loading/Loading';

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
        content,
        isActiveSize,
        btnClear
    } = styles;

    // const { isShowGrid } = useContext(OurShopContext);
    const ourShop = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShop?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProduct, listProductCart } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddtoCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Vui lòng đăng nhập để thêm vào giỏ hàng');
            return;
        }

        if (sizeChoose === '') {
            toast.warning('Vui lòng chọn kích thước');
        }

        const data = {
            userId,
            productId: detail._id,
            quantity: 1,
            size: sizeChoose
        };
        setIsLoading(true);

        addToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                setIsLoading(false);
                toast.success('Add product to cart success');
                handleGetListProduct(userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('Add product to cart failed');
            });
    };

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShop?.isShowGrid);
        }
    }, [isHomePage, ourShop?.isShowGrid]);
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
                            <div
                                onClick={() => handleChooseSize(item.name)}
                                key={index}
                                className={classNames(size, {
                                    [isActiveSize]: sizeChoose === item.name
                                })}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}

                {sizeChoose && (
                    <div onClick={handleClearSize} className={btnClear}>
                        Clear
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
                    <div onClick={handleAddtoCart} className={boxBtn}>
                        <Button
                            content={isLoading ? <Loading /> : 'Add To Card'}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
