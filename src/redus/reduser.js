// const ACTIVE_MENU = 'active_menu';


const ACTIVE_MENU = 'ACTIVE_MENU';
const TOGGLEE_MENU = 'TOGGLEE_MENU';


let initialState = {
    activeMenu: false
}


const menuReducer = (action, state = initialState) => {
    switch (action.type) {
        case ACTIVE_MENU: 
            return state;
        case TOGGLEE_MENU: 
                state.activeMenu = state.activeMenu ? false : true;
            return state;
        default:

            return state;
    } 
}

export const initialActiveMenuCreator = () => ({ type: ACTIVE_MENU});
export const toggleMenuCreator = () => ({ type: TOGGLEE_MENU});

export default menuReducer;
