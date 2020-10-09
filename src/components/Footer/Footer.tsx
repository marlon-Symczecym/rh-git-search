import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	width: 100%;
	padding: 1rem 0;
	background-color: var(--dark);
	text-align: center;
	position: absolute;
	bottom: 0;
`;

const Text = styled.p`
	font-size: 1.3rem;
	color: var(--secundary);
	font-weight: 400;
`;

const Symbol = styled.i`
	color: var(--highlight);
`;

function Footer() {
	return (
		<FooterContainer>
			<Text>
				Desenvolvido <Symbol className="fas fa-heart footer-heart"></Symbol> por
				Marlon Smczecym
			</Text>
		</FooterContainer>
	);
}

export default Footer;
