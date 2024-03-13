import logo from "./../../assets/images/Frame.svg"
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" className={styles.logo} />
           
        </div>
    )
}

/*
 <a href="#" class="menu">Информация о донорстве</a>
            <a href="#" class="menu">Врачи</a>
            <a href="#"class="menu">Санкт-Петербург<img alt="" src="location.svg"> </a>
            <a href="#"class="menu"><img alt="" src="account.svg"></a> */