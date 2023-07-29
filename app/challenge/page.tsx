'use client'
import {FormEvent, useState} from "react";
import styles from './challenge.module.css'

export default function Challenge(){
    const [title, setTitle] = useState('')
    const [start, setStart] = useState('')
    const [finish, setFinish] = useState('')
    const createChallenge = async (e:FormEvent) => {
        e.preventDefault();
        console.log('body', {
            title, start,  finish
        })
        const response = await fetch('/api/challenge', {
            method:'POST',
            body: JSON.stringify({
                title, start:start+'T00:00:00.000Z',  finish:finish+'T00:00:00.000Z'
            })
        });
        const res = await response.json();
    }

    return(
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={createChallenge}>
                <h3>создай новый challenge</h3>
                <input className={styles.control}
                       type="text"
                       placeholder={'введи название'}
                       onChange={(e)=>setTitle(e.target.value)}
                       value={title}
                />
                <label htmlFor="start">начало челенжа
                    <input className={styles.control}
                       type={'date'}
                       name={'start'}
                       value={start}
                       onChange={(e)=>setStart(e.target.value)}
                    />
                </label>
                <label htmlFor="finish">конец челенжа
                    <input className={styles.control}
                       type={'date'}
                       name={'finish'}
                       value={finish}
                       onChange={(e)=>setFinish(e.target.value)}
                    />
                </label>
                <button>Поехали!</button>
            </form>
        </div>

    )
}