import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault()
        /* Implementar contato com API externa */
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username"/>
                <Input label="Senha" type="password" name="password"/>
            </form>
            <Button>Entrar</Button>
            <Link to="/login/create">Cadastro</Link>


        </section>
    );
};

export default LoginForm;
