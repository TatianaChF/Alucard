import { Link } from "react-router-dom"
import logo from "./../../assets/images/Frame.svg"
import styles from "./Header.module.css"

export const Header = () => {

    return (
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
    )
}

/*
            <a href="#"class="menu">Санкт-Петербург<img alt="" src="location.svg"> </a>
            <a href="#"class="menu"><img alt="" src="account.svg"></a> */