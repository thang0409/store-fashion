// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Logo() {
    const dataLogo = [
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        },
        {
            src: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
        }
    ];
    return (
        <div
            style={{
                marginTop: '80px'
            }}
        >
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                modules={[Navigation]}
            >
                {dataLogo.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img src={item.src} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Logo;
