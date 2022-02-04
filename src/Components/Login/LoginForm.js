import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Error from "../Helper/Error";
import Head from "../Helper/Head"
import Button from '../Forms/Button';
import {UserContext}  from "../../UserContext";
import Input from '../Forms/Input';
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";


const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
    
        if (username.validate() && password.validate()) {
          userLogin(username.value, password.value);
        }
      }
    
      return (
        <section className="animeRight">
          <Head title="Login" />
          <h1 className="title">Login</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input label="Senha" type="password" name="password" {...password} />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error && 'Dados incorretos.'} />
          </form>
          <Link className={styles.lost} to="/login/lost">
            Perdeu a Senha?
          </Link>
          <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui uma CatConta? Cadastre-se.</p>
            <Link className={stylesBtn.button} to="/login/create">
              Cadastro
            </Link>
          </div>
        </section>
      );
};

export default LoginForm;
