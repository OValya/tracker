import styles from './page.module.css'
import Image from "next/image";
import bike from '../../public/bicycle.svg'
import sup from '../../public/kayak.svg'
//import walk from '../../public/Training.svg'
import running from '../../public/running.svg'
import step from '../../public/go-upstairs.svg'
import gym from '../../public/gym.svg'

const Card = () => {
    return(
        <div>

        </div>
    )
}
const Activity = () => {
    return (
        <div className={styles.page}>

            <div className={styles.container}>
                <h3 className={styles.title}>Выбери активность</h3>
                <div className={styles.card}>
                    <Image  src={bike} alt="bike" width={50} height={40}/>
                    <p>Вело</p>
                </div>
                <div className={styles.card}>
                    <Image src={gym} alt="gym"  width={50} height={40}/>
                    <p>Упры</p>
                </div>
                <div className={styles.card}>
                    <Image src={running} alt="бег"  width={50} height={40}/>
                    <p>Бег</p>
                </div>
                <div className={styles.card}>
                    <Image src={step} alt="подъем"  width={50} height={40}/>
                    <p>Лестница</p>
                </div>
                <div className={styles.card}>
                    <Image src={sup} alt="sup"  width={50} height={40}/>
                    <p>Sup</p>
                </div>
                <div className={styles.card}>
                    <Image src={bike} alt="bike"  width={50} height={40}/>
                    <p>Вело</p>
                </div>
            </div>
        </div>


    );
};

export default Activity;