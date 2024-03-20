import { Link } from "react-router-dom"
import styles from "./HospitalRegistration.module.css"
import { AuthGuard } from "../AuthGuard/AuthGuard"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectionSelector } from "../../redux/selection/selectors"
import { ChangeEvent, FormEvent, useState } from "react"
import { registrationSelector } from "../../redux/registrationClinic/selectors"
import { addInfo } from "../../redux/registrationClinic/registrationClinicSlice"

export const HospitalRegistration = () => {
    const [formData, setFormData] = useState({
        lastname: "",
        firstname: "",
        otch: "",
        phone: "",
        email: "",
        service: "",
        hospital: "",
        time: ""
    });
    const [isRegister, setIsRegister] = useState(false);
    const { services, hospitals, times } = useSelector(selectionSelector);
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addInfo(formData));
        setIsRegister(true);
    };

    return (
        <AuthGuard>
            {isRegister ? <Message /> :
                <div>
                    <div className={styles.container}>
                        <Link to="/" className={styles.link}>← Назад</Link>
                        <div>
                            <h1>Запись на прием</h1>
                            <h3>Имеются противопоказания к донорству</h3>
                            <form onSubmit={handleSubmit} className={styles.form_container}>
                                <div className={styles.form_input}>
                                    <label htmlFor="lastname">Фамилия:</label>
                                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="firstname">Имя:</label>
                                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="otch">Отчество:</label>
                                    <input type="text" id="otch" name="otch" value={formData.otch} onChange={handleChange} />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="phone">Контактный телефон:</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="service">Запись на:</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                        <option>Выберите из списка</option>
                                        {services.map((service) => <option key={service}>{service}</option>)}
                                    </select>
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="hospital">Выберите медицинское учреждение:</label>
                                    <select id="hospital" name="hospital" value={formData.hospital} onChange={handleChange}>
                                        <option>Выберите из списка</option>
                                        {hospitals.map((hospital) => <option key={hospital}>{hospital}</option>)}
                                    </select>
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="time">Выберите медицинское учреждение:</label>
                                    <select id="time" name="time" value={formData.time} onChange={handleChange}>
                                        <option>Выберите из списка</option>
                                        {times.map((time) => <option key={time}>{time}</option>)}
                                    </select>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>}
        </AuthGuard>
    )
}

export const Message = () => {
    const { firstname, hospital, time } = useSelector(registrationSelector);
    console.log(firstname, hospital, time)

    return (
        <div>
            {firstname}, Ваша запись на {time} в {hospital} зарегистрирована!
        </div>
    )
}