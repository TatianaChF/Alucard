import { Link } from "react-router-dom"
import logo from "./../../assets/images/Frame.svg"
import location from "./../../assets/images/location.svg"
import account from "./../../assets/images/account.svg"
import styles from "./Header.module.css"

export const Header = () => {

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
                <Link to="authorization" className={styles.link}>
                    <img alt="" src={account} />
                </Link>
                <select role="select" defaultValue={"ru"} className={styles.selectLanguage}>
                    <option value="ru" className={styles.selectLanguage__option}>ru</option>
                </select>
            </div>
        </div>

    )
}