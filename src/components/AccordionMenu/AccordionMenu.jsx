import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMinus } from 'react-icons/fi';
function AccordionMenu({ titleMenu, content, onClick, isSelected }) {
    const {
        container,
        title,
        activeTitle,
        activeIcon,
        contentMenu,
        isVisibility
    } = styles;

    const handleActiveTitle = () => {
        onClick();
    };
    return (
        <div className={container}>
            <div
                onClick={handleActiveTitle}
                className={classNames(title, {
                    [activeTitle]: isSelected
                })}
            >
                {isSelected ? (
                    <FiMinus className={activeIcon} />
                ) : (
                    <IoIosArrowDown className={activeIcon} />
                )}
                {titleMenu}
            </div>

            <div
                className={classNames(contentMenu, {
                    [isVisibility]: isSelected
                })}
            >
                {content}
            </div>
        </div>
    );
}

export default AccordionMenu;
