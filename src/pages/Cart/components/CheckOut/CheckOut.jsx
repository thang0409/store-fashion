import InputCart from '@/components/InputCart/InputCart';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PaymentMethod from '@/components/PaymentMethod/PaymentMethod';
import { SideBarContext } from '@/contexts/SideBar';
import Button from '@/components/Button/Button';
import { createOrder } from '@/apis/orderService';
function CheckOut() {
    const {
        container,
        leftBody,
        row,
        row2Col,
        rightBody,
        title,
        coupon,
        orderTitle,
        items,
        item,
        total,
        btnBox,
        btnOrder,
        checkPay
    } = styles;
    const [contries, setCountries] = useState([]);
    const [city, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const formRef = useRef();
    const navigate = useNavigate();

    const CN_BASE = 'https://countriesnow.space/api/v0.1';
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm();

    const {
        listProductCart,
        handleGetListProduct,
        isLoading,
        setIsLoading,
        userId,
        setListProductCart
    } = useContext(SideBarContext);

    const totalPrice = listProductCart
        .reduce((sum, item) => {
            const result = sum + item.price * item.quantity;
            return result;
        }, 0)
        .toFixed(2);

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit();
    };

    const onSubmitForm = async (data) => {
        try {
            const res = await createOrder(data);
            navigate(`/order?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`);
            console.log(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios
            .get(`${CN_BASE}/countries/iso`)
            .then((res) =>
                setCountries(
                    res.data.data.map((c) => ({
                        value: c.name,
                        label: c.name
                    }))
                )
            )
            .catch((err) => console.error(err)); // nên thêm xử lý lỗi
    }, []);

    useEffect(() => {
        if (!watch('country')) return;

        if (watch('country') === 'Vietnam' && !localStorage.getItem('listCities')) {
            axios
                .get('http://provinces.open-api.vn/api/?depth=2')
                .then((res) => {
                    localStorage.setItem('listCities', JSON.stringify(res.data));
                    setCities(
                        res.data.data.map((item) => ({
                            value: item.codename,
                            label: item.name
                        }))
                    );

                    return;
                })
                .catch((err) => console.error('Lỗi lấy tỉnh thành:', err));
        }

        if (localStorage.getItem('listCities')) {
            const data = JSON.parse(localStorage.getItem('listCities'));
            setCities(
                data.map((item) => ({
                    value: item.codename,
                    label: item.name
                }))
            );
        }
    }, [watch('country')]);

    useEffect(() => {
        const cityCode = watch('cities');
        if (!cityCode) return;

        const storedCities = localStorage.getItem('listCities');
        if (!storedCities) return;

        try {
            const data = JSON.parse(storedCities);
            const foundCity = data.find((item) => item.codename === cityCode);

            if (foundCity) {
                setStates(
                    foundCity.districts.map((item) => {
                        return {
                            value: item.codename,
                            label: item.name
                        };
                    })
                );
            } else {
                setStates([]); // nếu không tìm thấy
            }
        } catch (error) {
            console.error('Lỗi khi parse listCities từ localStorage:', error);
        }
    }, [watch('cities')]);

    return (
        <div className={container}>
            <div className={leftBody}>
                <p className={coupon}>
                    Have a coupon? <span>Click here to enter</span>
                </p>
                <p className={title}>BILLING DETAILS</p>
                <form ref={formRef} onSubmit={handleSubmit(onSubmitForm)}>
                    <div className={classNames(row, row2Col)}>
                        <InputCart
                            label={'First Name'}
                            isRequired={true}
                            type={'text'}
                            register={register('firstName', {
                                required: true,
                                maxLength: '25'
                            })}
                            isError={errors.firstName}
                        />

                        <InputCart
                            label={'Last Name'}
                            isRequired={true}
                            type={'text'}
                            register={register('lastName', {
                                required: true,
                                maxLength: '25'
                            })}
                            isError={errors.lastName}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Company Name (optional)'}
                            isRequired={false}
                            type={'text'}
                            register={register('companyName', {})}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Country / Region'}
                            isRequired={true}
                            dataOption={contries}
                            register={register('country', {
                                required: true
                            })}
                            isError={errors.country}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Street address'}
                            isRequired={true}
                            type={'text'}
                            register={register('street', {
                                required: true
                            })}
                            isError={errors.street}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Apartment, suite, unit, etc.'}
                            isRequired={false}
                            isShowLabel={false}
                            type={'text'}
                            register={register('apartment', {})}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Town / City'}
                            isRequired={true}
                            dataOption={city}
                            register={register('cities', {
                                required: true
                            })}
                            isError={errors.cities}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'States'}
                            isRequired={true}
                            dataOption={states}
                            register={register('state', {
                                required: true
                            })}
                            isError={errors.state}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Phone'}
                            isRequired={true}
                            type={'text'}
                            register={register('phone', {
                                required: true
                            })}
                            isError={errors.phone}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'ZIP Code'}
                            isRequired={true}
                            type={'text'}
                            register={register('zipCode', {
                                required: true
                            })}
                            isError={errors.zipCode}
                        />
                    </div>

                    <div className={row}>
                        <InputCart
                            label={'Email Address'}
                            isRequired={true}
                            type={'text'}
                            register={register('email', {
                                required: true
                            })}
                            isError={errors.email}
                        />
                    </div>
                </form>
            </div>

            <div className={rightBody}>
                <p className={orderTitle}>Your order</p>

                <div className={items}>
                    {listProductCart.map((product, index) => (
                        <div key={index} className={item}>
                            <img src={product.images[0]} alt='' />
                            <div>
                                <p>{product.name}</p>
                                <p>Price: ${product.price}</p>
                                <p>Size: {product.size}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={total}>
                    <p>Total</p>
                    <p>${totalPrice}</p>
                </div>

                <div className={checkPay}>
                    <input type='radio' name='fav_language' value='qr' id='qr' />
                    <label htmlFor='qr'> Check payments</label>
                    <br></br>
                    <p>
                        Please send a check to Store Name, Store Street, Store Town, Store State /
                        County, Store Postcode.
                    </p>
                    <input type='radio' name='fav_language' value='code' id='code' />
                    <label htmlFor='code'> Cash on delivery</label>
                    <br></br>
                    <p>Pay with cash upon delivery.</p>
                </div>

                <div className={btnBox}>
                    <Button
                        onClick={handleExternalSubmit}
                        className={btnOrder}
                        content={'PLACE ORDER'}
                    />
                </div>

                <PaymentMethod />
            </div>
        </div>
    );
}

export default CheckOut;
