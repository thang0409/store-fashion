import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import styles from '../styles.module.scss';
import Button from '@/components/Button/Button';

function Banner() {
    const { banner, content, title, countdown } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={banner}>
            <div className={content}>
                <div className={countdown}>
                    <CountdownTimer targetDate={targetDate} />
                </div>

                <div className={title}>The Classics Make A Comeback</div>

                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default Banner;
