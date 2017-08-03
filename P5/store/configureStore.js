import { createStore } from 'redux'
import rootReducer from '../Model/reducers/indexReducer'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    debugger;

    if (module.hot) {
        module.hot.accept('../Model/reducers/indexReducer', () => {
            const nextRootReducer = require('../Model/reducers/indexReducer');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}