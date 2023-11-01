
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";


let inicialState = {
    certificatesList: [
    {
        id:1,
        title:"Portugal AeroPress Championship 2022",
    },{
        id:2,
        title:"Brewing Cup Belarus 2017",
    },{
        id:3,
        title:"Brewing Foundation 2018",
    },
    {
        id:4,
        title:"Brewing Cup Belarus 2017",
    },{
        id:5,
        title:"Brewing intermediate 2017",
    },{
        id:6,
        title:"Barista coffee trainer 2015",
    }
    ]
}


const certificateReducer = (state = inicialState, action = {type:INITIALIZED_SUCCESS}) => {
    //debugger
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

export default certificateReducer;