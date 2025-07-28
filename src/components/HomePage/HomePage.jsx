import styles from './styles.module.scss';
import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header/Header';

function HomePage() {
    const { container } = styles;

    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
            </div>
        </div>
    );
}

export default HomePage;
