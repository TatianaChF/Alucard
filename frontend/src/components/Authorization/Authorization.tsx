import { Link } from "react-router-dom"

export const Authorization = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <button>Войти</button>
                    <p>или</p>
                    <Link to="">Зарегистрироваться</Link>
                </div>
            </form>
        </div>
    )
}