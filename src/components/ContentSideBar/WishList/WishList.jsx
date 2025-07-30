import Button from '@/components/Button/Button';
import styles from './styles.module.scss';
import HeaderSideBar from '@/components/ContentSideBar/componentsSideBar/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@/components/ContentSideBar/componentsSideBar/ItemProduct/ItemProduct';
import { CiHeart } from 'react-icons/ci';
function WishList() {
    const { container, boxBtn, btnWishList } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<CiHeart />} title={'wishlist'} />
                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button className={btnWishList} content={'VIEW WISHLIST'} />
                <Button
                    className={btnWishList}
                    content={'ADD ALL TO CART'}
                    isPrimary={false}
                />
            </div>
        </div>
    );
}

export default WishList;
