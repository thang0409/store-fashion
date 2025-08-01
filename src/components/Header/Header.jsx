import BoxIcon from '@/components/Header/BoxIcon/BoxIcon';
import { dataIcon, dataMenu } from '@/components/Header/constant';
import styles from './styles.module.scss';
import Menu from '@/components/Header/Menu/Menu';
import Logo from '@/assets/icons/img/Logo-retina.webp';
import useScroll from '@/hooks/useScroll';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBar';
import { StoreContext } from '@/contexts/storeProvider';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

function Header() {
    const {
        wrapper,
        topHeader,
        containerHeader,
        containerBoxIcon,
        containerMenu,
        containerBox,
        boxIcon,
        fixedToHeader,
        boxCart,
        quantity
    } = styles;
    const { isOpen, setIsOpen, type, setType, listProductCart } =
        useContext(SideBarContext);

    const [fixedHeader, setFixedHeader] = useState(false);

    const { scrollPositon } = useScroll();

    const quantityCart = listProductCart.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        if (scrollPositon > 80) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }
    });

    return (
        <div
            className={classNames(wrapper, topHeader, {
                [fixedToHeader]: fixedHeader
            })}
        >
            <div className={containerHeader}>
                {/* Khối trái */}
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataIcon.slice(0, 3).map((item, index) => (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                                style={{
                                    color: '#fff',
                                    padding: '2px'
                                }}
                                className={boxIcon}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu
                                key={index}
                                content={item.content}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>

                {/* Khối giữa */}
                <div>
                    <img
                        src={Logo}
                        alt=''
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>

                {/* Khối phải */}
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                />
                            ))}
                    </div>

                    <div className={containerBoxIcon}>
                        {dataIcon
                            .slice(3, dataIcon.length - 1)
                            .map((item, index) => (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                    style={{
                                        color: '$primary_color',
                                        fontSize: '20px',
                                        margin: '0px 8px'
                                    }}
                                    onClick={() =>
                                        handleOpenSideBar(item.title)
                                    }
                                />
                            ))}

                        <div className={boxCart}>
                            <FiShoppingCart
                                style={{
                                    color: '$primary_color',
                                    fontSize: '22px',
                                    margin: '0 8px'
                                }}
                                onClick={() => handleOpenSideBar('cart')}
                            />

                            <div className={quantity}>{quantityCart}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
