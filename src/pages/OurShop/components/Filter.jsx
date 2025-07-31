import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import classNames from 'classnames';

import styles from '../styles.module.scss';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@/pages/OurShop/components/SelectBox';

function Filter() {
    const { filter, boxIcon, boxLeft, selectBox, sort, show } = styles;

    const { sortOption, showOption, setSortId, setShowId, setIsShowGird } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleRenderGrid = (type) => {
        if (type === 'list') {
            setIsShowGird(false);
        } else {
            setIsShowGird(true);
        }
    };

    return (
        <div className={filter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOption}
                    getValue={getValueSelect}
                    type='sort'
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '20px', color: '#222' }}
                        onClick={() => handleRenderGrid('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    ></div>
                    <CiBoxList
                        onClick={() => handleRenderGrid('list')}
                        style={{ fontSize: '26px', color: '#222' }}
                    />
                </div>
            </div>

            <div className={boxLeft}>
                <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
                <SelectBox
                    options={showOption}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
}

export default Filter;
