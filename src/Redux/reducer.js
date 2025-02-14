import { combineReducers } from "redux";

const initialState = {
    AddResult : 0, Subresult : 0,  MultiResult : 1, DivResult : 0, PowerResult : 0, ModResult : 0,
}

const addReducer = (state = initialState.AddResult , action) =>{
    switch(action.type){
        case 'ADDITION' :
            return{
                ...state,
                AddResult : state.AddResult + action.payload,
            }
            default:
                return state;
    }
}

const subReducer = ( state = initialState.Subresult, action) =>{
    switch(action.type){
        case 'SUBTRACT' :
            return{
                ...state,
                Subresult : action.payload - state.Subresult,
            }
            default:
                return state;
    }
}

const multipleReducer = ( state = initialState.MultiResult, action) =>{
    switch(action.type){
        case 'MULTIPLE' :
            return{
                ...state,
                MultiResult : action.payload - state.MultiResult,
            }
            default:
                return state;
    }
}

const divReducer = ( state = initialState.DivResult, action) =>{
    switch(action.type){
        case 'DIVISION' :
            return{
                ...state,
                DivResult : action.payload - state.DivResult,
            }
            default:
                return state;
    }
}

const powerReducer = ( state = initialState.PowerResult, action) =>{
    switch(action.type){
        case 'POWER' :
            return{
                ...state,
                PowerResult : action.payload - state.PowerResult,
            }
            default:
                return state;
    }
}

const modReducer = ( state = initialState.ModResult, action) =>{
    switch(action.type){
        case 'MODULUS' :
            return{
                ...state,
                ModResult : action.payload - state.ModResult,
            }
            default:
                return state;
    }
}

const rootReducer = combineReducers({
    addition : addReducer,
    subtract : subReducer,
    multiple : multipleReducer,
    division : divReducer,
    power : powerReducer,
    modules : modReducer,
});


export default rootReducer;