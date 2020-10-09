import React from 'react';

import { Container, Text, Button } from './style';

type InputTypes = {
	type?: string;
	name: string;
	placeholder: string;
};

function Input(props: InputTypes) {
	return (
		<Container>
			<Text {...props} />
			<Button>Buscar</Button>
		</Container>
	);
}

export default Input;
