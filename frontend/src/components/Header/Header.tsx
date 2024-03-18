import { Link } from "react-router-dom"
import logo from "./../../assets/images/Frame.svg"
import location from "./../../assets/images/location.svg"
import account from "./../../assets/images/account.svg"
import styles from "./Header.module.css"
import { useAuth } from "react-oidc-context"

export const Header = () => {
    const auth = useAuth();
    const clientEmail = auth.user?.profile.preferred_username;
    const clientLastname = auth.user?.profile.family_name;
    const authButtonHandler = () =>
        auth.isAuthenticated
            ? void auth.signoutRedirect({
                post_logout_redirect_uri: window.location.origin,
            })
            : void auth.signinRedirect();

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                <div>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="" className={styles.link}>Информация о донорстве</Link>
                        </li>
                        <li>
                            <Link to="" className={styles.link}>Врачи</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.list}>
                <Link to="" className={styles.link_city}>
                    Санкт-Петербург
                    <img alt="" src={location} />
                </Link>
                <div>
                    <div>
                        {auth.isAuthenticated && clientLastname}
                        {clientLastname && <br />}
                        {auth.isAuthenticated && clientEmail}
                    </div>
                    <nav>
                        <button onClick={authButtonHandler}>
                            {auth.isAuthenticated ? "Выход" : <img className={styles.account_img} src={account} alt="account"/>}
                        </button>
                    </nav>
                </div>
                <select role="select" defaultValue={"ru"} className={styles.selectLanguage}>
                    <option value="ru" className={styles.selectLanguage__option}>ru</option>
                </select>
            </div>
        </div>

    )
}