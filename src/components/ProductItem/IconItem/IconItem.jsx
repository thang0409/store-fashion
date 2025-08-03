import styles from '../styles.module.scss';

function IconItem({ icon: Icon, type, onClick }) {
    const { icon } = styles;
    return (
        <div className={icon} type={type} onClick={onClick}>
            <Icon />
        </div>
    );
}

export default IconItem;
