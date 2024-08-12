import { BUY_ICECREAM } from "./iceCreamTypes"; 
//import a named export as a property of an object

const initialState = {
    numCakes: 10,
    numIcecreams: 20,

}

const iceCreamReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numIcecreams: state.numIcecreams-1
            }
            default: return state
    }
}

export default iceCreamReducer

