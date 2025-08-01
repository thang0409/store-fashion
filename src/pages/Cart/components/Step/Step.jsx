import Stepper from '@/pages/Cart/components/Step/Stepper';
import styles from '../../styles.module.scss';
import { number } from 'yup';
import { Fragment } from 'react';

function Step() {
    const { containerStep, step, line, textNoti } = styles;

    const dataStep = [
        {
            number: '1',
            content: 'SHOPPING CART'
        },
        {
            number: '2',
            content: 'CHECK OUT'
        },
        {
            number: '3',
            content: 'ORDER STATUS'
        }
    ];
    return (
        <div className={containerStep}>
            <div className={step}>
                {dataStep.map((item, index) => (
                    <Fragment key={index}>
                        <Stepper
                            number={item.number}
                            content={item.content}
                            isDisable={index !== 0}
                        />
                        {index !== dataStep.length - 1 && (
                            <div className={line}></div>
                        )}
                    </Fragment>
                ))}
            </div>

            <div className={textNoti}>
                Hurry up, these products are limited, checkout within{' '}
            </div>
        </div>
    );
}

export default Step;
