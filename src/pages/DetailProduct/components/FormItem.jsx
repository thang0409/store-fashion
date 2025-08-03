import { TiStarFullOutline } from 'react-icons/ti';
import styles from '../styles.module.scss';

function FormItem({ label, isRequired, type }) {
    const {
        itemForm,
        labelInfo,
        required,
        inputForm,
        star,
        boxStar,
        itemStar
    } = styles;

    const renderStar = (length) => {
        return Array.from({ length: length }, (_, index) => (
            <TiStarFullOutline className={star} key={index} />
        ));
    };
    const renderChildren = () => {
        switch (type) {
            case 'rating':
                return (
                    <div className={boxStar}>
                        <div className={itemStar}>{renderStar(1)}</div>
                        <div className={itemStar}>{renderStar(2)}</div>
                        <div className={itemStar}>{renderStar(3)}</div>
                        <div className={itemStar}>{renderStar(4)}</div>
                        <div className={itemStar}>{renderStar(5)}</div>
                    </div>
                );
            case 'input':
                return <input className={inputForm} type='text' />;
            case 'area':
                return <textarea className={inputForm} rows={10} />;
            default:
                break;
        }
    };

    return (
        <div className={itemForm}>
            <label htmlFor='' className={labelInfo}>
                {label} {isRequired && <span className={required}>*</span>}
            </label>
            {renderChildren()}
        </div>
    );
}

export default FormItem;
