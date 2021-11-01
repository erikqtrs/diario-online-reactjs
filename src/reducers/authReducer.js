
/*
    {uid: 12345dfa,
    displayName: Erik}
*/

import { types } from "../types/types";

export const AuthReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                displayName: action.payload.displayName,
            };
        case types.logout:
            return {};
        
        case types.deleteUser:
            return {}
        default:
            return state;
    }

}