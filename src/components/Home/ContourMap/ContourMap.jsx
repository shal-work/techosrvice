import React from 'react';
import sprite from "../../../assets/img/sprite.svg";
import s from './ContourMap.module.css';

const ContourMap = () => {
    return 	<section className={s.block}>
                <h2 className='visually-hidden'>Города клиентов</h2>

                <div className={s.map}>
                    <div className={s.places}>
                        <div className={s.ts}></div>
                        <div className={s.kauhajoki + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>каухайоки</p>
                        </div>
                        <div className={s.kaliningrad + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>калининград</p>
                        </div>
                        <div className={s.spb + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' ' + s.cityMain + ' reset'}>Санкт-петербург</p>
                        </div>
                        <div className={s.tver + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>Тверь</p>
                        </div>
                        <div className={s.vologda + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>вологда</p>
                        </div>
                        <div className={s.msk + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' ' + s.cityMain + ' reset'}>москва</p>
                        </div>
                        <div className={s.kaluga + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>калуга</p>
                        </div>
                        <div className={s.nnovgorod + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>нижний новгород</p>
                        </div>
                        <div className={s.taganrog + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>таганрог</p>
                        </div>
                        <div className={s.temryuk + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>темрюк</p>
                        </div>
                        <div className={s.perm + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>пермь</p>
                        </div>
                        <div className={s.сhelyabinsk + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>челябинск</p>
                        </div>
                        <div className={s.khantyMansiysk + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>Ханты-Мансийск</p>
                        </div>
                        <div className={s.belovo + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>белово</p>
                        </div>
                        <div className={s.nakhodka + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>Находка</p>
                        </div>
                        <div className={s.vladivostok + ' ' + s.place}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#place`} />
                            </svg>
                            <p className={s.city + ' reset'}>Владивосток</p>
                        </div>
                    </div>
                </div>
            </section>
}

export default ContourMap;