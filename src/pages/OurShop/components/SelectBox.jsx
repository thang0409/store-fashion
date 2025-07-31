import styles from '../styles.module.scss';

function SelectBox({ options, getValue, type }) {
    const { selectBox } = styles;
    return (
        <select
            className={selectBox}
            onChange={(e) => getValue(e.target.value, type)}
            name=''
            id=''
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectBox;
