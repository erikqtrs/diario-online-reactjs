import { types } from "../types/types"


export const ChangeTheme = (theme) => {
    return {
        type: types.changeTheme,
        payload: theme
    }
}