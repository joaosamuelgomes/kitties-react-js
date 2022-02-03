import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
// import Error from '../../Helper/Error';
import Button from '../Forms/Button';
//import UserContext from "../../UserContext"
import Input from '../Forms/Input';
import styles from "./LoginForm.module.css"
import stylesBtn from "../Forms/Button.module.css"


const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    // const { userLogin, error, loading } = React.useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault()
        /* Implementar contato com API externa */
    }

    return (
        <section className='animeRight'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                {/* {loading ? (
                    <Button disabled>Carregando...</Button>
                ): (
                    <Button>Entrar</Button>
                )} */}
                <Button>Entrar</Button>

                {/* <Error error={error} /> */}
            </form>
            <Link className={styles.forget} to="/login/forget">Esqueceu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui uma CatConta? Cadastre-se.</p>
                <Link className={stylesBtn.button} to="/login/create">Cadastro</Link>
            </div>
            


        </section>
    );
};

export default LoginForm;
