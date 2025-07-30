import { useEffect, useState, useRef } from 'react';

const useScroll = () => {
    const [scrolDirection, setScrolDirection] = useState(null);
    const [scrollPositon, setScrollPositon] = useState(0);

    const prevSrcollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > prevSrcollPosition.current) {
            setScrolDirection('down');
        } else {
            setScrolDirection('up');
        }

        prevSrcollPosition.current = currentScroll <= 0 ? 0 : currentScroll;
        setScrollPositon(currentScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrolDirection,
        scrollPositon
    };
};

export default useScroll;
