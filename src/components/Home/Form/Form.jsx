import React from 'react';
import s from './Form.module.css';
import ts_png from '../../../assets/img/ts.png';
import ts_png_webp from '../../../assets/img/ts.webp';
import sprite from "../../../assets/img/sprite.svg";

const Form = () => {
    return 	<section className={s.block}>
                <div className={s.blockAction}>
                    <h2 className={s.title + ' reset text-uppercase'}>Отправьте заявку</h2>
                    <p className={s.context + ' reset'}>перезвоним в течении 5 минут</p>
                    <form className={s.form} action='#' encType='multipart/form-data' method='POST'>
                        <div className={s.formBlock}>
                            <label className='visually-hidden' htmlFor='name'>Name</label>
                            <input className={s.formName} type='text' id='name' name='name' placeholder='Ваше имя' required autoComplete='name' />
                        </div>
                        <div className={s.formBlock}>
                            <label className='visually-hidden' htmlFor='email-phone'>email / phone</label>
                            <input className={s.formName} id='email-phone' type='text' name='contactInfo' pattern='\+[0-9]{1,4}[0-9]{1,10}|(.*)@(.*)\.[a-z]{2,5}' title='+7XXXXXXXXXX' placeholder='Ваш телефона или email'/>
                        </div>
                        <div className={s.formBlock}>
                            <label className='visually-hidden' htmlFor='message'>Description</label>
                            <textarea className={s.formDescription} type='text' id='description' name='message' placeholder='Текст сообщения...Опишите здесь свой вопрос...' required autoComplete='off' minLength='20' maxLength='1000' rows='10' cols='33' ></textarea>
                        </div>
                        <div className={s.blockBtn}>
                            <button className={s.btn + ' button'} name='submit' type='submit' tabIndex='0'>Отправить</button>
                            <input type="file" id="file-upload" hidden/>
                            <label htmlFor="file-upload" className={s.castomIcon} tabIndex='0'>                          
                                <svg className={s.icon} width='39' height='39'>
                                    <use href={`${sprite}#paperclip`} />
                                </svg>
                            </label>
                        </div>
                    </form>
                </div>
                <div className={s.blockConsultation}>
                    <h2 className={s.titleConsultation + ' reset'}>Консультация</h2>
                    <p className={s.text + ' reset'}>Консультируем и оперативно помогаем решить любой вопрос. Свяжитесь с нами удобным для Вас способом или отправьте данную заявку и персональный менеджер тут же перезвонит Вам.</p>
                    <picture>
                        <source type="image/webp" srcSet={ts_png_webp}></source>
                        <img className={s.img} src={ts_png} alt='ts' width="477" height="321"/>
                    </picture>
                    <p className={s.textCallUs + ' reset'}>Звоните в любое время:</p>
                </div>
            </section>
}

export default Form;