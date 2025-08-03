import { getCart } from '@/apis/cartService';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Content from '@/pages/Cart/components/Content/Content';
import Step from '@/pages/Cart/components/Step/Step';
import { useEffect } from 'react';

function Cart() {
    return (
        <div>
            <Header />
            <Step />
            <Content />

            <Footer />
        </div>
    );
}

export default Cart;
