import { useContext, useState } from 'react';
import Cookies from 'js-cookie';

import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBar';
import { StoreContext } from '@/contexts/storeProvider';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const { userInfo, handleLogOut } = useContext(StoreContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };

    const handleTitle = (content) => {
        if (content === 'Sign in' && userInfo) {
            return userInfo.username;
        } else {
            return content;
        }
    };

    const handleHover = (content) => {
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        } else {
            setIsShowSubMenu(false);
        }
    };

    return (
        <div
            className={menu}
            onMouseEnter={() => handleHover(content)}
            onClick={handleClickShowLogin}
        >
            {handleTitle(content)}

            {isShowSubMenu && (
                <div
                    onClick={handleLogOut}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
