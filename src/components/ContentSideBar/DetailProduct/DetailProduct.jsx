import { SideBarContext } from '@/contexts/SideBar';
import { useContext } from 'react';

import styles from './styles.module.scss';
import SliderCommon from '@/components/Slider/SliderCommon';
import Button from '@/components/Button/Button';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import { FiShoppingCart } from 'react-icons/fi';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function DetailProduct() {
    const showOption = [
        {
            label: '1',
            value: '1'
        },
        {
            label: '2',
            value: '2'
        },
        {
            label: '3',
            value: '3'
        },
        {
            label: '4',
            value: '4'
        },
        {
            label: '5',
            value: '5'
        },
        {
            label: '6',
            value: '6'
        },
        {
            label: '7',
            value: '7'
        }
    ];
    const {
        container,
        title,
        priceStyle,
        des,
        boxSize,
        size,
        boxAddtoCart,
        boxOr,
        line,
        or,
        selectBtn,
        boxAddOther,
        subBox
    } = styles;
    const { detailProduct } = useContext(SideBarContext);

    return (
        <div className={container}>
            <SliderCommon s data={detailProduct.images} />
            <div className={title}>{detailProduct.name}</div>
            <div className={priceStyle}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div>Size:</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div key={index}>
                        <Button
                            className={size}
                            content={item.name}
                            isPrimary={false}
                        />
                    </div>
                ))}
            </div>

            <div className={boxAddtoCart}>
                <SelectBox options={showOption} />

                <div>
                    <Button
                        content={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
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
            </div>

            <div className={boxOr}>
                <div className={line}></div>
                <div className={or}>Or</div>
                <div className={line}></div>
            </div>

            <div
                style={{
                    width: '100%',
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Button
                    className={selectBtn}
                    content={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <FiShoppingCart />
                            SELECT OPTION
                        </div>
                    }
                />
            </div>

            <div className={boxAddOther}>
                <TfiReload />
                <div>Add to compare</div>
            </div>

            <div className={boxAddOther}>
                <FaRegHeart />
                <div>Add to wishlist</div>
            </div>

            <div className={subBox}>
                SKU: <span>12345</span>
            </div>

            <div className={subBox}>
                Category: <span>Pullovers</span>
            </div>

            <div className={subBox}>
                Estimated: <span>3 - 5 days</span>
            </div>

            <div className={subBox}>
                Share:{' '}
                <span>
                    <FaFacebookF />
                </span>
            </div>
        </div>
    );
}

export default DetailProduct;
