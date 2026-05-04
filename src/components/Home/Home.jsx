import React from 'react';
import Hero from './Hero/Hero'
import LogoString from './LogoString/LogoString'
import Speed from './Speed/Speed'
import ServiceBlock from './ServiceBlock/ServiceBlock'
import ClosingNeeds from './ClosingNeeds/ClosingNeeds'
import CallUs from './CallUs/CallUs'
import WhoService from './WhoService/WhoService'
import TypesWork from './TypesWork/TypesWork'
import Cases from './Cases/Cases'
import Form from './Form/Form'
import Reasons from './Reasons/Reasons'
import ContourMap from './ContourMap/ContourMap'

import s from './Home.module.css';

const Home = () => {
    return 	<div className={s.home}>
               <section className={s.container}>
                  <Hero/>
               </section>
               <LogoString/>
               <Speed/>
               <ServiceBlock/>
               <ClosingNeeds/>
               <CallUs/>
               <WhoService/>
               <TypesWork/>
               <Cases/>
               <Form/>
               <Reasons/>
               <ContourMap/>
            </div>
}

export default Home;