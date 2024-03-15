import { Link } from "react-router-dom"
import styles from "./Registration.module.css"

export const Registration = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link}>← Назад</Link>
            <form className={styles.form_container}>
                <div className={styles.form_input}>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" name="surname" id="surname" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="patronymic">Отчество</label>
                    <input type="text" name="patronymic" id="patronymic" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="tel">Контактный телефон</label>
                    <input type="tel" name="tel" id="tel" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={styles.form_input}>
                    <label htmlFor="pas_repeat">Повторите пароль</label>
                    <input type="password" name="pas_repeat" id="pas_repeat" />
                </div>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}