import background from "./../../assets/images/fone.png"
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div>
            <div>
                <img alt="background" src={background} className={styles.img_main} />
                <div className={styles.main_container}>
                    <p><span className={styles.name}>Алукард</span>  - <b>сервис для доноров, где есть все важное</b></p>
                    <p> Информация о донорстве, о врачах, запись на дотацию, карта мед организаций и другая
                        необходимая информация в одном месте</p>
                    <button className={styles.button}>Хочу быть донором</button>
                </div>
            </div>
        </div>
    )
}