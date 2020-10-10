export async function api(name: string): Promise<object> {
	const url = 'https://api.github.com/users';
	if (name !== '') {
		const response = await fetch(`${url}/${name}`);
		const json = await response.json();

		return {
			data: json,
			user_sucess: true,
		};
	} else {
		return {
			user_sucess: false,
		};
	}
}

export async function reposApi(repos_url: string): Promise<object> {
	if (repos_url) {
		const response = await fetch(repos_url);
		const json = await response.json();

		return {
			data: json,
			repos_sucess: true,
		};
	} else {
		return {
			repos_sucess: false,
		};
	}
}
