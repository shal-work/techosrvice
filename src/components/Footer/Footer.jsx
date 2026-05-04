import React, {useEffect} from 'react';
import s from './Footer.module.css';
// import point_png from '../../../assets/img/point.png'
// import point_png from '../../assets/img/point.svg'
import {NavLink} from "react-router-dom";

const loadScript = (src, onLoad) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    script.onload = onLoad;
}


const init = () => {
    const myMap = new window.ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.9057, 30.2666],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.            
            zoom: 15,
            controls: [],
        });
    
    const point = new window.ymaps.Placemark([59.906964, 30.261691], {},{
                iconLayout: 'default#image',
                // iconImageHref: "assets/img/spriteIco.svg#location-y",  
                iconImageHref: 'https://techno-service.su/img/icons/location-map.svg',
                preset: 'islands#blueDotIcon',
                iconImageSize: [78, 110],
                iconImageOffset: [-30, -50]
            });
       myMap.geoObjects.add(point);
};


const Footer = () => {

    useEffect(() => {
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
        window.ymaps.ready(init);
        });
    }, []);



    return ( 
        <footer className={s.footer}>
            <div className={s.block}>
                <div id="map" className={s.map}></div>
                <div className={s.wrapper }>
                    <div className={s.contacts}>
                        <p className={s.telephone + ' reset'}>+7(812) 438-04-74</p>
                        <p className={s.manager + ' reset'}>Секритариат <span className={s.name + ' reset'}>менеджер Надежда</span></p>
                        <p className={s.text + ' reset text-uppercase'}>работаем круглосуточно </p>
                        <button className= {s.btn + ' text-uppercase'} type="button"> 
                            Заказать обратный звонок
                        </button>
                        <ul className={s.items +  ' reset'}>
                            <li className={s.item}>
                                <button  type="button" className={s.mailto + ' reset'} onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>doc@techno-service.su</button>
                            </li> 
                            <li className={s.item}>
                                <button type="button" className={s.mailto + ' reset'} onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>Написать ТехноСервис Порт</button>
                            </li> 
                            <li className={s.item}>
                                <NavLink  to="/contacts" className={s.link + ' reset'} aria-label="Перейти на страницу контакты">Перейти в контакты</NavLink>
                            </li> 
                            <li className={s.item}>
                                <p  className={s.mailto + ' reset'}>Россия, Санкт-Петербург <br/>ул.Лифляндская д.6 лит.Д оф/пом 14-Н/КВ-1</p>
                            </li> 
                        </ul>
                        <div className={s.blockBtn}>
                            <button className={s.btnCase + ' btn reset'} type="button"> 
                                Услуги компании
                            </button>
                            <button className={s.btnCase + ' btn'} type="button"> 
                                Смотреть кейсы
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className={s.copyright + ' reset'}>
                © 2021. TechnoServicePort. All rights reserved.
            </p>
        </footer>
    );
}
export default Footer;
