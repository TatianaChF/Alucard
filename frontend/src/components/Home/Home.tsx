import background from "./../../assets/images/fone.png"
import styles from "./Home.module.css"
import inf1 from "./../../assets/images/inf1.png"
import inf2 from "./../../assets/images/inf2.png"
import inf3 from "./../../assets/images/inf3.png"
import inf4 from "./../../assets/images/inf4.png"
import inf5 from "./../../assets/images/inf5.png"
import inf6 from "./../../assets/images/inf6.png"
import inf7 from "./../../assets/images/inf7.png"
import inf8 from "./../../assets/images/inf8.png"
import inf9 from "./../../assets/images/inf9.png"
import doc1 from "../../assets/images/катрочка врача 1.png"
import doc2 from "../../assets/images/катрочка врача 2.png"
import doc3 from "../../assets/images/катрочка врача 3.png"
import doc4 from "../../assets/images/катрочка врача 4.png"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <div>
                <img alt="background" src={background} className={styles.img_main} />
                <div className={styles.main_container}>
                    <p><span className={styles.name}>Алукард</span>  - <b>сервис для доноров, где есть все важное</b></p>
                    <p> Информация о донорстве, о врачах, запись на дотацию, карта мед организаций и другая
                        необходимая информация в одном месте</p>
                    <Link to="hospital" className={styles.button}>Хочу быть донором</Link>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Информация о донорстве</h1>
                    <div className={styles.card_info}>
                        <div><img src={inf1} width="400" /></div>
                        <div><img src={inf2} width="400" /></div>
                        <div><img src={inf3} width="400" /></div>
                        <div><img src={inf4} width="400" /></div>
                        <div><img src={inf5} width="400" /></div>
                        <div><img src={inf6} width="400" /></div>
                        <div><img src={inf7} width="400" /></div>
                        <div><img src={inf8} width="400" /></div>
                        <div><img src={inf9} width="400" /></div>
                    </div>
                </div>
                <div className={styles.doctors}>
                    <h1>Врачи</h1>
                    <div className={styles.card_doc}>
                        <div><img src={doc1} width="570" /></div>
                        <div><img src={doc2} width="570" /></div>
                        <div><img src={doc3} width="570" /></div>
                        <div><img src={doc4} width="570" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}