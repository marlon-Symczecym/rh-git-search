import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export interface UserState {
	readonly name?: string;
	readonly user: {
		name: string;
		avatar_url: string;
		location: string;
		html_url: string;
		public_repos: string;
		repos_url: string;
	};
	readonly user_success?: boolean;
	readonly user_error?: boolean;
	readonly user_status: number;
}

export interface UserName {
	readonly name: string;
}
