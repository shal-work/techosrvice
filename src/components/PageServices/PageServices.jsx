import React from 'react';
import Speed from '../Home/Speed/Speed'
import ServiceBlock from '../Home/ServiceBlock/ServiceBlock'
import ClosingNeeds from '../Home/ClosingNeeds/ClosingNeeds'
import CallUs from '../Home/CallUs/CallUs'
import WhoService from '../Home/WhoService/WhoService'
import TypesWork from '../Home/TypesWork/TypesWork'
import Cases from '../Home/Cases/Cases'
import Form from '../Home/Form/Form'
import Reasons from '../Home/Reasons/Reasons'
import ContourMap from '../Home/ContourMap/ContourMap'

import s from './PageServices.module.css';

const PageServices = () => {
    return 	<div className={s.block}>
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

export default PageServices;