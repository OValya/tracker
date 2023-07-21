'use client'
import styles from './page.module.css'
import AuthForm from "@/components/AuthForm/AuthForm";
export default function Login(){
    return(
        <div className={styles.login}>
            <AuthForm login={true}/>
            {/*<form className={styles.form}>*/}
            {/*    <h2>Для начала, авторизируйтесь:</h2>*/}
            {/*    <input placeholder={'enter your name'}/>*/}
            {/*    <input placeholder={'enter password'} type={'password'}/>*/}

            {/*    <button>Войти</button>*/}
            {/*</form>*/}
        </div>
    )
}