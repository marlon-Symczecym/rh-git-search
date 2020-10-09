import React from 'react';
import Input from '../../components/Input/Input';
import styled from 'styled-components';

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 400;
	color: var(--tertiary);
	margin: 3rem 0;
`;

function Home() {
	return (
		<HomeContainer>
			<Title>Rh Git Search</Title>
			<Input />
		</HomeContainer>
	);
}

export default Home;
