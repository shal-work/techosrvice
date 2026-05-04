import React from 'react';
import s from './CallUs.module.css';

const CallUs = () => {
    return <section className={s.call}>
            <h2 className={s.title + ' reset text-uppercase'}>
                Нужно предотвратить штрафы и потери
                <span className={s.title + ' ' + s.transfer}>от простоя груза?</span> 
            </h2>
            <div className={s.telephone + ' text-uppercase'}>
                <p className={s.text + ' reset'}>звоните:</p>
                <p className={s.number + ' reset'}>+7(812) 438-04-74</p>
            </div>
            <div className={s.rectangle}></div>
        </section>
}

export default CallUs;