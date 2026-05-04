import React from 'react';
import  './Speed.css';
import s from './Speed.module.css';

import slogo from '../LogoString/LogoString.module.css';

const Speed = () => {
    return 	<section className={s.speed}>
                <div className={s.container}>
                    <h2 className={slogo.title + ' ' + s.title + ' text-uppercase reset'}>РЕКОРД СКОРОСТИ</h2>
                    <div className={s.content}>
                        <div className={s.item}>
                            <p className={s.time + ' reset'}>1.5 <span className={s.timetext + ' reset'}>часа</span></p>
                            <p className={s.text + ' reset'}>от заявки до выезда на объект</p>
                        </div>
                        <div className={s.item}>
                            <p className={s.time + ' reset'}>4 <span className={s.timetext + ' reset'}>часа</span></p>
                            <p className={s.text + ' reset'}>времени ушло на погрузку</p>
                        </div>
                        <div className={s.item}>
                            <p className={s.time + ' reset'}>3 <span className={s.timetext + ' reset'}>часа</span></p>
                            <p className={s.text + ' reset'}>среднее время приезда бригады на объект</p>
                        </div>
                    </div>
                </div>
                <h3 className={s.subtitle + ' reset'}>ТехноСервис Порт</h3>    
                <button className= {s.btn + ' button'} type="button"> 
                    Смотреть кейс
                </button>
            </section>
}

export default Speed;