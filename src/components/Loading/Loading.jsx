import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from './styles.module.scss';

function Loading() {
    const { loadingIcon } = styles;
    return (
        <div>
            <AiOutlineLoading3Quarters className={loadingIcon} />
        </div>
    );
}

export default Loading;
