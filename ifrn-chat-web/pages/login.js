import React from 'react';

const AppContainer = props => <div>{props.children}</div>;
const AppInput = props => (
	<div>
		<label>{props.label}</label>
		<input type={props.type} title={props.title} />
	</div>
);
const AppButton = props => (
	<div>
		<input type="submit" title={props.title} />
	</div>
);

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