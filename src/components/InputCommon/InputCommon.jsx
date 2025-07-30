import { IoEyeSharp } from 'react-icons/io5';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Formik } from 'formik';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
    const [showPass, setShowPass] = useState(false);
    const isPassWord = type === 'password' ? true : false;
    const isShowPassWord =
        type === 'password' && showPass === true ? 'text' : type;
    const { formik, id } = props;
    const isErr = formik.touched[id] && formik.errors[id];
    const messErr = formik.errors[id];

    const handleShowPassWord = () => {
        setShowPass(!showPass);
    };

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowPassWord}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id] || ''}
                />
                {isPassWord && (
                    <div
                        className={boxIcon}
                        onClick={() => handleShowPassWord()}
                    >
                        {showPass ? <IoEyeSharp /> : <BsFillEyeSlashFill />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
