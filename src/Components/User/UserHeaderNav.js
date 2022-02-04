import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feedgalery.svg'
import {ReactComponent as Estatisticas} from '../../Assets/feedstats.svg'
import {ReactComponent as PublicarFoto} from '../../Assets/feedpublication.svg'
import {ReactComponent as Sair} from '../../Assets/feedlogout.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {

    const mobile = useMedia('(max-width: 30rem)');

    const [mobileMenu, setMobileMenu] = React.useState(false);

    const {userLogout} = React.useContext(UserContext);

    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
          {mobile && (
            <button
              aria-label="Menu"
              className={`${styles.mobileButton} ${
                mobileMenu && styles.mobileButtonActive
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          )}
    
            <nav
            className={`${mobile ? styles.navMobile : styles.nav} ${
              mobileMenu && styles.navMobileActive
            }`}
            >
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
        </>
    );
};

export default UserHeaderNav;
