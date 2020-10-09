import styled from 'styled-components';

export const Link = styled.a`
	margin: 0;
	padding: 0;
	display: inline-block;
`;

export const Container = styled.div`
	width: 96%;
	padding: 0 2%;
	margin: 2rem auto;
	cursor: pointer;

	background-color: rgba(0, 0, 0, 0.02);
	box-shadow: inset -2px -2px 10px rgba(255, 255, 255, 0.8),
		inset -2px -2px 7px rgba(0, 0, 0, 0.3), 5px 5px 6px rgba(255, 255, 255, 0.5);
	border-radius: 0.5rem;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (min-width: 768px) {
		width: 45rem;
		margin: 2rem;
	}

	&:hover {
		box-shadow: inset 2px 2px 10px rgba(255, 255, 255, 0.8),
			inset 3px 3px 7px rgba(0, 0, 0, 0.3),
			-5px -5px 6px rgba(255, 255, 255, 0.5);
	}
`;

type TextTypes = {
	color?: string;
	size?: string;
};

export const Text = styled.h1<TextTypes>`
	font-size: ${({ size }) => size || '2.5rem'};
	color: ${({ color }) => color || 'var(--secundary-text)'};
	align-self: center;
	margin: 2rem 0;
`;

export const DataBox = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Content = styled.div`
	margin: 1rem 0;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;
