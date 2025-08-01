import MainLayout from '@/components/Layout/Layout';
import ProductItem from '@/components/ProductItem/ProductItem';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext } from 'react';
import styles from '../styles.module.scss';
import Button from '@/components/Button/Button';
import Loading from '@/components/Loading/Loading';

function ListProducts() {
    const {
        boxProductsGrid,
        boxProductsList,
        boxBtn,
        btnLoadProduct,
        section,
        loadingIcon
    } = styles;
    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMoreProduct,
        total,
        isLoadMore
    } = useContext(OurShopContext);

    return (
        <div className={section}>
            <MainLayout>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div
                            className={
                                isShowGrid ? boxProductsGrid : boxProductsList
                            }
                        >
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

                        {products.length < total && (
                            <div
                                onClick={handleLoadMoreProduct}
                                className={boxBtn}
                            >
                                <Button
                                    className={btnLoadProduct}
                                    content={
                                        isLoadMore ? (
                                            <Loading />
                                        ) : (
                                            'Load more product'
                                        )
                                    }
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
