import styles from '../styles.module.scss';

function IconItem({ icon: Icon }) {
    const { icon } = styles;
    return (
        <div className={icon}>
            <Icon />
        </div>
    );
}

export default IconItem;
