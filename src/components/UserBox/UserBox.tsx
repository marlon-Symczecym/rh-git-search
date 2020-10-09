import React from 'react';

import {
	Link,
	UserBoxContainer,
	Box,
	Avatar,
	DescriptionContainer,
	Text,
	Repositorys,
} from './style';

type PropTypes = {
	name?: string;
	avatar_url?: string;
	location?: string;
	public_repos?: string;
	html_url?: string;
};

function UserBox({ html_url }: PropTypes) {
	return (
		<UserBoxContainer>
			<Link href={html_url}>
				<Box>
					<Avatar></Avatar>
					<DescriptionContainer>
						<Text size="2rem" color="var(--highlight)">
							Marlon Symczecym
						</Text>
						<Text size="1.6rem" color="var(--secundary-text)">
							Rio Negrinho - SC - Brazil
						</Text>
					</DescriptionContainer>
					<Repositorys>Repositórios públicos: 56</Repositorys>
				</Box>
			</Link>
		</UserBoxContainer>
	);
}

export default UserBox;
