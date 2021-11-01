import { types } from "../types/types";

export const ThemesReducer = ( state = 'theme-blue', action ) => {

    switch (action.type) {
        case types.changeTheme:
            return action.payload;
    
        default:
            return state;
    }

}