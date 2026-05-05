import React, {useState, useEffect} from 'react';
import s from './Hero.module.css';
import TechnoservicePort_png from '../../../assets/img/TechnoservicePort.png';
import TechnoservicePort_webp from '../../../assets/img/TechnoservicePort.webp';
import Subtract_png from '../../../assets/img/Subtract.png';
import Subtract_webp from '../../../assets/img/Subtract.webp';

const BodyHero = () => {
    return 	<>
                <div className={s.title}>
                    <picture>
                        <source type="image/webp" srcSet={TechnoservicePort_webp}></source>
                        <img className={s.img} src={TechnoservicePort_png} alt='hands' width="740" height="74"/>
                    </picture>
                    <picture>
                        <source type="image/webp" srcSet={Subtract_webp}></source>
                        <img className={s.img + ' ' + s.subtract} src={Subtract_png} alt='hands' width="562" height="74"/>
                    </picture>
                </div>

                <div className={s.content}>
                    <h3 className= {s.subtitle + ' reset'}>
                        Полный комплекс<br/>технических услуг при отправке грузов<br/>ЖД и морским транспортом
                    </h3>
                    <div className={s.line}></div>
                    <p className= {s.paragraph + ' reset'}>
                        Оптимизируем затраты бизнеса <br/>на погрузочно-разгрузочные работы
                    </p>

                    <ul className={s.blockInfo + ' reset'}>
                        <li className= {s.blockInfoContent + ' ' + s.blockInfoSpeed  + ' reset text-uppercase'}>
                            скорость
                        </li>
                        <li className= {s.blockInfoContent + ' ' + s.blockInfoSafety + ' reset text-uppercase'}>
                            Безопасность и надежность
                        </li>
                        <li className= {s.blockInfoContent + ' ' + s.blockInfoTransport + ' reset text-uppercase'}>
                            Для любого видатранспорта
                        </li>
                    </ul>                        
                </div>
            </>
}

const Hero = () => {    
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    const [editHasTouch, setHasTouch ] = useState(window.matchMedia("(pointer: coarse)").matches);    

    useEffect(() => {
        const handleResize = () => setHasTouch(window.matchMedia("(pointer: coarse)").matches)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    let layer = {
        X: 0,
        Y: 0
    };

    const handleMouseMove = e => {  
        if (!hasTouch) {
            let dStepX = -100;
            let dStepY = -60;
            layer.X = Math.trunc(e.clientX / dStepX) <= -21 ? -21 : Math.trunc(e.clientX / dStepX);
            layer.Y = Math.trunc(e.clientY / dStepY) <= -10 ? -10 : Math.trunc(e.clientY / dStepY);
            let parallax = document.querySelector('.selector');
            parallax.setAttribute('style', `background-position: ${layer.X + 'px'} ${layer.Y + 'px'}`);
        }
        e.preventDefault();
    }
    if (!editHasTouch) {
        return 	(
            <div className={s.hero}>
                <h2 className='visually-hidden'>ТехноСервис Порт</h2>
                <div className={s.heroImg + ' selector'} onMouseMove={handleMouseMove}>
                    <BodyHero/>
                </div>
                <div className={s.clouds}></div>
                <div className={s.wave}></div>
            </div>
        )
    } else {
        return (
            <div className={s.hero}>
                <h2 className='visually-hidden'>ТехноСервис Порт</h2>
                <div className={s.heroImg + ' selector'} onMouseMove={handleMouseMove}>
                    <BodyHero/>          
                </div>

                <div className={s.lowerBlock}>
                    <div className={s.clouds}></div>
                    <div className={s.wave}> </div>
                </div>
            </div>
        )
    }
}

export default Hero;