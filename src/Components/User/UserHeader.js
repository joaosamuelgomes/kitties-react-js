import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from "./UserHeader.module.css"
import { useLocation } from 'react-router-dom';

const UserHeader = () => {

    const [title, setTitle] = React.useState("");

    const location = useLocation();

    React.useEffect(() => {
        const {pathname} = location;
            switch(pathname) {
                case "/account": 
                    setTitle("Minha Conta")
                    break;
                case "/account/publication":
                    setTitle("Nova Publicação")
                    break;
                case "/account/stats":
                setTitle("Estatísticas")
                break;
            }
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;
