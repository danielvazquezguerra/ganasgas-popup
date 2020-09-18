import store from '../store';




export const mostrarPopup = () => {
    
    store.dispatch({
        type: 'GET_POPUP',
        value: true
    })
}
