import React from 'react';
import s from './LogoString.module.css';
import './LogoString.css';
import rd_logistics from '../../../assets/img/rd_logistics1.png';
import rd_logistics_webp from '../../../assets/img/rd_logistics1.webp';
import power_machines from '../../../assets/img/power_machines1.png';
import power_machines_webp from '../../../assets/img/power_machines1.webp';


import port_bronka from '../../../assets/img/port_bronka1.png';
import port_bronka_webp from '../../../assets/img/port_bronka1.webp';

import kartex from '../../../assets/img/kartex1.png';
import kartex_webp from '../../../assets/img/kartex1.webp';

import special from '../../../assets/img/special1.png';
import special_webp from '../../../assets/img/special1.webp';

import ust_luga from '../../../assets/img/ust_luga1.png';
import ust_luga_webp from '../../../assets/img/ust_luga1.webp';

import petrolesport from '../../../assets/img/petrolesport1.png';
import petrolesport_webp from '../../../assets/img/petrolesport1.webp';

const LogoString = () => {
    const handleMouseOver = (e) => {  
        let logos = document.querySelectorAll('.logoString');
        logos.forEach ((item) => {
            item.setAttribute('style', 'animation-play-state: paused');
        })
    }
    const handleMouseOut = (e) => {  
        let logos = document.querySelectorAll('.logoString');
        logos.forEach ((item) => {
            item.setAttribute('style', 'animation-play-state: running');
        })
    }


    return 	<section className={s.string}>
                <h2 className={s.title + ' text-uppercase reset'}>С нами сотрудничают:</h2>
                <div className={s.logoBlock}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div className={s.logoString + ' logoString'}>
                        <picture>
                            <source type="image/webp" srcSet={rd_logistics_webp}></source>
                            <img className={s.logoImg} src={rd_logistics}  alt='rd_logistics' width="128" height="30"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={power_machines_webp}></source>
                            <img className={s.logoImg + ' ' + s.powerMachines} src={power_machines} alt='power_machines' width="84" height="82"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={port_bronka_webp}></source>
                            <img className={s.logoImg } src={port_bronka} alt='port_bronka' width="120" height="54"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={kartex_webp}></source>
                            <img className={s.logoImg + ' ' + s.kartex} src={kartex} alt='kartex' width="128" height="78"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={special_webp}></source>
                            <img className={s.logoImg} src={special} alt='special' width="120" height="60"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={ust_luga_webp}></source>
                            <img className={s.logoImg} src={ust_luga} alt='petrolesport' width="138" height="66"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={petrolesport_webp}></source>
                            <img className={s.logoImg + ' ' + s.logoImgLast} src={petrolesport} alt='petrolesport' width="216" height="22"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={rd_logistics_webp}></source>
                            <img className={s.logoImg} src={rd_logistics} alt='rd_logistics' width="128" height="30"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={power_machines_webp}></source>
                            <img className={s.logoImg + ' ' + s.powerMachines} src={power_machines} alt='power_machines' width="84" height="82"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={port_bronka_webp}></source>
                            <img className={s.logoImg } src={port_bronka} alt='port_bronka' width="120" height="54"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={kartex_webp}></source>
                            <img className={s.logoImg + ' ' + s.kartex} src={kartex} alt='kartex' width="128" height="78"/>
                        </picture> 
                        <picture>
                            <source type="image/webp" srcSet={special_webp}></source>
                            <img className={s.logoImg} src={special} alt='special' width="120" height="60"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={ust_luga_webp}></source>
                            <img className={s.logoImg} src={ust_luga} alt='petrolesport' width="138" height="66"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={petrolesport_webp}></source>
                            <img className={s.logoImg} src={petrolesport} alt='petrolesport' width="216" height="22"/>
                        </picture>                                               
                    </div>
                    {/* <div className={s.logoString + ' logoString'}>
                        <picture>
                            <source type="image/webp" srcSet={rd_logistics_webp}></source>
                            <img className={s.logoImg} src={rd_logistics}  alt='rd_logistics' width="128" height="30"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={power_machines_webp}></source>
                            <img className={s.logoImg} src={power_machines} alt='power_machines' width="84" height="82"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={port_bronka_webp}></source>
                            <img className={s.logoImg } src={port_bronka} alt='port_bronka' width="120" height="54"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={kartex_webp}></source>
                            <img className={s.logoImg} src={kartex} alt='kartex' width="128" height="78"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={special_webp}></source>
                            <img className={s.logoImg} src={special} alt='special' width="120" height="60"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={ust_luga_webp}></source>
                            <img className={s.logoImg} src={ust_luga} alt='petrolesport' width="138" height="66"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={petrolesport_webp}></source>
                            <img className={s.logoImg + ' ' + s.logoImgLast} src={petrolesport} alt='petrolesport' width="216" height="22"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={rd_logistics_webp}></source>
                            <img className={s.logoImg} src={rd_logistics} alt='rd_logistics' width="128" height="30"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={power_machines_webp}></source>
                            <img className={s.logoImg} src={power_machines} alt='power_machines' width="84" height="82"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={port_bronka_webp}></source>
                            <img className={s.logoImg } src={port_bronka} alt='port_bronka' width="120" height="54"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={kartex_webp}></source>
                            <img className={s.logoImg} src={kartex} alt='kartex' width="128" height="78"/>
                        </picture> 
                        <picture>
                            <source type="image/webp" srcSet={special_webp}></source>
                            <img className={s.logoImg} src={special} alt='special' width="120" height="60"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={ust_luga_webp}></source>
                            <img className={s.logoImg} src={ust_luga} alt='petrolesport' width="138" height="66"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={petrolesport_webp}></source>
                            <img className={s.logoImg} src={petrolesport} alt='petrolesport' width="216" height="22"/>
                        </picture> 
                    </div> */}

                </div>

            </section>
}

export default LogoString;