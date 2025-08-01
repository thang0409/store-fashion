import styles from '../../styles.module.scss';
import classNames from 'classnames';

function Stepper({ number, content, isDisable = false }) {
    const { stepper, numberStep, textStep, disableNumber, disableText } =
        styles;
    return (
        <div className={stepper}>
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
