'use client'

import styles from "./ActivityCard.module.css";
import Modal from 'react-modal';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import runningGirl from '../../public/Running-amico.svg'
type ActType = {
    id: string,
    img: string,
    name: string
}

export default function ActivityDay(activity:ActType){
    const [isOpen, setIsOpen] = useState(false)
    const router=useRouter();
    const addActivity = ()=>{
        setIsOpen(true)
        console.log('modal', isOpen)
    }

    const closeModal = () =>{
        setIsOpen(false);
        router.back();
    }
    return(
        <>
            <div key={activity.id} className={styles.card} onClick={addActivity}>
                <Image  src={activity.img} alt={activity.name} width={50} height={40}/>
                <p>{activity.name}</p>

            </div>
            <Modal isOpen={isOpen} className={styles.modal} overlayClassName={styles.overlay}>
                <h2>WOW! Так держать!</h2>
                <p>Твоя тренировка записана, можешь идти еще потренироваться</p>
                <button onClick={closeModal}>Уже бегу!</button>
            </Modal>
        </>

    )
}