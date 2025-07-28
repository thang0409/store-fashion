import AdvanceHeadling from '@/components/AdvanceHeadling/AdvanceHeadling';
import styles from './styles.module.scss';
import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';
import Info from '@/components/Info/Info';
import HeadingListProduct from '@/components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from '@/components/PopularProduct/PopularProduct';

function HomePage() {
    const { container } = styles;
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            setListProduct(res.contents);
        });
    }, []);

    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProduct.slice(0, 2)} />
                <PopularProduct data={listProduct.slice(2, 10)} />
            </div>
        </div>
    );
}

export default HomePage;
