// 'use client'

import styles from './page.module.css'
import Image from "next/image";
import bike from '../../public/bicycle.svg'
import sup from '../../public/kayak.svg'
//import walk from '../../public/Training.svg'
import running from '../../public/running.svg'
import step from '../../public/go-upstairs.svg'
import gym from '../../public/gym.svg'
import {headers} from "next/headers";

const Card = () => {
    return(
        <div>

        </div>
    )
}

type ActivityType = {
    id:string,
    name:string,
    img:string
}

const Activity = async () => {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/activity`, { cache: "no-store" });


    //const response = await fetch(process.env.URL +'/api/activity')
    const {result}:{result:ActivityType[]} = await response.json();
    //console.log('acts', result)

    return (
        <div className={styles.page}>

            <div className={styles.container}>
                <h3 className={styles.title}>Выбери активность</h3>
                {result.map(activity =>
                    <div key={activity.id} className={styles.card}>
                        <Image  src={activity.img} alt={activity.name} width={50} height={40}/>
                    <p>{activity.name}</p>
                    </div>)
                }
                {/*<div className={styles.card}>*/}
                {/*    <Image  src={bike} alt="bike" width={50} height={40}/>*/}
                {/*    <p>Вело</p>*/}
                {/*</div>*/}
                {/*<div className={styles.card}>*/}
                {/*    <Image src={gym} alt="gym"  width={50} height={40}/>*/}
                {/*    <p>Упры</p>*/}
                {/*</div>*/}
                {/*<div className={styles.card}>*/}
                {/*    <Image src={running} alt="бег"  width={50} height={40}/>*/}
                {/*    <p>Бег</p>*/}
                {/*</div>*/}
                {/*<div className={styles.card}>*/}
                {/*    <Image src={step} alt="подъем"  width={50} height={40}/>*/}
                {/*    <p>Лестница</p>*/}
                {/*</div>*/}
                {/*<div className={styles.card}>*/}
                {/*    <Image src={sup} alt="sup"  width={50} height={40}/>*/}
                {/*    <p>Sup</p>*/}
                {/*</div>*/}
                {/*<div className={styles.card}>*/}
                {/*    <Image src={bike} alt="bike"  width={50} height={40}/>*/}
                {/*    <p>Вело</p>*/}
                {/*</div>*/}
            </div>
        </div>


    );
};

export default Activity;