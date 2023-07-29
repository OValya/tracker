'use client'
import styles from './page.module.css'
import AuthForm from "@/components/AuthForm/AuthForm";
import {useRouter} from "next/navigation";
export default function Login(){
    const router = useRouter();
    const loginHandler = async (name:string, password:string)=> {
        const res = await fetch('/api/login', {
            method:'POST',
            body:JSON.stringify({name, password})
        });
        const {result} = await res.json()
        router.push('/');
    }
    return(
        <div className={styles.login}>
            <AuthForm login={false} onsubmit={loginHandler}/>
        </div>
    )
}