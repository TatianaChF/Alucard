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
            </form>
        </div>
    )
}