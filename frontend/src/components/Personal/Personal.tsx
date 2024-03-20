import styles from "./Personal.module.css"
import avatar from "./../../assets/images/foto.png"
import rectangle from "./../../assets/images/Rectangle.png"
import { AuthGuard } from "../AuthGuard/AuthGuard"
import { useAuth } from "react-oidc-context"
import { useSelector } from "react-redux"
import { registrationSelector } from "../../redux/registrationClinic/selectors"

export const Personal = () => {
    const auth = useAuth();
    const clientEmail = auth.user?.profile.preferred_username;
    const clientName = auth.user?.profile.name;
    const { hospital, time } = useSelector(registrationSelector);

    return (
        <AuthGuard>
            <div className={styles.container}>
                <div className={styles.container_about}>
                    <img src={avatar} alt="avatar" />
                    <div className={styles.container_info}>
                        <div className={styles.info}>
                            <p>ФИО</p>
                            <p>{clientName}</p>
                        </div>
                        <div className={styles.info}>
                            <p>E-mail</p>
                            <p>{clientEmail}</p>
                        </div>
                        <div className={styles.info}>
                            <p>Город</p>
                            <p>Санкт-Петербург</p>
                        </div>
                        <div className={styles.info}>
                            <p>Количество сдачи/<br />получения крови</p>
                            <p>0</p>
                        </div>
                        <button>Изменить</button>
                    </div>
                </div>
                {hospital ? <div>
                    <h3>Мои записи</h3>
                    <div className={styles.container_card}>
                        <p className={styles.reg}>Запись на {time} в {hospital}</p>
                    </div>
                </div> :
                    <div>
                        <h3>Мои записи</h3>
                        <div className={styles.container_card}>
                            <p className={styles.reg}>У вас пока нет записей</p>
                        </div>
                    </div>}
                <div>
                    <h3>Мои анализы</h3>
                    <div className={styles.cards}>
                        <div className={styles.container_card}>
                            <img src={rectangle} alt="rectangle" />
                            <div className={styles.card_info}>
                                <p>Дата и время сдачи анализа: <br />
                                    <b>11.11.2023 08:20</b>
                                </p>
                                <p>Медицинское учреждение: <br />
                                    <b>Название учреждение</b>
                                </p>
                                <p>Результаты <br />
                                    <b>ФИО_11_11.pdf</b>
                                </p>
                            </div>
                        </div>
                        <div className={styles.container_card}>
                            <img src={rectangle} alt="rectangle" />
                            <div className={styles.card_info}>
                                <p>Дата и время сдачи анализа: <br />
                                    <b>11.11.2023 08:20</b>
                                </p>
                                <p>Медицинское учреждение: <br />
                                    <b>Название учреждение</b>
                                </p>
                                <p>Результаты <br />
                                    <b>ФИО_11_11.pdf</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>История записей</h3>
                    <div className={styles.cards}>
                        <div className={styles.container_card}>
                            <img src={rectangle} alt="rectangle" />
                            <div className={styles.card_doctors}>
                                <p>Дата и время сдачи анализа: <br />
                                    <b>11.11.2023 08:20</b>
                                </p>
                                <p>Медицинское учреждение: <br />
                                    <b>Название учреждение</b>
                                </p>
                                <p>Врач <br />
                                    <b>Фамилия Имя Отчество</b>
                                </p>
                            </div>
                        </div>
                        <div className={styles.container_card}>
                            <img src={rectangle} alt="rectangle" />
                            <div className={styles.card_doctors}>
                                <p>Дата и время сдачи анализа: <br />
                                    <b>11.11.2023 08:20</b>
                                </p>
                                <p>Медицинское учреждение: <br />
                                    <b>Название учреждение</b>
                                </p>
                                <p>Врач <br />
                                    <b>Фамилия Имя Отчество</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    )
}