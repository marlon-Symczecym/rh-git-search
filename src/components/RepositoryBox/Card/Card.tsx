import React from 'react';

import { Container, Title, Symbol, Text } from './style';

type PropTypes = {
	title?: string;
	symbol?: string;
	data?: string | number;
	color?: string;
};

function Card({ title, symbol, data, color }: PropTypes) {
	return (
		<Container>
			<Title>{title}</Title>
			<Symbol color={color} className={symbol}></Symbol>
			<Text>{data}</Text>
		</Container>
	);
}

export default Card;
