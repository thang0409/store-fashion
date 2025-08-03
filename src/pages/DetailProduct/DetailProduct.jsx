import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import styles from './styles.module.scss';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import { FiShoppingCart } from 'react-icons/fi';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import Button from '@/components/Button/Button';
import ReactImageMagnifier from 'simple-image-magnifier/react';

import PaymentMethod from '@/components/PaymentMethod/PaymentMethod';
import AccordionMenu from '@/components/AccordionMenu/AccordionMenu';
import { useContext, useEffect, useState } from 'react';
import InfomationProduct from '@/pages/DetailProduct/components/Infomation';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import Footer from '@/components/Footer/Footer';
import SliderCommon from '@/components/Slider/SliderCommon';
import classNames from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productService';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';
import LoadingCart from '@/pages/Cart/components/LoadingCart';
import { handleAddProductToCart } from '@/utils/helpper';
import { SideBarContext } from '@/contexts/SideBar';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';
import { addToCart } from '@/apis/cartService';

function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imgBox,
        boxContent,
        priceStyle,
        des,
        boxSize,
        size,
        boxAddtoCart,
        boxCount,
        countBtn,
        count,
        boxAddBtn,
        addBtn,
        boxOr,
        line,
        or,
        fnBox,
        info,
        sectionSlider,
        activeSize,
        btnDisable,
        loading,
        emptyData
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState([]);
    const [realted, setRelated] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const userId = Cookies.get('userId');

    const { setIsOpen, setType, handleGetListProduct } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const dataAccodion = [
        {
            id: 1,
            title: 'ADDITIONAL INFOMATION',
            content: <InfomationProduct />
        },
        {
            id: 2,
            title: 'REVIEWS (0)',
            content: <ReviewProduct />
        }
    ];

    const param = useParams();

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    };

    const handleShowMenu = (id) => {
        setMenuSelected(id);
    };

    const handleSetQuantity = (type) => {
        if (type === 'prev') {
            quantity === 1 ? setQuantity(1) : setQuantity((prev) => (prev = prev - 1));
        }

        if (type === 'next') {
            setQuantity((prev) => (prev = prev + 1));
        }
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);
            setData(data);
            setIsLoading(false);
        } catch (error) {
            setData([]);
            setIsLoading(false);
        }
    };

    const fetchDataRelated = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(id);
            setRelated(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    const addProductToCart = () => {
        handleAddProductToCart(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoading,
            handleGetListProduct
        );
    };

    const handleByNow = () => {
        const data = {
            userId,
            productId: param.id,
            quantity,
            size: sizeSelected
        };
        setIsLoading(true);
        addToCart(data)
            .then((res) => {
                setIsLoading(false);
                toast.success('Add product to cart success');
                navigate('/cart');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('Add product to cart failed');
            });
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelated(param.id);
        }
    }, [param]);

    return (
        <div>
            <Header />

            <div>
                {!isLoading ? (
                    <div className={container}>
                        <MainLayout>
                            <div className={navigateSection}>
                                <div>Home &gt; Men</div>
                                <div> {'<'} Return to previous page</div>
                            </div>

                            <div className={contentSection}>
                                {!isLoading ? (
                                    <>
                                        {data.length === 0 ? (
                                            <div className={emptyData}>
                                                <p>No result</p>
                                                <Button
                                                    content={'Return to shop'}
                                                    onClick={() => handleNavigate('/shop')}
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <div className={imgBox}>
                                                    {Array.isArray(data?.images) &&
                                                        data.images.map((src, index) => (
                                                            <ReactImageMagnifier
                                                                key={index}
                                                                srcPreview={src}
                                                                srcOriginal={src}
                                                                width={295}
                                                                height={350}
                                                                objectFit='cover'
                                                            />
                                                        ))}
                                                </div>

                                                <div className={boxContent}>
                                                    <h1>{data.name}</h1>
                                                    <p className={priceStyle}>${data.price}</p>
                                                    <p className={des}>{data?.description}</p>
                                                    <p>Size: {sizeSelected}</p>
                                                    <div className={boxSize}>
                                                        {Array.isArray(data?.size) &&
                                                            data.size.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={classNames(size, {
                                                                        [activeSize]:
                                                                            sizeSelected ===
                                                                            item.name
                                                                    })}
                                                                    onClick={() =>
                                                                        handleSelectedSize(
                                                                            item.name
                                                                        )
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            ))}
                                                    </div>
                                                    {sizeSelected && (
                                                        <p onClick={() => setSizeSelected('')}>
                                                            Clear
                                                        </p>
                                                    )}
                                                    <div className={boxAddtoCart}>
                                                        <div className={boxCount}>
                                                            <div
                                                                onClick={() =>
                                                                    handleSetQuantity('prev')
                                                                }
                                                                className={countBtn}
                                                            >
                                                                -
                                                            </div>
                                                            <div className={count}>{quantity}</div>
                                                            <div
                                                                onClick={() =>
                                                                    handleSetQuantity('next')
                                                                }
                                                                className={countBtn}
                                                            >
                                                                +
                                                            </div>
                                                        </div>
                                                        <div className={boxAddBtn}>
                                                            <Button
                                                                className={classNames(addBtn, {
                                                                    [btnDisable]: !sizeSelected
                                                                })}
                                                                onClick={addProductToCart}
                                                                content={
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            justifyContent:
                                                                                'center',
                                                                            alignItems: 'center',
                                                                            gap: '10px'
                                                                        }}
                                                                    >
                                                                        <FiShoppingCart />
                                                                        Add to cart
                                                                    </div>
                                                                }
                                                            />
                                                        </div>
                                                        <div className={boxOr}>
                                                            <div className={line}></div>
                                                            <div className={or}>Or</div>
                                                            <div className={line}></div>
                                                        </div>
                                                        <div className={boxAddBtn}>
                                                            <Button
                                                                className={classNames(addBtn, {
                                                                    [btnDisable]: !sizeSelected
                                                                })}
                                                                onClick={handleByNow}
                                                                content={
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            justifyContent:
                                                                                'center',
                                                                            alignItems: 'center',
                                                                            gap: '10px'
                                                                        }}
                                                                    >
                                                                        <FiShoppingCart />
                                                                        BUY NOW
                                                                    </div>
                                                                }
                                                            />
                                                        </div>
                                                        <div className={fnBox}>
                                                            <div>
                                                                <FaRegHeart />
                                                            </div>
                                                            <div>
                                                                <TfiReload />
                                                            </div>
                                                        </div>
                                                        <PaymentMethod />
                                                        <div className={info}>
                                                            <div>
                                                                Brand: <span> Brand 03</span>{' '}
                                                            </div>
                                                            <div>
                                                                SKU: <span> 12345</span>{' '}
                                                            </div>
                                                            <div>
                                                                Category: <span> Men</span>{' '}
                                                            </div>
                                                        </div>
                                                        {dataAccodion.map((item, index) => (
                                                            <AccordionMenu
                                                                key={index}
                                                                titleMenu={item.title}
                                                                content={item.content}
                                                                onClick={() =>
                                                                    handleShowMenu(item.id)
                                                                }
                                                                isSelected={
                                                                    menuSelected === item.id
                                                                }
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <LoadingCart />
                                )}
                            </div>
                            <div>
                                <h2>Related products</h2>
                                <SliderCommon
                                    data={realted}
                                    isProductItem
                                    className={sectionSlider}
                                    slideToShow={4}
                                />
                            </div>
                        </MainLayout>
                    </div>
                ) : (
                    <LoadingCart />
                )}
            </div>

            <Footer />
        </div>
    );
}

export default DetailProduct;
