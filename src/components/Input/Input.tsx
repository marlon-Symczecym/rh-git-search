import React from 'react';
import { useDispatch } from 'react-redux';

import { userRequest } from '../../store/modules/user/actions';

import { Container, InputText, Button } from './style';

type InputTypes = {
	type?: string;
	name: string;
	placeholder: string;
};

function Input(props: InputTypes) {
	const [userName, setUserName] = React.useState<string>('');

	const dispatch = useDispatch();

	function handleKey(event: React.ChangeEvent<HTMLInputElement>): void {
		setUserName(event.target.value);
	}

	function handleClick() {
		dispatch(
			userRequest({
				name: userName,
			}),
		);

		setUserName('');
	}

	return (
		<Container>
			<InputText {...props} value={userName} onChange={handleKey} />
			<Button onClick={handleClick}>Buscar</Button>
		</Container>
	);
}

export default Input;
