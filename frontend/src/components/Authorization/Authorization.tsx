import { Link } from "react-router-dom"
import styles from "./Authorization.module.css"

export const Authorization = () => {
    return (
        <div>
            <form  className={styles.form_container}>
                <div className={styles.form_input}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="adress@mail.ru" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" placeholder="Введите пароль" />
                </div>
                <div className={styles.form_btn}>
                    <button>Войти</button>
                    <p>или</p>
                    <Link to="" className={styles.link_reg}>Зарегистрироваться</Link>
                </div>
            </form>
        </div>
    )
}