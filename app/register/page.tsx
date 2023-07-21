'use client'
import styles from './page.module.css'
import AuthForm from "@/components/AuthForm/AuthForm";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Register(){
    //const router = useRouter();
    const [data, setData] = useState({name:'', password:'', color:''});
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('#000000')
    const register =  (e) =>{
        e.preventDefault()


        // let res = await fetch("/api/register", {
        //     method: "POST",
        //     body: JSON.stringify({ name, password, color }),
        // });
        // const { result } = await res.json();
        // if (result) {
        //     await router.replace("/");
        // }
    }
    return(
        <div className={styles.login}>
            <form onSubmit={register} className={styles.form}>

                <h2>Создать аккаунт</h2>
                <div className={styles.controls}>
                    <input className={styles.control}
                           placeholder={'enter your name'}
                           onChange={(e)=>setName(e.target.value)}
                           value={name}
                    />

                    <input className={styles.control}
                           placeholder={'enter password'}
                           type={'password'}
                           onChange={(e)=>setPassword(e.currentTarget.value)}
                           value={password}
                    />

                    {/*{!login && <div>*/}
                    {/*    <input type={'color'}*/}
                    {/*           value={color}*/}
                    {/*           name={'user_color'}*/}
                    {/*           onChange={e=>setColor(e.target.value)}*/}
                    {/*    />*/}
                    {/*    <label htmlFor={'user_color'}>Выбери свой цвет</label>*/}
                    {/*</div>}*/}
                </div>
               <button >Зарегистрироваться</button>
            </form>
        </div>
    )
}