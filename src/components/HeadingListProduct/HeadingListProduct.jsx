import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import MainLayout from '@/components/Layout/Layout';
import CountdownBanner from '@/components/CountdownBanner/CountdownBanner';
import ProductItem from '@/components/ProductItem/ProductItem';

function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div
                    style={{
                        flex: '2'
                    }}
                >
                    <CountdownBanner />
                </div>

                {data.map((item, index) => (
                    <div className={containerItem}>
                        <ProductItem
                            key={index}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
