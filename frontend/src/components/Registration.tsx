import { Link } from "react-router-dom"
import styles from "./Registration.module.css"

export const Registration = () => {
    return (
        <div className={styles.container}>
            <Link to="">Назад</Link>
            <form className={styles.form_container}>
                <div>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" name="surname" id="surname" />
                </div>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="patronymic">Отчество</label>
                    <input type="text" name="patronymic" id="patronymic" />
                </div>
                <div>
                    <label htmlFor="tel">Контактный телефон</label>
                    <input type="tel" name="tel" id="tel" />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="pas_repeat">Повторите пароль</label>
                    <input type="password" name="pas_repeat" id="pas_repeat" />
                </div>
            </form>
        </div>
    )
}