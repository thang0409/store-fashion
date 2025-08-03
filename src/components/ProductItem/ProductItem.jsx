import { BsHandbag } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
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
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCart } from '@/utils/helpper';

function ProductItem({ src, prevSrc, name, price, detail, isHomePage = true, slide = false }) {
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
        btnClear,
        imageBox
    } = styles;

    // const { isShowGrid } = useContext(OurShopContext);
    const ourShop = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShop?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const userId = Cookies.get('userId');
    const {
        setIsOpen,
        setType,
        handleGetListProduct,
        listProductCart,
        setDetailProduct,
        detailProduct
    } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const navigate = useNavigate();

    const handleNavigate = () => {
        const path = `/product/${detail._id}`;
        navigate(path);
    };

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleShowDetailProductSidear = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(detail);
    };

    const handleAddtoCart = () => {
        handleAddProductToCart(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeChoose,
            detail._id,
            1,
            setIsLoading,
            handleGetListProduct
        );
    };

    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShop?.isShowGrid);
        }
    }, [isHomePage, ourShop?.isShowGrid]);

    useEffect(() => {
        if (slide) {
            setIsShowGrid(true);
        }
    }, [slide]);
    return (
        <div className={!isShowGrid ? container : ''}>
            <div className={boxImg}>
                <div className={imageBox} onClick={handleNavigate}>
                    <img src={src} alt='Product' />
                    <img src={prevSrc} alt='' className={showImg} />
                </div>
                <div className={showFnc}>
                    <IconItem icon={BsHandbag} />
                    <IconItem icon={FaRegHeart} />
                    <IconItem icon={TfiReload} />
                    <IconItem icon={LiaEyeSolid} onClick={handleShowDetailProductSidear} />
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
                        <Button content={isLoading ? <Loading /> : 'Add To Card'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
