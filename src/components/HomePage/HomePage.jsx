import styles from './styles.module.scss';
import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';
import Info from '@/components/Info/Info';

function HomePage() {
    const { container } = styles;

    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
            </div>
        </div>
    );
}

export default HomePage;
