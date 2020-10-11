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
		const { value } = event.target;
		setUserName(value);
	}

	function keyEnter(event: React.KeyboardEvent): void {
		const { key } = event;

		if (key === 'Enter') {
			handleClick();
		}
	}

	function handleClick() {
		if (userName.trim().length > 0)
			dispatch(
				userRequest({
					name: userName,
				}),
			);
		setUserName('');
	}

	return (
		<Container>
			<InputText
				{...props}
				value={userName}
				onChange={handleKey}
				onKeyDown={keyEnter}
			/>
			<Button onClick={handleClick}>Buscar</Button>
		</Container>
	);
}

export default Input;
