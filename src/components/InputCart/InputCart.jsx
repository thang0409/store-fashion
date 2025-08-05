import styles from './styles.module.scss';

function InputCart({
    dataOption,
    label,
    type,
    isRequired = false,
    register,
    isShowLabel = true,
    isError = false
}) {
    const { container, labelInput, errorInput } = styles;

    const renderInput = () => {
        if (type === 'text') {
            return (
                <input
                    className={isError ? errorInput : ''}
                    type='text'
                    placeholder={label}
                    {...register}
                />
            );
        } else {
            return (
                <select className={isError ? errorInput : ''} {...register}>
                    <option value={label} disabled hidden>
                        {label}
                    </option>
                    {dataOption.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            );
        }
    };
    return (
        <div className={container}>
            {isShowLabel && (
                <label className={labelInput} htmlFor=''>
                    {label} {isRequired && <span>*</span>}
                </label>
            )}

            {renderInput()}
        </div>
    );
}

export default InputCart;
