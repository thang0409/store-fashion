import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBar';
import Loading from '@/components/Loading/Loading';
function ItemProduct({
    src,
    titleApi,
    sizeApi,
    quantity,
    priceApi,
    sku,
    productId,
    userId
}) {
    const { container, boxClose, content, title, price, size, overlayLoading } =
        styles;

    const [isDelete, setIsDelete] = useState(false);

    const { handleGetListProduct } = useContext(SideBarContext);

    const handleRemoveItemProductCart = () => {
        setIsDelete(true);
        deleteItem({
            productId,
            userId
        })
            .then((res) => {
                handleGetListProduct(userId, 'cart');
                setIsDelete(false);
            })
            .catch((err) => setIsDelete(false));
    };
    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose} onClick={handleRemoveItemProductCart}>
                <IoIosClose />
            </div>
            <div className={content}>
                <div className={title}>{titleApi}</div>
                <div className={size}>Size:{sizeApi}</div>
                <div className={price}>
                    {quantity} x ${priceApi}
                </div>
                <div>SKU:{sku}</div>
                {isDelete && (
                    <div className={overlayLoading}>
                        <Loading />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemProduct;
