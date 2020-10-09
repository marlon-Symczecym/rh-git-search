import styled from 'styled-components';

export const Container = styled.div`
	width: 9rem;
	padding: 0.5rem 1rem;
	margin: 1rem 2rem;
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.02);
	box-shadow: inset -2px -2px 10px rgba(255, 255, 255, 0.8),
		inset -2px -2px 4px rgba(0, 0, 0, 0.3), 5px 5px 6px rgba(255, 255, 255, 0.5);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.p`
	font-size: 1.4rem;
	color: var(--tertiary);
`;

type SymbolTypes = {
	color?: string;
};

export const Symbol = styled.i<SymbolTypes>`
	font-size: 2rem;
	color: ${({ color }) => color || 'var(--primary)'};
	margin: 0.5rem;
`;

export const Text = styled.p`
	font-size: 1.5rem;
	color: var(--secundary);
`;
