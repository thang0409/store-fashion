import { getDeatailOrder } from '@/apis/orderService';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Order() {
    const location = useLocation();
    const param = new URLSearchParams(location.search);

    const id = param.get('id');
    const amount = param.get('totalAmount');

    const qrCode = `https://qr.sepay.vn/img?acc=96247NCTHANG040903&bank=BIDV&amount=${amount}&des=${id}`;

    const handleGetDetailOrder = async () => {
        try {
            const res = await getDeatailOrder(id);
            console.log(res);
        } catch (error) {}
    };

    useEffect(() => {
        handleGetDetailOrder();
    }, []);
    return (
        <div>
            <img src={qrCode} alt='' />
        </div>
    );
}

export default Order;
