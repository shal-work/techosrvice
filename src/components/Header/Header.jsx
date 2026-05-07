import React, {useState} from 'react';
import s from './Header.module.css';
import Navbar from './Navbar/Navbar';
import Logo from './Logo';
import useWindowDimensions from '../../Hook/GetWindowDimensions';
import {toggleMenuCreator, toggleLangugeRu, toggleLangugeCh} from '../../redus/reduser';

const Header = (props) => {

    const { width, height } = useWindowDimensions();
    const [ariaLabel, setariaLabel ] = useState("Открыть меню");
    const [ariaExpanded, setAriaExpanded ] = useState(false);
    const [languge, setLanguge ] = useState(props.state.statusMenu.language);

    const handleToggle = () => {
        props.dispatch(toggleMenuCreator());
        let body = document.querySelector('body');
        if (props.state.statusMenu.activeMenu) {
            setariaLabel("Закрыть меню");
            setAriaExpanded(true);
            body.className='overflowHidden';          
        } else {
            setariaLabel("Открыть меню");
            setAriaExpanded(false);
            body.classList.remove('overflowHidden');
            body.removeAttribute('class');
        }
    };

    const handleToggleLanguge = () => {
        if (props.state.statusMenu.isToggleLanguage ) {
            props.dispatch(toggleLangugeCh());
            setLanguge(props.state.statusMenu.language);
        } else {
            props.dispatch(toggleLangugeRu());
            setLanguge(props.state.statusMenu.language);
        }
    }


    if(width > 768 || (width/height < 1 && width > 768) )  {
        return <header className={s.header}>
                <div className={s.menu}>
                    <Logo dispatch = {props.dispatch} isToggled = {props.state.statusMenu.activeMenu }/>
                    <div className={s.block}>
                        <Navbar dispatch = {props.dispatch} isToggled = {props.state.statusMenu.activeMenu }/>
                        <button onClick={handleToggleLanguge} className={s.language + ' text-uppercase'} aria-label="Выбрать язык">{languge}</button>
                    </div>
                </div>
                <div className={s.container}>
                    <p className={s.phone + " reset"}>+7&nbsp;(812)&nbsp;438-04-74</p>
                </div>
            </header>
    } else {
        return <header className={s.header}>
                <div className={s.menu }>
                    <Logo dispatch = {props.dispatch} isToggled = {props.state.statusMenu.activeMenu }/>
                    <div className={s.container}>
                        <p className={s.phone + " reset"}>+7&nbsp;(812)&nbsp;438-04-74</p>
                    </div>

                    <button onClick={handleToggleLanguge} className={s.language + ' text-uppercase'} aria-label="Выбрать язык">{languge}</button>
                    <button onClick={handleToggle} type="button" className = {s.burger  + ' reset'} aria-label={ariaLabel} aria-expanded={ariaExpanded}>
                        <span className={props.state.statusMenu.activeMenu ? `${s.fadeInopen + ' ' + s.iconbar }` : s.iconbar}> </span>
                    </button>
                </div>
                <Navbar dispatch = {props.dispatch} isToggled = {props.state.statusMenu.activeMenu }/>
            </header>
    }

}

export default Header;
