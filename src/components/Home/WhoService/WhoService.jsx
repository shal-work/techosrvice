import React, {useEffect, useState} from 'react';
import s from './WhoService.module.css';
import {NavLink} from "react-router-dom";
import terminals_png from '../../../assets/img/terminals.png'
import terminals_webp from '../../../assets/img/terminals.webp'
import operators_png from '../../../assets/img/operators.png'
import operators_webp from '../../../assets/img/operators.webp'
import forwarder_png from '../../../assets/img/forwarder.png'
import forwarder_webp from '../../../assets/img/forwarder.webp'

const WhoService = () => {

    const [hasTouch, ] = useState(window.matchMedia("(pointer: coarse)").matches); 
    const [onmouseup, setOnmouseup] = useState(false); 

    

    useEffect(() => {
        const slides = document.getElementById("slides");
        const bLock = document.getElementById("bLock");
        const item = document.querySelectorAll('.item');
        const slidesWidth = item.length * item[0].offsetWidth;
        let delta = document.documentElement.clientWidth - slidesWidth - 20;

        bLock.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                if (slides.scrollLeft < delta ) {
                    slides.scrollIntoView({ behavior: 'smooth' })
                    let n = 0;
                    let timerId = setInterval(() => {       
                        slides.scrollLeft += 2;
                        n += 2;
                        if (n > 100) {
                            clearInterval(timerId); 
                        }
                    }, 10);               
                } 
            }
            else if (e.deltaY < 0) {
                if(slides.scrollLeft > 0 ) {
                    slides.scrollIntoView({ behavior: 'smooth' })
                    let n = 0;
                    let timerId = setInterval(() => {       
                        slides.scrollLeft -= 2;
                        n -= 2;
                        if (n < -100) {
                            clearInterval(timerId); 
                        }
                    }, 10);               
                }
            }            
        }, { passive: true });
    }, [])
    
     const handleMouseDown = (e) => {  
        if (!hasTouch) {
            e.preventDefault();
            setOnmouseup(true);
        }
    }

    let oldx = 0;
    const handleMouseMove = e => {  
        const slides = document.getElementById("slides");
        const step = 20;
        if (!hasTouch) {
            if (onmouseup) {

                if (e.pageX < oldx) { // direction = "left";
                    
                    slides.scrollIntoView({ behavior: 'smooth' })
                    slides.scrollLeft += step;
                } else if (e.pageX > oldx) { // direction = "right";
                    slides.scrollIntoView({ behavior: 'smooth' })
                    slides.scrollLeft -= step;
                }
                oldx = e.pageX;
            }
        }
    }
    const handleMouseUp = e => {  
        if (!hasTouch) {
            setOnmouseup(false);
        }
    }
    
    
    return 	<section className={s.bLock} id='bLock'>
                <h2 className={s.title + ' text-uppercase reset'}>наши услуги для:</h2>
                <div className={s.carousels}>
                    <div className={s.inner}>
                        <div id='slides' className={s.slides} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
                            <div className={s.item + ' item'}>
                                <picture>
                                    <source type="image/webp" srcSet={terminals_webp}></source>
                                    <img className={s.img} src={terminals_png} alt='platforms' width="330" height="422"/>
                                </picture>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' text-uppercase reset'}>Ж/Д терминалы</h3>
                                    <p className={s.text + ' reset'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                    <NavLink to="/services" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Ж/Д терминалы">Далее</NavLink>
                                </div>
                            </div>
                            <div className={s.item + ' item'}>
                                <picture>
                                    <source type="image/webp" srcSet={operators_webp}></source>
                                    <img className={s.img} src={operators_png} alt='platforms' width="330" height="422"/>
                                </picture>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' text-uppercase reset'}>Портовые операторы</h3>
                                    <p className={s.text + ' reset'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                    <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Портовые операторы">Далее</NavLink>   
                                </div>
                            </div>
                            <div className={s.item}>
                                <picture>
                                    <source type="image/webp" srcSet={forwarder_webp}></source>
                                    <img className={s.img} src={forwarder_png} alt='platforms' width="330" height="422"/>
                                </picture>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' text-uppercase reset'}>экспедиторы</h3>
                                    <p className={s.text + ' reset'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                    <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о экспедиторах">Далее</NavLink>                                      
                                </div>
                            </div>
                            <div className={s.item}>
                                <picture>
                                    <source type="image/webp" srcSet={terminals_webp}></source>
                                    <img className={s.img} src={terminals_png} alt='platforms' width="330" height="422"/>
                                </picture>
                                <div className={s.content}>
                                    <h3 className={s.subtitle + ' text-uppercase reset'}>Ж/Д терминалы</h3>
                                    <p className={s.text + ' reset'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    </p>
                                    <NavLink  to="/" className={s.btn + ' btn text-nobreak'} aria-label="Подробнее о Ж/Д терминалы">Далее</NavLink>   
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </section>
}

export default WhoService;