import React, {useState} from 'react';
import s from './Cases.module.css';
import './Cases.css';
import case1 from '../../../assets/img/cases_1.png';
import case1_webp from '../../../assets/img/cases_1.webp';

const Cases = () => {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const handleClickCases = (e) => {
        let $target = e.target;
        let index = parseInt($target.dataset.slideTo);
        let slides = document.querySelector('[data-slides="slides"]');

        slides.setAttribute('style', 'transform: translateX(-100%)');
        let step = -100 * index;
        slides.setAttribute('style', `transform: translateX(${step + '%'})`);

        switch (index) {
            case 0: 
                setIsActive1(true);
                setIsActive2(false);
                setIsActive3(false);
            break;
            case 1: 
                setIsActive1(false);
                setIsActive2(true);
                setIsActive3(false);
            break;
            case 2: 
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(true);
            break;
            default:
                setIsActive1(true);
                setIsActive2(false);
                setIsActive3(false);
        }
    };

    return 	<section className={s.block}>
                <div className={s.decor}></div>
                    <div className={s.head}>
                        <h2 className={s.title + ' reset'} id="tablist">
                            КЕЙСЫ <br/> наших клиентов
                        </h2>
                        <button className={s.btnCase + ' btn'} type="button"> 
                            Все кейсы
                        </button>
                    </div>
                    <div className={s.tabs}>
                        <div className={s.tabList}  role="tablist" aria-labelledby="tablist">
                                <button className= {s.btn + (isActive1  ? ' tabBtnActive' : '') } role="tab" type="button" id="tab-1"  aria-selected={isActive1 ? 'true' : 'false'}  aria-controls="tabpanel-1" 
                                onClick={handleClickCases} data-slide-to="0" >
                                    Кейс номер 1
                                </button>
                                <button className= {s.btn + (isActive2  ? ' tabBtnActive' : '') } role="tab" type="button" id="tab-2" aria-selected={isActive2 ? 'true' : 'false'} aria-controls="tabpanel-2"
                                onClick={handleClickCases} data-slide-to="1">
                                    Кейс номер 2
                                </button>
                                <button className= {s.btn + (isActive3  ? ' tabBtnActive' : '') }  role="tab" type="button" id="tab-3" aria-selected={isActive3 ? 'true' : 'false'} aria-controls="tabpanel-3"
                                onClick={handleClickCases} data-slide-to="2">
                                    Кейс номер 3
                                </button>
                        </div>
                        
                        <div className={s.carousel}>
                            <div className={s.inner}>
                                <div className={s.slides} data-slides="slides">
                                    <div className={s.item} id="tabpanel-1"  role="tabpanel" aria-labelledby="tab-1">
                                        <picture className={s.picture}>
                                            <source type="image/webp" srcSet={case1_webp}></source>
                                            <img className={s.img} src={case1}  alt='case1' width="645" height="645"/>
                                        </picture>
                                        <div className={s.content}>
                                            <h3 className={s.subTitle + ' reset'}>
                                                Название. Лаконичное описание кейса
                                            </h3>
                                            <div className={s.contentHead}>
                                                <p className={s.caseName + ' text-uppercase reset'}>
                                                    газпром
                                                </p>
                                                <p className={s.caseDate + ' reset'}>
                                                    22.02.2022
                                                </p>
                                            </div>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Проблемма </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Возможные риски и убытки </span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Решение </span>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>  Дейтсвия TechnoService</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>Выгоды, полученные клиентом</span> <span className={s.textBoldBlue}>5000руб в час экономия</span> 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={s.item} id="tabpanel-2"  role="tabpanel" aria-labelledby="tab-1">
                                        <picture className={s.picture}>
                                            <source type="image/webp" srcSet={case1_webp}></source>
                                            <img className={s.img} src={case1}  alt='case1' width="645" height="645"/>
                                        </picture>
                                        <div className={s.content}>
                                            <h4 className={s.subTitle + ' reset'}>
                                                Название. Лаконичное описание кейса
                                            </h4>
                                            <div className={s.contentHead}>
                                                <p className={s.caseName + ' text-uppercase reset'}>
                                                    газпром
                                                </p>
                                                <p className={s.caseDate + ' reset'}>
                                                    22.02.2022
                                                </p>
                                            </div>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Проблемма </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Возможные риски и убытки </span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Решение </span>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>  Дейтсвия TechnoService</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>Выгоды, полученные клиентом</span> <span className={s.textBoldBlue}>5000руб в час экономия</span> 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={s.item} id="tabpanel-3"  role="tabpanel" aria-labelledby="tab-1">
                                        <picture className={s.picture}>
                                            <source type="image/webp" srcSet={case1_webp}></source>
                                            <img className={s.img} src={case1}  alt='case1' width="645" height="645"/>
                                        </picture>
                                        <div className={s.content}>
                                            <h4 className={s.subTitle + ' reset'}>
                                                Название. Лаконичное описание кейса
                                            </h4>
                                            <div className={s.contentHead}>
                                                <p className={s.caseName + ' text-uppercase reset'}>
                                                    газпром
                                                </p>
                                                <p className={s.caseDate + ' reset'}>
                                                    22.02.2022
                                                </p>
                                            </div>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Проблемма </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Возможные риски и убытки </span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}> Решение </span>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>  Дейтсвия TechnoService</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                                            </p>
                                            <p className={s.text + ' reset'}>
                                                <span className={s.textBold}>Выгоды, полученные клиентом</span> <span className={s.textBoldBlue}>5000руб в час экономия</span> 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>
}

export default Cases;