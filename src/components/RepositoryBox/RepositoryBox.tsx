import React from 'react';

import Card from './Card/Card';

import { Link, Container, Content, DataBox, Text } from './style';

type Proptypes = {
	repos: [
		{
			name?: string;
			stargazers_count?: number;
			watchers?: number;
			forks?: string;
			html_url?: string;
			data?: string;
		},
	];
};

function RepositoryBox({ repos }: Proptypes) {
	if (repos)
		return (
			<>
				{repos.map((repo) => (
					<Link key={repo.html_url} href={repo.html_url} target="_blank">
						<Container>
							<Text size="1.8rem" color="var(--highlight)">
								{repo.name}
							</Text>
							<DataBox>
								<Content>
									<Card
										title="Stars"
										data={repo.stargazers_count}
										symbol="far fa-star"
										color="var(--highlight)"
									/>

									<Card
										title="Watchers"
										data={repo.watchers}
										symbol="far fa-eye"
									/>

									<Card
										title="Forks"
										data={repo.forks}
										symbol="fas fa-code-branch"
										color="var(--tertiary)"
									/>
								</Content>
							</DataBox>
						</Container>
					</Link>
				))}
			</>
		);
	else {
		return null;
	}
}

export default RepositoryBox;
