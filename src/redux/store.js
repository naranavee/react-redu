import { compose, legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
//importing a default export

import { thunk } from 'redux-thunk';

const store = createStore(rootReducer,
    composewith
export default store