
import React, {useEffect, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {toggleMenuCreator} from '../../../redus/reduser';


const Navbar = (props) => {
    const [currentPath , setCurrentPath ] = useState(false); 

    useEffect(() => {
        // setUseLocation(window.location.href);
        setCurrentPath(window.location.pathname);
    }, []);

    const handleToggle = () => {
        props.dispatch(toggleMenuCreator());
        let body = document.querySelector('body');
        if (!props.isToggled) {
            body.className='overflowHidden';          
        } else {
            body.classList.remove('overflowHidden');
            body.removeAttribute('class');
        }
    };
    return (	
        <nav className={props.isToggled ? `${s.fadeInopenmenu + ' ' + s.menu}` : s.menu}>
                <ul className={s.items +  ' reset'}>
                    {/* <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to="/about" className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу О нас">О нас</NavLink>
                    </li> 
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to="/services" className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Услуги">Услуги</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to="/gallery" className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Фотогалерея">Фотогалерея</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to="/materials" className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Материалы">Материалы</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to="/contacts" className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Контакты">Контакты</NavLink>
                    </li> */}

                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to={`${currentPath}about`} className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу О нас">О нас</NavLink>
                    </li> 
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink to={`${currentPath}services`} className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Услуги">Услуги</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to={`${currentPath}gallery`} className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Фотогалерея">Фотогалерея</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to={`${currentPath}materials`} className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Материалы">Материалы</NavLink>
                    </li>
                    <li className={s.item + ' text-uppercase'} onClick={handleToggle} >
                        <NavLink  to={`${currentPath}contacts`} className={({ isActive }) => isActive ? s.active + ' ' + s.link + ' text-nobreak' : s.link + ' text-nobreak'} aria-label="Перейти на страницу Контакты">Контакты</NavLink>
                    </li>
            </ul>
        </nav>
    )
}

export default Navbar;