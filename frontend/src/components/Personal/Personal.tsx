import styles from "./Personal.module.css"
import avatar from "./../../assets/images/foto.png"

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
        </div>
    )
}