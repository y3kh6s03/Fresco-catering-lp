import { useContext } from "react";
import { UseContents } from "@/app/page";

import { CateringTop } from "@/app/components/Catering-top";
import { CateringMiddle } from "@/app/components/Catering-middle";
import { CateringBottom } from "@/app/components/Catering-bottom";
import styles from "app/styles/catering.module.scss"


export const Catering = () => {
    const cateringContents = useContext(UseContents);
    return (
        cateringContents.map((item, index) => {
            return (
                <section key={index} className={`${styles.container} ${styles.catering}`}>
                    <CateringTop item={item} />
                    <CateringMiddle item={item} />
                    <CateringBottom item={item} />
                </section>
            )
        })
    )
}