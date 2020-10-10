import { ReposState, ReposAction } from './modules/repos/types';
import { UserState, UserAction } from './modules/user/types';
import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';

export interface StoreState {
	users: UserState;
	repos: ReposState;
}

export type StoreAction = UserAction | ReposAction;

export default (
	reducers: Reducer<StoreState, StoreAction>,
	middlewares: Middleware[],
) => {
	const enhancer = applyMiddleware(...middlewares);

	return createStore(reducers, enhancer);
};
