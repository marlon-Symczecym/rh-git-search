import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const InputText = styled.input.attrs({
	id: 'search',
	name: 'search',
	placeholder: 'Digite o nome do usuário...',
	type: 'text',
})`
	width: 70rem;
	height: 6rem;
	border: none;
	border-radius: 0.5rem 0 0 0.5rem;
	font-size: 1.8rem;
	color: var(--input-text);
	padding-left: 1.5rem;
	background-color: var(--secundary);
	::placeholder {
		color: var(--input-text);
	}
`;

const Button = styled.button`
	width: 17rem;
	height: 6rem;
	border: none;
	outline: none;
	border-radius: 0 0.5rem 0.5rem 0;
	cursor: pointer;
	background-color: var(--highlight);
	font-size: 1.8rem;
	color: var(--input-text);
	transition: all 0.3s;
	&:hover {
		background-color: #d8ad3f;
	}
`;

function Input() {
	return (
		<InputContainer>
			<InputText />
			<Button>Buscar</Button>
		</InputContainer>
	);
}

export default Input;
