import React from 'react';

import Card from './Card/Card';

import { Link, Container, Content, DataBox, Text } from './style';

type Proptypes = {
	name?: string;
	stars?: string;
	watchers?: string;
	forks?: string;
	html_url?: string;
	data?: string;
};

function RepositoryBox({ html_url, data }: Proptypes) {
	return (
		<Link href={html_url}>
			<Container>
				<Text size="1.8rem" color="var(--highlight)">
					api-next-level-week-2
				</Text>
				<DataBox>
					<Content>
						<Card
							title="Stars"
							data="20"
							symbol="far fa-star"
							color="var(--highlight)"
						/>

						<Card title="Watchers" data="50" symbol="far fa-eye" />

						<Card
							title="Forks"
							data="2"
							symbol="fas fa-code-branch"
							color="var(--tertiary)"
						/>
					</Content>
				</DataBox>
			</Container>
		</Link>
	);
}

export default RepositoryBox;
