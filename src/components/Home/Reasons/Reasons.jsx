import React from 'react';
import s from './Reasons.module.css';
import sennebogen_png from '../../../assets/img/sennebogen.png';
import sennebogen_webp from '../../../assets/img/sennebogen.webp';
import sdlg_png from '../../../assets/img/sdlg.png';
import sdlg_webp from '../../../assets/img/sdlg.webp';
import fuchs_png from '../../../assets/img/fuchs.png';
import fuchs_webp from '../../../assets/img/fuchs.png';
import zoomlion_png from '../../../assets/img/zoomlion.png';
import zoomlion_webp from '../../../assets/img/zoomlion.webp';

const Reasons = () => {
    return 	<section className={s.block}>
                <h2 className='visually-hidden'>Reasons</h2>
                <div className={s.head}>
                    <p className={s.num + ' reset'}>5</p>
                    <p className={s.textHeader + ' reset text-uppercase'}>веских причин</p>
                    <p className={s.contentHeader + ' reset text-uppercase'}>почему нам доверяют клиенты</p>
                </div> 
                <ol className={s.container + ' reset'}>
                    <li className={s.row}>
                        <div className={s.item}>
                            <p className={s.text + ' reset'}>Ощутимая выгода для наших клиентов</p>
                            <p className={s.content + ' reset'}>Оптимизация затрат клиента и концентрация необходимых услуг в одном месте. Мы возьмем на себя весь цикл работ, снизим риски издержек для Вас.</p>
                        </div>
                    </li>
                    <li className={s.row}>
                        <div className={s.item}>
                            <p className={s.text + ' reset'}>Надежность и безопасность</p>
                            <p className={s.content + ' reset'}>Строго соблюдаем нормы РФ и мировые стандарты техники безопасности. Созданные нами изделия крепки и надежны. Опытные, квалифицированные специалисты помогают сохранить закрепленный нами груз, предусмотрев форс-мажорные ситуации. Штатные бригады выезжают «по звонку» 24 на 7 – вы можете положиться на нас, когда нужно.</p>
                        </div>
                    </li>
                    <li className={s.row}>
                        <div className={s.item}>
                            <p className={s.text + ' reset'}>Современные технологии</p>
                            <p className={s.content + ' reset'}>новаторство <br/>квалификация и экспертность персонала <br/>современная техника.</p>
                        </div>
                        <div className={s.logotype}>
                            <picture>
                                <source type="image/webp" srcSet={sennebogen_webp}></source>
                                <img className={s.img} src={sennebogen_png} alt='sennebogen' width="175" height="45"/>
                            </picture>
                            <picture>
                                <source type="image/webp" srcSet={sdlg_webp}></source>
                                <img className={s.img} src={sdlg_png} alt='sdlg' width="120" height="79"/>
                            </picture>
                            <picture>
                                <source type="image/webp" srcSet={fuchs_webp}></source>
                                <img className={s.img} src={fuchs_png} alt='fuchs' width="128" height="40"/>
                            </picture>
                            <picture>
                                <source type="image/webp" srcSet={zoomlion_webp}></source>
                                <img className={s.img} src={zoomlion_png} alt='zoomlion' width="137" height="20"/>
                            </picture>
                        </div>
                    </li>
                    <li className={s.row}>
                        <div className={s.item}>
                            <p className={s.text + ' reset'}>Комплексное обслуживание</p>
                            <p className={s.content + ' reset'}>Вам больше не нужно искать добросовестных исполнителей для каждого вида работ и поставщиков материалов и ГЗП, самостоятельно контролировать процесс. Мы оказываем все приведенные услуги без привлечения посторонних организаций. Всё в одном месте. Минимум Ваших усилий.</p>
                        </div>
                    </li>
                    <li className={s.row}>
                        <div className={s.item}>
                            <p className={s.text + ' reset'}>Высочайшая скорость работ</p>
                            <p className={s.content + ' reset'}>Удерживаем высокий качественный уровень оказываемых услуг, при этом, избегая возможные простои техники, оборудования и транспорта, возникающие из-за организационных вопросов. Работа компании построена на организованности и слаженной работе. Оперативно и своевременно реагируем на любые вызовы – 24 на 7 – и выезжаем на объекты в кратчайшие сроки.</p>
                        </div>
                    </li>
                </ol>
            </section>
}

export default Reasons;