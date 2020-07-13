import { USERACTION } from '../actions/actiontype';
const initialState = {
    email: '',
    nickname: ''
}
const reducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case USERACTION.DATA_GETTER:
            return {
                ...state,
                email: action.payload.email,
                nickname: action.payload.nickname
            }
        default:
            return state
    }
}

export default reducer;