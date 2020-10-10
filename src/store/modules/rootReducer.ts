import { StoreState } from './../createStore';
import { combineReducers } from 'redux';

import users from './user/reducer';
import repos from './repos/reducer';

export default combineReducers<StoreState>({
	users,
	repos,
});
