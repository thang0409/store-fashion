import HeaderSideBar from '@/components/ContentSideBar/componentsSideBar/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@/components/ContentSideBar/componentsSideBar/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';

function Compare() {
    const { container, btnCompare } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<TfiReload />} title={'Compare'} />
                <ItemProduct />
            </div>
            <Button className={btnCompare} content={'VIEW COMPARE'} />
        </div>
    );
}

export default Compare;
