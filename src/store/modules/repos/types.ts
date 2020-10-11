import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ReposAction = ActionType<typeof actions>;

export interface ReposState {
	readonly repos_url?: string;
	readonly repos: [
		{
			name: string;
			html_url: string;
			stargazers_count: number;
			watchers: number;
			forks: string;
			language: string;
		},
	];
	readonly repos_success?: boolean;
	readonly repos_error?: boolean | number;
	readonly repos_status: number;
}

export interface ReposURL {
	readonly repos_url: string;
}
