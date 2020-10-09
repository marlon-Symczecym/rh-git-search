import React from 'react';

import { FooterContainer, Text, Symbol } from './style';

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
