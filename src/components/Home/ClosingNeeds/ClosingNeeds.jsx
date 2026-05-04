import React from 'react';
import s from './ClosingNeeds.module.css';


const ClosingNeeds = () => {
    return  <>
        <section className={s.block}>
            <div className={s.container}>
                <h2 className={s.title + ' reset'}>
                    Закрываем все потребности по обеспечению погрузочно-разгрузочных работ материально-технической базой
                </h2>
                <p className={s.text + ' reset'}>
                    Собственное производство, сборудование, cладские помещения. Продажа, а также изготовление нестандартных комплектующих под заказ
                </p>
                <ul className={s.ul + ' reset'}>
                    <li className={s.li + ' ' + s.forklift + ' reset'}>
                        Грузоподъемные приспособления
                    </li>
                    <li className={s.li + ' ' + s.accessories  + ' reset'}>
                        Комплектующие
                    </li>
                    <li className={s.li + ' ' + s.packaging  + ' reset'}>
                        Упаковка и упаковочные приспособления
                    </li>
                    <li className={s.li + ' ' + s.forklift + ' reset'}>
                        Материалы
                    </li>
                </ul> 
                <div className={s.wave}></div>
            </div>
        </section>
    </>
}

export default ClosingNeeds;