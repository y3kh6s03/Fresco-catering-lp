import Image from "next/image";
import { Noto_Sans } from "next/font/google"

import styles from "../styles/hero.module.scss"
import { useContext } from "react";
import { UseFont } from "@/app/page";

// const Noto = Noto_Sans({
//     subsets: ["latin"],
//     weight: "800",
//     display: "swap"
// })


export const Hero = () => {
    const Fonts = useContext(UseFont)
    const { Noto } = Fonts;
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

            <div className={styles.hero__bbq}>
                <Image className={styles.hero__bbq__item} src={"/svg/bbq.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__egg}>
                <Image className={styles.hero__egg__item} src={"/svg/egg.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__nabe}>
                <Image className={styles.hero__nabe__item} src={"/svg/nabe.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__meet}>
                <Image className={styles.hero__meet__item} src={"/svg/meet.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__rice}>
                <Image className={styles.hero__rice__item} src={"/svg/rice.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__stick}>
                <Image className={styles.hero__stick__item} src={"/svg/stick.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__fire}>
                <Image className={styles.hero__fire__item} src={"/svg/fire.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__cup}>
                <Image className={styles.hero__cup__item} src={"/svg/cup.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>
            <div className={styles.hero__coffee}>
                <Image className={styles.hero__coffee__item} src={"/svg/coffee.svg"} fill sizes="100%" style={{ objectFit: "contain" }} alt="salada" />
            </div>

            <div className={styles.hero__bg}>
                <Image src={"/svg/bg.svg"} fill alt="hero-bg" />
            </div>

        </section>
    )
}