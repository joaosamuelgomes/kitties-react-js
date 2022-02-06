import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from "./UserHeader.module.css";
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState('');
    const location = useLocation();
  
    React.useEffect(() => {
      const { pathname } = location;
      switch (pathname) {
        case '/account/publication':
          setTitle('Nova publicação');
          break;
        case '/account/stats':
          setTitle('Estatísticas');
          break;
        default:
          setTitle('Minha Conta');
      }
    }, [location]);
  
    return (
      <header className={styles.userHeader}>
        
        <h1 className="title">{title}</h1>
        <UserHeaderNav />

      </header>
    );
  };
  
  export default UserHeader;
  