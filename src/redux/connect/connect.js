import { useraction } from '../actions/actions';
const mapPropsToDispatch = (dispatch) => {
    return {
        datagetter: (email, nickname = '') => dispatch(useraction(email, nickname))
    }
}

export default mapPropsToDispatch