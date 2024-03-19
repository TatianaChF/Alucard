import { Link } from "react-router-dom"
import styles from "./HospitalRegistration.module.css"
import { AuthGuard } from "../AuthGuard/AuthGuard"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectionSelector } from "../../redux/selection/selectors"

export const HospitalRegistration = () => {
    const {services, hospitals, times} = useSelector(selectionSelector);
    const dispatch = useDispatch();

    return (
        <AuthGuard>
            <div>
                <div className={styles.container}>
                    <Link to="/" className={styles.link}>← Назад</Link>
                    <div>
                        <h1>Запись на прием</h1>
                        <h3>Имеются противопоказания к донорству</h3>
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
                                <label htmlFor="priem">Запись на</label>
                                <select name="priem">
                                    <option>Выберите из списка</option>
                                    { services.map((service) => <option>{service}</option>) }
                                </select>
                            </div>
                            <div className={styles.form_input}>
                                <label htmlFor="medorg">Выберите медицинское учреждение</label>
                                <select name="medorg">
                                    <option>Выберите из списка</option>
                                    { hospitals.map((hospital) => <option>{hospital}</option>) }
                                </select>
                            </div>
                            <div className={styles.form_input}>
                                <label htmlFor="time">Выберите время</label>
                                <select name="time">
                                    <option>Выберите из списка</option>
                                    { times.map((time) => <option>{time}</option>) }
                                </select>
                            </div>
                            <button>Записаться</button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthGuard>
    )
}