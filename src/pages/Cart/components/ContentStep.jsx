import { StepperContext } from '@/contexts/StepperProvider';
import CheckOut from '@/pages/Cart/components/CheckOut/CheckOut';
import Content from '@/pages/Cart/components/Content/Content';
import QRPayment from '@/pages/Cart/components/QRPayment';
import { useContext } from 'react';

function ContentStep() {
    const { currentStep, setCurrentStep } = useContext(StepperContext);

    const handleRenderStep = () => {
        switch (currentStep) {
            case 1:
                return <Content />;
            case 2:
                return <CheckOut />;
            case 3:
                return <QRPayment />;
            default:
                return <h2>Không tìm thấy bước</h2>;
        }
    };
    return <>{handleRenderStep()}</>;
}

export default ContentStep;
