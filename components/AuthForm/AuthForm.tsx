import styles from "@/components/AuthForm/AuthForm.module.css";
import {FormEventHandler, useState} from "react";
type Props = {
    login:boolean;
    onsubmit: (name:string, password:string, color:string) => void
}
export default function AuthForm({login, onsubmit}:Props){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('#000000')

    return(
            <form className={styles.form}>
                {login?<h2>Для начала, авторизируйтесь:</h2>:
                    <h2>Создать аккаунт</h2>}
                <div className={styles.controls}>
                    <input className={styles.control}
                           placeholder={'enter your name'}
                           onChange={(e)=>setName(e.target.value)}
                    />
                    <div>{name}</div>
                    <input className={styles.control}
                           placeholder={'enter password'}
                           type={'password'}
                           onChange={(e)=>setPassword(e.currentTarget.value)}
                    />
                    <div>{password}</div>
                    {/*{!login && <div>*/}
                    {/*    <input type={'color'}*/}
                    {/*           value={color}*/}
                    {/*           name={'user_color'}*/}
                    {/*           onChange={e=>setColor(e.target.value)}*/}
                    {/*    />*/}
                    {/*    <label htmlFor={'user_color'}>Выбери свой цвет</label>*/}
                    {/*</div>}*/}
                </div>
                {login?<button>Войти</button>:<button onClick={()=>onsubmit(name, password, color)}>Зарегистрироваться</button>}
            </form>
        )
}