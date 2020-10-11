import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	display: flex;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	flex-direction: row;

	@media (min-width: 1200px) {
		width: 90rem;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		box-shadow: none;
		height: 12rem;
	}
`;

export const InputText = styled.input`
	flex: 1;
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

	@media (max-width: 768px) {
		flex: 1;
		height: 6rem;
		border-radius: 0.5rem;
	}
`;

export const Button = styled.button`
	width: 12rem;
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

	@media (min-width: 1200px) {
		width: 17rem;
	}
	@media (max-width: 768px) {
		flex: 1;
		width: 20rem;
		margin-top: 1rem;
		align-self: center;
		border-radius: 0.5rem;
	}
`;
