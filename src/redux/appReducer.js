const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let inicialState = {
    isInitialized: false
}


const appReducer = (state = inicialState, action = {type:INITIALIZED_SUCCESS}) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                isInitialized: true
            }
        }

        default:{
           
            return state;
        }
    }
};

export const initializedSuccess = () => (dispatch) => ({ type: 'INITIALIZED_SUCCESS'});

export default appReducer;