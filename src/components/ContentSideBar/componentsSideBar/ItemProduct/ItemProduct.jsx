import styles from './styles.module.scss';
import img1 from '@/assets/icons/img/img_1.webp';
import { IoIosClose } from 'react-icons/io';
function ItemProduct() {
    const { container, boxClose, content, title, price, size } = styles;

    return (
        <div className={container}>
            <img src={img1} alt='' />
            <div className={boxClose}>
                <IoIosClose />
            </div>
            <div className={content}>
                <div className={title}>Title</div>
                <div className={size}>Size:M</div>
                <div className={price}>$999</div>
                <div>SKU: 1234</div>
            </div>
        </div>
    );
}

export default ItemProduct;
