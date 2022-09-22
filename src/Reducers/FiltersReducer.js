// Exists variations:
// status : low | middle |risked
// type: TRST | THT | THC

const initialState = {
    status: null, 
    type: null
}

const FilterReducer = (state=initialState, action) => { 
    switch (action.type){
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload,
            }
        case UPDATE_TYPE:
            return {
                ...state,
                type: action.payload,
            }
        case CLEAR_FILTERS:
            return initialState;
        case CLEAR_STATUS:
            return {
                ...state,
                status: null
            }
        case CLEAR_TYPE:
            return {
                ...state,
                type: null
            }
        default:
            return state;
    }

}
 
export {FilterReducer}

export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_STATUS = 'CLEAR_STATUS'
export const CLEAR_TYPE = 'CLEAR_TYPE';

export const clearType = () => ({type: CLEAR_TYPE})

export const clearStatus = () => ({type: CLEAR_STATUS})

export const updateStatus = (status) =>{
    if (status === undefined) status = null
    return {
        type: UPDATE_STATUS,
        payload: status
    }
}

export const updateType = (type) =>{
    return {
        type: UPDATE_TYPE,
        payload: type
    }
}

export const clearFilters = () => ({type: CLEAR_FILTERS})