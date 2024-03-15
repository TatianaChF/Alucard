import styles from "./Personal.module.css"
import avatar from "./../../assets/images/foto.png"

export const Personal = () => {
    return (
        <div>
            <div className={styles.container_about}>
                <img src={avatar} alt="avatar" />
                <div>
                    <div>
                        <p>ФИО</p>
                        <p>Красова Мария Сергеевна</p>
                    </div>
                    <div>
                        <p>Пол</p>
                        <p>женский</p>
                    </div>
                    <div>
                        <p>Дата рождения</p>
                        <p>27.08.1999</p>
                    </div>
                    <div>
                        <p>Город</p>
                        <p>Санкт-Петербург</p>
                    </div>
                    <div>
                        <p>Статус</p>
                        <p>Донор</p>
                    </div>
                    <div>
                        <p>Количество сдачи/<br />получения крови</p>
                        <p>Количество сдачи/<br />получения крови</p>
                    </div>
                    <button>Изменить</button>
                </div>
            </div>
        </div>
    )
}