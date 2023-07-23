'use client'
import styles from './page.module.css'
import AuthForm from "@/components/AuthForm/AuthForm";
export default function Login(){
    const loginHandler = async (name:string, password:string)=> {

       // console.log('onsubmit', name)
        const res = await fetch('/api/login', {
            method:'POST',
            body:JSON.stringify({name, password})
        });
        const {result} = await res.json()
        console.log('result', result);
    }
    return(
        <div className={styles.login}>
            <AuthForm login={false} onsubmit={loginHandler}/>
            {/*<form className={styles.form}>*/}
            {/*    <h2>Для начала, авторизируйтесь:</h2>*/}
            {/*    <input placeholder={'enter your name'}/>*/}
            {/*    <input placeholder={'enter password'} type={'password'}/>*/}

            {/*    <button>Войти</button>*/}
            {/*</form>*/}
        </div>
    )
}