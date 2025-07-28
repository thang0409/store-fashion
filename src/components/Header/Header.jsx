import BoxIcon from '@/components/Header/BoxIcon/BoxIcon';
import { dataIcon, dataMenu } from '@/components/Header/constant';
import styles from './styles.module.scss';
import Menu from '@/components/Header/Menu/Menu';
import Logo from '@/assets/icons/img/Logo-retina.webp';

function Header() {
    const {
        wrapper,
        containerHeader,
        containerBoxIcon,
        containerMenu,
        containerBox,
        boxIcon
    } = styles;
    return (
        <div className={wrapper}>
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
                            .slice(3, dataIcon.length)
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
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
