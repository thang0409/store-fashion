import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetDate }) => {
    const { box } = styles;
    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

    function calcTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calcTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time) => {
        return String(time).padStart(2, '0');
    };

    const timerComponent = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] !== undefined) {
            timerComponent.push(
                <span className={box} key={interval}>
                    {formatTime(timeLeft[interval])}
                    <span
                        style={{
                            fontSize: '18px',
                            color: '#888'
                        }}
                    >
                        {' '}
                        {interval}
                    </span>
                    {''}
                </span>
            );
        }
    });

    return timerComponent;
};

export default CountdownTimer;
