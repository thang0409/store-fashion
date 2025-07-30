import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputCommon from '@/components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register } from '@/apis/authService';
function Login() {
    const { container, title, boxRemember, boxBtn, lostPass } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at lest 6 character')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),

        onSubmit: async (values) => {
            const { email: username, password } = values;
            if (isLoading) return;
            if (isRegister) {
                setIsLoading(true);
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label={'Username or Email'}
                    type={'text'}
                    isRequired
                    formik={formik}
                />

                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label={'Confirm Password'}
                        type={'password'}
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRemember}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <div>
                    <Button
                        type='submit'
                        className={boxBtn}
                        content={
                            isLoading
                                ? 'Loading..'
                                : isRegister
                                ? 'REGISTER'
                                : 'LOGIN'
                        }
                    />
                </div>
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : 'Dont have an account'
                }
                className={boxBtn}
                isPrimary={false}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPass}>Lost your password?</div>}
        </div>
    );
}

export default Login;
