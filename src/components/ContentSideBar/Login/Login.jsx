import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';

import InputCommon from '@/components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';

import { register, signIn } from '@/apis/authService';
import { SideBarContext } from '@/contexts/SideBar';
import { StoreContext } from '@/contexts/storeProvider';
function Login() {
    const { container, title, boxRemember, boxBtn, lostPass } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsOpen, handleGetListProduct } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);
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
            setIsLoading(true);
            if (isLoading) return;
            if (isRegister) {
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

            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, refreshToken, token } = res.data;

                        setUserId(id);
                        Cookies.set('userId', id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        toast.success('Đăng nhập thành công');
                        setIsOpen(false);
                        handleGetListProduct(id, 'cart');
                    })
                    .catch((err) => {
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
