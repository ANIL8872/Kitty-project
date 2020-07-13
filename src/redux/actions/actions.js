import { USERACTION } from '../actions/actiontype';
export const useraction = (email, nickname) => {
    return { type: USERACTION.DATA_GETTER, payload: { 'email': email, 'nickname': nickname } }
}