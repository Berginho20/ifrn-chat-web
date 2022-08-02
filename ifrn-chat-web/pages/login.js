import React from 'react';
import {AppContainer} from '../src/components/AppContainerComponent';
import {AppButton} from '../src/components/AppButtonComponent';
import {AppInput} from '../src/components/AppInputComponent';

const Login = props => {
  return (
		<AppContainer>
			<AppInput
				title="apelido ou email do usuário"
				label="Usuário:"
				type="text"
			/>
			<AppInput 
				label="Senha:" 
				type="password" 
				title="senha do usuário" 
			/>
			<AppButton title="Entrar" />
		</AppContainer>
	);
};

export default Login;