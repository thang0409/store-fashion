import MainLayout from '@/components/Layout/Layout';
import ProductItem from '@/components/ProductItem/ProductItem';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext } from 'react';
import styles from '../styles.module.scss';

function ListProducts() {
    const { boxProductsGrid, boxProductsList } = styles;
    const { products, isShowGrid } = useContext(OurShopContext);

    return (
        <MainLayout>
            <div className={isShowGrid ? boxProductsGrid : boxProductsList}>
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        src={product.images[0]}
                        prevSrc={product.images[1]}
                        name={product.name}
                        price={product.price}
                        detail={product}
                        isHomePage={false}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default ListProducts;
