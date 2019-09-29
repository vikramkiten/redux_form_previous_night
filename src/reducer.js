

let initialState={
    inputvalue:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "ONE":
            return {...state,inputvalue:action.data}
        default:
            return state;
    }

}

export default reducer;