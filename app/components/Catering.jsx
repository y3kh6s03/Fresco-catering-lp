import { CateringTop } from "@/app/components/Catering-top";
import { CateringMiddle } from "@/app/components/Catering-middle";
import { CateringBottom } from "@/app/components/Catering-bottom";
import styles from "app/styles/common.module.scss"


export const Catering = () => {
    return (
        <section className={`${styles.container} ${styles.catering}`}>
            <CateringTop/>
            <CateringMiddle/>
            <CateringBottom/>
        </section>
    )
}