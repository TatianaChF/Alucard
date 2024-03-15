import background from "./../../assets/images/fone.png"
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div>
            <div>
                <img alt="background" src={background} className={styles.img_main} />
            </div>
        </div>
    )
}