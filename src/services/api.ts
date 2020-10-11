export interface ResponseUserApi {
	data: JSON | string;
	user_success: boolean;
	user_status: number;
}

export async function api(name: string): Promise<ResponseUserApi> {
	const url = 'https://api.github.com/users';

	try {
		const response = await fetch(`${url}/${name}`);
		const json = await response.json();

		return {
			data: json,
			user_success: true,
			user_status: response.status,
		};
	} catch (err) {
		return {
			data: '',
			user_success: true,
			user_status: 404,
		};
	}
}

interface ResponseReposApi {
	data: JSON | string;
	repos_success: boolean;
	repos_status: number;
}

export async function reposApi(repos_url: string): Promise<ResponseReposApi> {
	const response = await fetch(repos_url);
	const json = await response.json();

	return {
		data: json,
		repos_success: true,
		repos_status: response.status,
	};
}
