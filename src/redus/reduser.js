// const ACTIVE_MENU = 'active_menu';


const ACTIVE_MENU = 'ACTIVE_MENU';
const TOGGLEE_MENU = 'TOGGLEE_MENU';
const LANGUAGE_RU = 'LANGUAGE_RU';
const LANGUAGE_CH = 'LANGUAGE_CH';


let initialState = {
    activeMenu: false,
    language: 'ru',
    isToggleLanguage: true,
}


const menuReducer = (action, state = initialState) => {
    switch (action.type) {
        case ACTIVE_MENU: 
            return state;
        case TOGGLEE_MENU: 
                state.activeMenu = state.activeMenu ? false : true;
            return state;
        case LANGUAGE_RU: 
                state.isToggleLanguage = true;
                state.language = 'ru';
            return state;
        case LANGUAGE_CH: 
                state.isToggleLanguage = false;
                state.language = 'ch';
            return state;
        default:

            return state;
    } 
}

export const initialActiveMenuCreator = () => ({ type: ACTIVE_MENU});
export const toggleMenuCreator = () => ({ type: TOGGLEE_MENU});
export const toggleLangugeRu = () => ({ type: LANGUAGE_RU});
export const toggleLangugeCh = () => ({ type: LANGUAGE_CH});

export default menuReducer;
