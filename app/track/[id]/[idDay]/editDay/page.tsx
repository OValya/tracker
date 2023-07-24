import styles from './page.module.css'
import {headers} from "next/headers";
import Image from "next/image";
import ActivityDay from "@/components/ActivityCard/ActivityCard";

type ActivityType = {
    id:string,
    name:string,
    img:string
}

const Activity = async () => {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/activity`, { cache: "no-store" });
    const {result}:{result:ActivityType[]} = await response.json();
    const setActivity = () => {

    }

    return (
        <div className={styles.page}>

            <div className={styles.container}>
                <h3 className={styles.title}>Выбери активность</h3>
                {result.map(activity => <ActivityDay key={activity.id} id={activity.id} img={activity.img} name={activity.name}/>)
                    // <div key={activity.id} className={styles.card} >
                    //     <Image  src={activity.img} alt={activity.name} width={50} height={40}/>
                    //     <p>{activity.name}</p>
                    // </div>)
                }
            </div>
        </div>


    );
};

export default Activity;