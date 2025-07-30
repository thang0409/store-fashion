import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

function BoxIcon({ type, href, style, className, onClick }) {
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return <FaFacebookF />;
            case 'insta':
                return <FaInstagram />;
            case 'ytb':
                return <FaYoutube />;
            case 'reload':
                return <TfiReload />;
            case 'heart':
                return <FaRegHeart />;
            case 'cart':
                return <FiShoppingCart />;
            default:
                break;
        }
    };
    return (
        <div onClick={onClick} style={style} className={className}>
            {handleRenderIcon(type)}
        </div>
    );
}

export default BoxIcon;
