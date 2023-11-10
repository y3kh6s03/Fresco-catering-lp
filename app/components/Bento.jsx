import { BentoTop } from "@/app/components/Bento-top";
// import { BentoMiddle } from "@/app/components/Bento-middle";
// import { BentoBottom } from "@/app/components/Bento-bottom";
import styles from "app/styles/common.module.scss"


export const Bento = () => {
    return (
        <section className={`${styles.container} ${styles.Bento}`}>
            <BentoTop/>
            {/* <BentoMiddle/>
            <BentoBottom/> */}
        </section>
    )
}