import styles from './styles.module.scss';
import img1 from '@/assets/icons/img/saleImg_1.webp';
import img2 from '@/assets/icons/img/saleImg_2.webp';
import Button from '@/components/Button/Button';
import useTranslateX from '@/hooks/useTranslateX';

function SaleHomePage() {
    const { container, title, des, boxBtn, boxImg } = styles;
    const { translateXPosition } = useTranslateX();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img src={img1} alt='' />
            </div>
            <div>
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img src={img2} alt='' />
            </div>
        </div>
    );
}

export default SaleHomePage;
