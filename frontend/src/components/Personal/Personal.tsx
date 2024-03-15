import styles from "./Personal.module.css"
import avatar from "./../../assets/images/foto.png"
import rectangle from "./../../assets/images/Rectangle.png"

export const Personal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_about}>
                <img src={avatar} alt="avatar" />
                <div className={styles.container_info}>
                    <div className={styles.info}>
                        <p>ФИО</p>
                        <p>Красова Мария Сергеевна</p>
                    </div>
                    <div className={styles.info}>
                        <p>Пол</p>
                        <p>женский</p>
                    </div>
                    <div className={styles.info}>
                        <p>Дата рождения</p>
                        <p>27.08.1999</p>
                    </div>
                    <div className={styles.info}>
                        <p>Город</p>
                        <p>Санкт-Петербург</p>
                    </div>
                    <div className={styles.info}>
                        <p>Статус</p>
                        <p>Донор</p>
                    </div>
                    <div className={styles.info}>
                        <p>Количество сдачи/<br />получения крови</p>
                        <p>Количество сдачи/<br />получения крови</p>
                    </div>
                    <button>Изменить</button>
                </div>
            </div>
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
    )
}