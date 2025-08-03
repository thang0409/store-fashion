import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import ProductItem from '@/components/ProductItem/ProductItem';

const NextArrow = ({ className, style, onClick }) => (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
        <IoIosArrowForward />
    </div>
);

const PrevArrow = ({ className, style, onClick }) => (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
        <IoIosArrowBack />
    </div>
);

function SliderCommon({ data, isProductItem = false, className, slideToShow = 1 }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Slider className={className} {...settings}>
            {data.map((item, index) => {
                const src = !item.image ? item.images?.[0] : item.image;

                return (
                    <div key={index}>
                        {isProductItem ? (
                            <div style={{ width: '95%' }}>
                                <ProductItem
                                    src={src}
                                    prevSrc={src}
                                    name={item.name}
                                    price={item.price}
                                    detail={item}
                                    isHomePage={false}
                                    slide={true}
                                />
                            </div>
                        ) : (
                            <img src={isArrImage} alt='' />
                        )}
                    </div>
                );
            })}
        </Slider>
    );
}

export default SliderCommon;
