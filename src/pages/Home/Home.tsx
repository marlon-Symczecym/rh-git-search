import React from 'react';
import Input from '../../components/Input/Input';
import RepositoryBox from '../../components/RepositoryBox/RepositoryBox';
import UserBox from '../../components/UserBox/UserBox';

import { Container, Content, Title, Text } from './style';

function Home() {
	return (
		<Container>
			<Title>Rh Git Search</Title>
			<Input
				type="text"
				name="search"
				placeholder="Digite o nome do usuário..."
			/>
			<Text>Usuário encontrado</Text>

			<UserBox />
			<Text>Repositórios</Text>

			<Content>
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
				<RepositoryBox />
			</Content>
		</Container>
	);
}

export default Home;
