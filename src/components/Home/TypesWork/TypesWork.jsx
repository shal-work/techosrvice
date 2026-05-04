import React from "react";
import s from './TypesWork.module.css';


const Modal = () => {

    return <ul className={s.modal + ' reset'}>
                 <li className={s.li + ' reset'}>
                    Токарные работы     
                </li>
                <li className={s.li + ' reset'}>
                    Сверление      
                </li>
                <li className={s.li + ' reset'}>
                    Зачистка, шлифовка и покраска      
                </li>
                <li className={s.li + ' reset'}>
                    Резка металла       
                </li>
                <li className={s.li + ' reset'}>
                    Долбежные работы       
                </li>
                <li className={s.li + ' reset'}>
                    Расточные работы      
                </li>
                <li className={s.li + ' reset'}>
                    Фрезерные работы     
                </li>
            </ul>
}
const ModalBracing = () => {
    return <ul className={s.modal + ' ' + s.bracing + ' reset'}>
                <li className={s.li + ' reset'}>
                    Токарные работы     
                </li>
                <li className={s.li + ' reset'}>
                    Сверление      
                </li>
                <li className={s.li + ' reset'}>
                    Зачистка, шлифовка и покраска      
                </li>
            </ul>
}


const TypesWork = () => {
    return  <section className={s.bLock}>
                <div className={s.head}>
                    <h2 className={s.title + ' reset text-uppercase'}>Виды работ</h2>
                    <p className={s.text + ' reset'}>Команда "ТехноСервис Порт" готова выполнить отдельные виды работ вне комплекса технических услуг при отправке Вашего груза</p>
                </div>
                <div className={s.content}>
                    <ul className={s.mainList + ' reset'}>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Металлообработка
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' ' + s.subtitleBracing + ' reset text-uppercase' }>
                                Крепление 
                            </h3>
                            <div className={s.frame + ' ' + s.frameBracing}></div>
                            <ModalBracing/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Сборочно-сварочные 
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' ' + s.subtitleBracing + ' reset text-uppercase' }>
                                Деревообработка
                            </h3>
                            <div className={s.frame + ' ' + s.frameBracing}></div>
                            <ModalBracing/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Работа с контейнерами
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Работа с контейнерами
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Изготовление упаковки 
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Изготовление / арендаГЗП 
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                        <li className={s.mainInner + ' reset'}>
                            <h3 className={s.subtitle + ' reset text-uppercase'}>
                                Изготовление и поставка реквизитов крепления
                            </h3>
                            <div className={s.frame}></div>
                            <Modal/>
                        </li>
                    </ul>
                </div>

            </section>
}

export default TypesWork;