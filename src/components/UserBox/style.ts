import styled from 'styled-components';

export const Link = styled.a`
	cursor: pointer;
`;

export const UserBoxContainer = styled.div`
	width: 98%;
	padding: 0 1%;
	height: 13rem;
	margin-top: 2rem;

	display: flex;
	justify-content: center;

	@media (min-width: 768px) {
		width: 60rem;
	}
`;

export const Box = styled.div`
	width: 80%;
	height: 13rem;
	background-color: var(--background);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	position: relative;

	left: 50%;
	transform: translateX(-50%);

	display: inline-flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const Avatar = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	background-color: #ccc;

	position: absolute;
	left: -50px;
`;

export const DescriptionContainer = styled.div`
	width: 90%;
	padding: 2px 0;
`;

type TextTypes = {
	size: string;
	color: string;
};

export const Text = styled.p<TextTypes>`
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
	margin-left: 7rem;
`;

export const Repositorys = styled.p`
	text-align: center;
	padding: 1rem 0;
	background-color: var(--box-background);
	font-size: 1.4rem;
	border-radius: 0.5rem;

	align-self: flex-end;
	flex: 1;
`;
