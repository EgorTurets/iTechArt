import { createStore } from 'redux'
import rootReducer from '../reducers/indexReducer'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/indexReducer', () => {
            const nextRootReducer = require('../reducers/indexReducer');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}