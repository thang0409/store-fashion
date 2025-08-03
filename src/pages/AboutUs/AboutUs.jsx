import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Img1 from '@/assets/icons/img/about_1.jpg';
import Img2 from '@/assets/icons/img/about_2.jpg';
import Img3 from '@/assets/icons/img/about_3.jpg';

import styles from './styles.module.scss';
import Logo from '@/pages/AboutUs/components/Logos';

function AboutUs() {
    const {
        container,
        fnBox,
        specialText,
        btnBack,
        containerTitle,
        line,
        title,
        textS,
        textL,
        containerContent,
        des
    } = styles;

    const dataContent = [
        {
            id: 1,
            src: Img1,
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget'
        },
        {
            id: 2,
            src: Img2,
            des: 'Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.'
        },
        {
            id: 3,
            src: Img3,
            des: 'Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.'
        }
    ];

    const navigate = useNavigate();

    const handlePrevPage = () => {
        navigate(-1);
    };
    return (
        <div>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={fnBox}>
                        <div>
                            Home &gt; <span className={specialText}>About Us</span>
                        </div>
                        <div onClick={handlePrevPage} className={btnBack}>
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={containerTitle}>
                        <div className={line}>
                            <div className={title}>
                                <div className={textS}>we try our best for you</div>
                                <div className={textL}>Welcome to the Marseille04 Shop</div>
                            </div>
                        </div>
                    </div>

                    <div className={containerContent}>
                        {dataContent.map((item, index) => (
                            <div key={index}>
                                <img src={item.src} alt='' />
                                <div className={des}>{item.des}</div>
                            </div>
                        ))}
                    </div>

                    <Logo />
                </div>
            </MainLayout>
            <Footer />
        </div>
    );
}

export default AboutUs;
