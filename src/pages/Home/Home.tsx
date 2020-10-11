import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store/createStore';

import Input from '../../components/Input/Input';
import RepositoryBox from '../../components/RepositoryBox/RepositoryBox';
import UserBox from '../../components/UserBox/UserBox';

import { Container, Content, Title, Text } from './style';

function Home() {
	const { repos } = useSelector((state: StoreState) => state.repos);
	const { user_success, user_status } = useSelector(
		(state: StoreState) => state.users,
	);

	React.useEffect(() => {
		window.addEventListener('load', () => console.clear());
	}, [user_status]);

	if (repos)
		return (
			<Container>
				<Title>Rh Git Search</Title>
				<Input
					type="text"
					name="search"
					placeholder="Digite o nome do usuário..."
				/>

				{user_status !== 404 && user_success && (
					<>
						<Text>Usuário encontrado</Text>
						<UserBox />

						<Text>Repositórios: {repos.length > 1 ? repos.length : '0'}</Text>
						<Content>
							<RepositoryBox repos={repos} />
						</Content>
					</>
				)}

				{user_status === 404 && (
					<>
						<Text>Usuário não encontrado :(</Text>
					</>
				)}
			</Container>
		);
	else {
		return null;
	}
}

export default Home;
