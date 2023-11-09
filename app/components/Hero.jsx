import Image from "next/image";
import { Noto_Sans } from "next/font/google"

import styles from "../styles/hero.module.scss"

const Noto = Noto_Sans({
    subsets: ["latin"],
    weight: "800",
    display: "swap"
})

export const Hero = () => {
    return (
        <section className={styles.hero}>

            <div className={styles.hero__logo}>
                <Image src={"/images/logo-2.png"} fill sizes="100%" style={{ objectFit: 'contain' }} alt="logo" />
            </div>

            <div className={styles.hero__image}>
                <Image className={styles.hero__image__item} src={"/images/location.jpg"} fill sizes="100%" alt="hero-image" style={{ objectFit: "cover" }} priority={true} />
            </div>

            <div className={styles.hero__inner}>
                <div className={styles.hero__inner__title}>
                    <h1 className={Noto.className}>
                        Catering<br />
                        Service
                    </h1>
                </div>
                <p className={styles.hero__inner__headline}>
                    あなたの良いなを目の前の食事に<br />
                    メニューを持たないケータリング
                </p>
            </div>

            <div className={styles.hero__salada}>
                <Image className={styles.hero__salada__item} src={"/images/salada-plate.png"} fill sizes="100%" style={{objectFit: "cover"}} alt="salada"/>
            </div>

            <div className={styles.hero__bg}>
                <Image src={"/svg/bg.svg"} fill alt="hero-bg"/>
            </div>

        </section>
    )
}