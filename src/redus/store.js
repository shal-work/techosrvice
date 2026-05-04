import menuReducer from './reduser';
import {initialActiveMenuCreator} from './reduser';


let store = {
    _state: { 
        statusMenu: {}
    },
    getState() {
        let statusManu = menuReducer(initialActiveMenuCreator());
        this._state.statusMenu = {...statusManu};
        return this._state;
    },
    _callSubscriber() {
        console.log('Вызов state');
    },
    dispatch (action) {
        this._state.statusMenu = menuReducer(action, this._state.statusMenu);
        this._callSubscriber(this._state);
    },
    subscribe (observer){
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;