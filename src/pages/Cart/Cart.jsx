import { getCart } from '@/apis/cartService';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import { StepperContext, StepperProvider } from '@/contexts/StepperProvider';
import Content from '@/pages/Cart/components/Content/Content';
import ContentStep from '@/pages/Cart/components/ContentStep';
import Step from '@/pages/Cart/components/Step/Step';
import { useContext, useEffect, useState } from 'react';

function Cart() {
    return (
        <StepperProvider>
            <div>
                <Header />
                <Step />
                <MainLayout>
                    <ContentStep />
                </MainLayout>

                <Footer />
            </div>
        </StepperProvider>
    );
}

export default Cart;
