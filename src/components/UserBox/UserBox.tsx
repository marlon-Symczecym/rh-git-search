import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { reposRequest } from '../../store/modules/repos/actions';

import {
	Link,
	UserBoxContainer,
	Box,
	Avatar,
	DescriptionContainer,
	Text,
	Repositorys,
} from './style';

function UserBox() {
	const { user } = useSelector((state: StoreState) => state.users);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(
			reposRequest({
				repos_url: user.repos_url,
			}),
		);
	}, [dispatch, user]);

	return (
		<UserBoxContainer>
			<Link href={user.html_url} target="_blank">
				<Box>
					<Avatar src={user.avatar_url}></Avatar>
					<DescriptionContainer>
						<Text size="2rem" color="var(--highlight)">
							{user.name}
						</Text>
						<Text size="1.6rem" color="var(--secundary-text)">
							{user.location}
						</Text>
					</DescriptionContainer>
					<Repositorys>Repositórios públicos: {user.public_repos}</Repositorys>
				</Box>
			</Link>
		</UserBoxContainer>
	);
}

export default UserBox;
