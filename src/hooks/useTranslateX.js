import useScroll from '@/hooks/useScroll';
import { useEffect, useState } from 'react';

const useTranslateX = () => {
    const { scrollPositon, scrolDirection } = useScroll();

    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTransalteX = () => {
        if (scrolDirection === 'down') {
            setTranslateXPosition(
                translateXPosition <= 0 ? 80 : translateXPosition - 1
            );
        } else if (scrolDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        handleTransalteX();
    }, [scrollPositon]);

    return {
        translateXPosition
    };
};

export default useTranslateX;
