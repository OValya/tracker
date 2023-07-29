import Image from 'next/image'

import styles from './page.module.css'
import {useRouter} from "next/navigation";
import Link from "next/link";
import {headers} from "next/headers";

type ChallengeType = {
    id:number,
    title: string
}

export default async function Home() {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/challenge`, { cache: "no-store" });
    //if(!response)
   // console.log('response', response)
    const {result} = await response.json();
   // console.log('result', result)

    // const createChallenge = () => {
    //     const newChallenge =
    // }

    return(
        <>
            <h3 className={styles.title}>Выбери свой челендж</h3>
            <div className={styles.container}>
                {result &&result.map((challenge:ChallengeType) =>
                        <Link key={challenge.id}
                              className={styles.item}
                              href={`/track/${challenge.id}`}
                        >
                            {challenge.title}
                        </Link>
                )}
                {result.length===0 && <p className={styles.message} >Ни одного челенджа еще нет :(</p>}
                <Link className={styles.link} href={'/challenge'}>создать челендж</Link>
            </div>

        </>
    )

}
