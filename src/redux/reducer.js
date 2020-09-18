const initialState = {
    visibility: 'ALL',
    todos:[]
}

const reducer = (state= initialState, action) => {
 
    
    switch (action.type) {


        case 'GET_POPUP':
            return {
                ...state,
                value: true
            }

        

        ;

    default: 
        return state;
    }
}

export default reducer;