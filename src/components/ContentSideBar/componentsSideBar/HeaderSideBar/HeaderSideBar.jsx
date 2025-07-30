import styles from './styles.module.scss';

function HeaderSideBar({ icon, title }) {
    const { container, boxIcon, titleStyle } = styles;
    return (
        <div className={container}>
            <div className={boxIcon}>{icon}</div>
            <div className={titleStyle}>{title}</div>
        </div>
    );
}

export default HeaderSideBar;
