import classNames from 'classnames';
import styles from './styles.module.scss';

function Button({ className, content, isPrimary = true, ...props }) {
    const { btn, primaryBtn, secondBtn } = styles;
    return (
        <button
            className={classNames(btn, className, {
                [primaryBtn]: isPrimary,
                [secondBtn]: !isPrimary
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;
