import { useContext } from 'react';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { StepperContext } from '@/contexts/StepperProvider';

function Stepper({ number, content, isDisable = false }) {
    const { stepper, numberStep, textStep, disableNumber, disableText } = styles;

    const { currentStep, setCurrentStep } = useContext(StepperContext);
    return (
        <div className={stepper} onClick={() => (number !== 3 ? setCurrentStep(number) : {})}>
            <div
                className={classNames(numberStep, {
                    [disableNumber]: isDisable
                })}
            >
                {number}
            </div>
            <div
                className={classNames(textStep, {
                    [disableText]: isDisable
                })}
            >
                {content}
            </div>
        </div>
    );
}

export default Stepper;
