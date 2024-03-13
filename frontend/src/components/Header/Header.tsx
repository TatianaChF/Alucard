import { Link } from "react-router-dom"
import logo from "./../../assets/images/Frame.svg"
import location from "./../../assets/images/location.svg"
import account from "./../../assets/images/account.svg"
import styles from "./Header.module.css"

export const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="logo" className={styles.logo} />
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
                    <Link to="">
                        Санкт-Петербург
                        <img alt="" src={location} />
                    </Link>
                    <Link to="">
                        <img alt="" src={account} />
                    </Link>
                    <select role="select" defaultValue={"ru"}>
                        <option value="ru">ru</option>
                    </select>
                </div>
        </div>

    )
}

/*
            <a href="#"class="menu">Санкт-Петербург<img alt="" src="location.svg"> </a>
            <a href="#"class="menu"><img alt="" src="account.svg"></a> */