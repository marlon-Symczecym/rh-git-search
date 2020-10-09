import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 5rem;
`;

export const Content = styled.section`
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 400;
	color: var(--tertiary);
	margin: 3rem 0;
`;

export const Text = styled.h1`
	margin-top: 5rem;
	font-size: 2.5rem;
	color: var(--secundary-text);
	align-self: center;
`;
