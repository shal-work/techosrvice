import React from 'react';
import Form from '../Home/Form/Form'
import ContourMap from '../Home/ContourMap/ContourMap'

import s from './PageContacts.module.css';

const PageContacts = () => {
    return 	<div className={s.block}>
               <Form/>
               <ContourMap/>
            </div>
}

export default PageContacts;