import { UserState, UserAction } from './types';

const initialState: UserState = {
	name: '',
	user: {
		name: '',
		avatar_url: '',
		location: '',
		html_url: '',
		public_repos: '',
		repos_url: '',
	},
	user_success: false,
	user_error: false,
};

export default function user(
	state = initialState,
	action: UserAction,
): UserState {
	switch (action.type) {
		case '@user/USER_REQUEST':
			return {
				...state,
				name: action.payload.name,
			};
		case '@user/USER_REQUEST_SUCCESS':
			const {
				name,
				avatar_url,
				location,
				html_url,
				public_repos,
				repos_url,
			} = action.payload.user;
			return {
				...state,
				user: {
					name,
					avatar_url,
					location,
					html_url,
					public_repos,
					repos_url,
				},
				user_success: true,
			};
		case '@user/USER_REQUEST_FAILURE':
			return {
				...state,
				user_error: true,
			};

		default:
			return state;
	}
}
