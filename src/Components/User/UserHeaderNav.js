import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feedgalery.svg'
import {ReactComponent as Estatisticas} from '../../Assets/feedstats.svg'
import {ReactComponent as PublicarFoto} from '../../Assets/feedpublication.svg'
import {ReactComponent as Sair} from '../../Assets/feedlogout.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {


    const [mobile, setMobile] = React.useState(null);
    const {userLogout} = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end>
                <MinhasFotos />
                {mobile && "Galeria"}
            </NavLink>
            <NavLink to="/account/stats">
                <Estatisticas />
                {mobile && "Estatísticas"}
            </NavLink>
            <NavLink to="/account/post">
                <PublicarFoto />
                {mobile && "Nova Publicação"}
            </NavLink>
            <button onClick={userLogout}><Sair />Sair</button>
        </nav>
    );
};

export default UserHeaderNav;
