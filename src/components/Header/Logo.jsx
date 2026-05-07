import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import sprite from "../../assets/img/sprite.svg";
import {NavLink} from "react-router-dom";
import {toggleMenuCreator} from '../../redus/reduser';


const Logo = (props) => {

    const [currentPath , setCurrentPath ] = useState(false); 

    useEffect(() => {
        // setUseLocation(window.location.href);
        setCurrentPath(window.location.pathname);
    }, []);

    const handleToggle = () => {
        if (props.isToggled) {
            props.dispatch(toggleMenuCreator());
            let body = document.querySelector('body');
            if (!props.isToggled) {
                body.className='overflowHidden';          
            } else {
                body.classList.remove('overflowHidden');
                body.removeAttribute('class');
            }            
        }
    };

    return (
        <div className={s.logo} onClick={handleToggle}>
            {/* <NavLink  to="/" aria-label="Перейти на главную страницу" > */}
            <NavLink  to={`${currentPath}`} aria-label="Перейти на главную страницу" >
                <svg className={s.icon}>
                    <use href={`${sprite}#logo`} />
                </svg>
            </NavLink>
        </div>
    )
}

export default Logo;