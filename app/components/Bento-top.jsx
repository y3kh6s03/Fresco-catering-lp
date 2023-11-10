import Image from "next/image"

import styles from "app/styles/bentoTop.module.scss"

export const BentoTop = () => {
    return (
        <>
            <div className={styles.bento__bg}>
                <Image src={"/svg/bg-white.svg"} fill alt="hero-bg" />
            </div>
        </>
    )
}