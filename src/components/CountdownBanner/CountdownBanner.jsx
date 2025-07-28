import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';

function CountdownBanner() {
    const { container, containerTimer } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <div
                style={{
                    fontSize: '28px',
                    color: '#222',
                    textAlign: 'center'
                }}
            >
                The classics make a comeback
            </div>
            <Button content={'Buy now'} />
        </div>
    );
}

export default CountdownBanner;
