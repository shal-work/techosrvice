import React, {Suspense} from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageServices from './components/PageServices/PageServices';
import PageGallery from './components/PageGallery/PageGallery';
import PageMaterials from './components/PageMaterials/PageMaterials';
import PageContacts from './components/PageContacts/PageContacts';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
console.log("%c  РОССИЯ  ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");


const App = (props) => {


    return (

        <BrowserRouter>{
            <main className={s.main}>
                <Header
                    state= {props.state}
                    dispatch={props.dispatch}
                />
                <div className={s.wrapper}>
                    <h1 className='visually-hidden'>ТехноСервис</h1>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element = {<Home/>}/>
                            <Route path='/about' element = {<About/>}/>
                            <Route path='/services' element = {<PageServices/>}/>
                            <Route path='/gallery' element = {<PageGallery/>}/>
                            <Route path='/materials' element = {<PageMaterials/>}/>
                            <Route path='/contacts' element = {<PageContacts/>}/>
                            <Route path="*" element={<Home/>} />
                        </Routes>
                    </Suspense>
                </div> 
                <Footer/>
            </main>
        }
        </BrowserRouter>
    );
};

export default App;