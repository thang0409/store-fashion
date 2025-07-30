import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBar';
import classNames from 'classnames';
import { IoCloseOutline } from 'react-icons/io5';
import Login from '@/components/ContentSideBar/Login/Login';
import Compare from '@/components/ContentSideBar/Compare/Compare';
import WishList from '@/components/ContentSideBar/WishList/WishList';
import Cart from '@/components/ContentSideBar/Cart/Cart';

function SideBar({ children }) {
    const { container, overlay, sideBar, openSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <WishList />;
            case 'cart':
                return <Cart />;

            default:
                return <Login />;
        }
    };
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={() => handleToggle()}
            ></div>
            <div
                className={classNames(sideBar, {
                    [openSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={() => handleToggle()}>
                        <IoCloseOutline />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
