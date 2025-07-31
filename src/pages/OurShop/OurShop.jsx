import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';
import ListProducts from '@/pages/OurShop/components/ListProducts';

function OurShop() {
    const { container, fnBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handlePrevPage = () => {
        navigate(-1);
    };

    return (
        <OurShopProvider>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={fnBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div onClick={handlePrevPage} className={btnBack}>
                            &lt; Return to previous page
                        </div>
                    </div>

                    <Banner />
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}

export default OurShop;
