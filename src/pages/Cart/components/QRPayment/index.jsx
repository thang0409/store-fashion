import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { getDeatailOrder } from '@/apis/orderService';
function QRPayment() {
    const { container, left, right, flexBox, title, des, imgBank, totalAmount } = styles;
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const [isSuccess, setIsSuccess] = useState(false);

    const id = param.get('id');
    const amount = param.get('totalAmount');

    const qrCode = `https://qr.sepay.vn/img?acc=96247NCTHANG040903&bank=BIDV&amount=${amount}&des=${id}`;

    let interval;
    const handleGetDetailOrder = async () => {
        if (!id) return;
        try {
            const res = await getDeatailOrder(id);
            if (res.data.data.status !== 'pending') {
                clearInterval(interval);
            }

            if (res.data.data.status !== 'success') {
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        interval = setInterval(() => {
            handleGetDetailOrder();
        }, 5000);
        // return () => {
        //     clearInterval(interval);
        // };
    }, []);

    return (
        <div className={container}>
            <div className={left}>
                <h4>Quét mã QR để thanh toán</h4>
                <img src={qrCode} alt='' />
                <p>Sử dụng ứng dụng ngân hàng của bạn để quét QR</p>
            </div>

            <div>
                <h3>Chi tiết thanh toán</h3>
                <div className={right}>
                    <div className={classNames(flexBox, title)}>
                        <div>
                            <img
                                className={imgBank}
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gAJj0_QOmJi9Jo_s0EFE9LCORfwFRLiSOg&s'
                                alt=''
                            />
                        </div>
                        <div>
                            <p>BIDV</p>
                            <p>Chuyển khoản ngân hàng</p>
                        </div>
                    </div>

                    <div className={classNames(flexBox, des)}>
                        <div>Chủ tài khoản:</div>
                        <div>NGUYEN CHIEN THANG</div>
                    </div>

                    <div className={classNames(flexBox, des)}>
                        <div>STK:</div>
                        <div>001203019446</div>
                    </div>

                    <div className={classNames(flexBox, des)}>
                        <div>Số tiền:</div>
                        <div>${amount}</div>
                    </div>

                    <div className={classNames(flexBox, des)}>
                        <div>Nội dung chuyển khoản:</div>
                        <div>{id}</div>
                    </div>
                    <div className={totalAmount}>
                        <p>Tổng Tiền:</p>
                        <p>${amount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QRPayment;
