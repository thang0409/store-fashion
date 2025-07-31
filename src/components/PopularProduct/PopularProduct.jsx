import ProductItem from '@/components/ProductItem/ProductItem';
import styles from './styles.module.scss';

import MainLayout from '@/components/Layout/Layout';

function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item, index) => (
                    <ProductItem
                        key={index}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                        detail={item}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default PopularProduct;
