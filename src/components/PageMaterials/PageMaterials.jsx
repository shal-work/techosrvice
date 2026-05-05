import React from 'react';
import Cases from '../Home/Cases/Cases'
import Form from '../Home/Form/Form'
import Reasons from '../Home/Reasons/Reasons'
import ContourMap from '../Home/ContourMap/ContourMap'

import s from './PageMaterials.module.css';

const PageMaterials = () => {
    return 	<div className={s.block}>
               <Cases/>
               <Form/>
               <Reasons/>
               <ContourMap/>
            </div>
}

export default PageMaterials;