import styles from './page.module.css'
import Link from "next/link";
import {headers} from "next/headers";

type TrackerType = {
    id: number,
    userId: number,
    actId: number,
    date: Date,
    challengeId: number,
    user: {
        id: 1,
        name: string,
        color: string,
        password: string
    },
    activity: {
        id: number,
        name: string,
        img: string
    }
}


export default async function DayPage({params}: { params:{id:string, idDay:string} }){
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/tracker`, { cache: "no-store" });
    const {result} = await response.json();

    return(
        <div className={styles.page}>
            <h3 className={styles.title}>Активности дня № {params.idDay}</h3>
            <div className={styles.container}>
                {result.map((res:TrackerType) =>
                    <div className={styles.row} key={res.id}>
                        <span>{res.user.name}</span> - <span>{res.activity.name}</span></div>)
                }
                {/*<div className={styles.row}><span>{'Ира'}</span> - <span>{'бег'}</span></div>*/}
                {/*<div className={styles.row}><span>{'Света'}</span> - <span>{'упры'}</span></div>*/}
                {/*<div className={styles.row}><span>{'ВАля'}</span> - <span>{'ходьба'}</span></div>*/}
                {/*<div className={styles.row}><span>{'Алень'}</span> - <span>{'лестница'}</span></div>*/}
                <Link className={styles.link} href={`/track/${params.id}/${params.idDay}/editDay`}>Добавить свою активность!</Link>
            </div>
        </div>
    )
}