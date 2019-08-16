// Dependencies
import React from 'react';
// Storybook
import { storiesOf } from '@storybook/react';
// Components
import { Button } from '../src/components/Button/Button';

storiesOf('Buttons', module)
	.add('Button', () => {
		return (
			<React.Fragment>
				<Button label="Button" />
			</React.Fragment>
		);
	});
