import React from 'react';
import s from './ServiceBlock.module.css';
import {NavLink} from "react-router-dom";
import Platforms_png from '../../../assets/img/platforms_1920_1574.png';
import Platforms_webp from '../../../assets/img/platforms_1920_1574.webp';
import Warehouse_png from '../../../assets/img/warehouse_1920_1574.png';
import Warehouse_webp from '../../../assets/img/warehouse_1920_1574.webp';

const ServiceBlock = () => {
    return 	<section className={s.block + ' container'}>
                <div className={s.container}>

                    <p className={s.heading + ' reset'}>Весь спектр</p>
                    <h2 className={s.title + ' reset'}>погрузочно-разгрузочных услуг</h2>
                    <ul className={s.option + ' reset'}>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Комплекс услуг по креплению грузов (ЖД/Море)</h3>
                                    <ul className={s.ul + ' reset'}>
                                        <li className={s.li + ' reset'}>Свидетельство Российского морского регистра судоходства / ISO</li>
                                        <li className={s.li + ' reset'}>Аттестация специалистов по сварке в РМРС, РРР</li>
                                    </ul>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Комплексе услуг">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Platforms_webp}></source>
                                <img className={s.img} src={Platforms_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Оборудованные производственные площади и склад</h3>
                                    <ul className={s.ul + ' reset'}>
                                        <li className={s.li + ' reset'}>1000+ м.кв. для размещения грузов клиентов</li>
                                    </ul>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о производственной плодадке">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Warehouse_webp}></source>
                                <img className={s.img} src={Warehouse_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Реквизиты крепления</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Реквизиты крепления">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Platforms_webp}></source>
                                <img className={s.img} src={Platforms_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Организация и контроль перегрузки крупногабаритных и тяжеловесных грузов</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Организация и контроль">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Warehouse_webp}></source>
                                <img className={s.img} src={Warehouse_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Упаковка грузов</h3>
                                    <ul className={s.ul + ' reset'}>
                                        <li className={s.li + ' reset'}>Термо</li>
                                        <li className={s.li + ' reset'}>Ваккумная</li>
                                        <li className={s.li + ' reset'}>Деревянная</li>
                                        <li className={s.li + ' reset'}>Металлическая</li>
                                    </ul>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Упаковка грузов">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Platforms_webp}></source>
                                <img className={s.img} src={Platforms_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Изготовление и аренда ГЗП</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Изготовление и аренда ГЗП">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Warehouse_webp}></source>
                                <img className={s.img} src={Warehouse_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>                    
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Перевалка насыпных грузов</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Перевалка насыпных грузов">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Platforms_webp}></source>
                                <img className={s.img} src={Platforms_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>                    
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Изготовление технической документации погрузки и крепления</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о технической документации">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Warehouse_webp}></source>
                                <img className={s.img} src={Warehouse_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>                    
                        <li className={s.item}>
                            <div className={s.inner}>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' reset'}>Ремонт ГЗП и кранов</h3>
                                </div>
                                <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Ремонт ГЗП">Подробнее</NavLink>
                            </div>
                            <picture>
                                <source type="image/webp" srcSet={Platforms_webp}></source>
                                <img className={s.img} src={Platforms_png} alt='platforms' width="1920" height="1574"/>
                            </picture>
                        </li>                    
                    </ul>  


                </div>         
            </section>
}

export default ServiceBlock;