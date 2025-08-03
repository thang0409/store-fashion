import styles from '../styles.module.scss';

function InfomationProduct() {
    const { itemInfo, infoContent, infoTitle } = styles;
    const dataInfo = [
        {
            id: 1,
            title: 'Size',
            content: 'S,M,L'
        },
        {
            id: 2,
            title: 'Material',
            content: 'Fleece'
        },
        {
            id: 3,
            title: 'Color',
            content: 'Black. Blue'
        }
    ];
    return (
        <div>
            {dataInfo.map((data, index) => (
                <div className={itemInfo} key={index}>
                    <div className={infoTitle}>{data.title}</div>
                    <div className={infoContent}>{data.content}</div>
                </div>
            ))}
        </div>
    );
}

export default InfomationProduct;
