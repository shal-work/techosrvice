import React from 'react';
import WhoService from '../Home/WhoService/WhoService'
import TypesWork from '../Home/TypesWork/TypesWork'
import Cases from '../Home/Cases/Cases'
import Form from '../Home/Form/Form'
import Reasons from '../Home/Reasons/Reasons'
import ContourMap from '../Home/ContourMap/ContourMap'

import s from './PageGallery.module.css';

const PageGallery = () => {
    return 	<div className={s.block}>
               <WhoService/>
               <TypesWork/>
               <Cases/>
               <Form/>
               <Reasons/>
               <ContourMap/>
            </div>
}

export default PageGallery;