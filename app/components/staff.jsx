import items from "app/JSON/staff.json"
import Image from "next/image"
import { gsap } from "gsap/all"

import styles from "app/styles/staff.module.scss"
import "app/styles/staff.scss"
import { useContext, useEffect, useRef } from "react"
import { UseFont } from "@/app/page"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Staff = () => {

    const { Noto, NotoNum } = useContext(UseFont);


    const chefRef = useRef(null)
    const dieticianRef = useRef(null)
    const cheftextRef = useRef(null)
    const dieticiantextRef = useRef(null)

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        const toggleClass = (el) => {
            ScrollTrigger.create({
                trigger: el.current,
                start: "top 90%",
                toggleClass: "active"
            })
        }
        toggleClass(chefRef);
        toggleClass(dieticianRef);
        toggleClass(cheftextRef);
        toggleClass(dieticiantextRef);
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.grass__bg}>
                <Image className={styles.grass__bg} src={"/svg/grass.svg"} fill sizes="100%" alt="staff-bg" />
            </div>

            <div className={`${Noto.className} ${styles.section__title}`}>
                <h2>
                    Service Staff
                </h2>
            </div>
            {
                items.map((item, index) => {
                    return (
                        <div className={styles.staff} key={index}>
                            <div className={styles.staff__image}>
                                <svg viewBox="0 0 1 1.35">
                                    <defs>
                                        <clipPath id="chef" clipPathUnits="objectBoundingBox">
                                            <path d="m.45.28s0,0,0,0c0,0,.01,0,.02-.01,0,0,0-.02,0-.03,0-.01,0-.03,0-.04,0-.02,0-.04.01-.06,0-.01.01-.02.02-.03.01-.02.02-.04.03-.06.01-.03.04-.05.07-.05.04,0,.08,0,.12.02.02,0,.05.02.07.03.01.01.03.03.03.05,0,.01,0,.02,0,.03,0,.01-.01.02-.02.03-.01.01-.02.03-.03.05,0,0,0,.02,0,.03,0,0,0,.01,0,.02,0,0,0,.02-.01.03,0,0-.01,0-.02.01-.01,0-.02.02-.03.03,0,.02-.02.03-.04.04,0,0-.02.01-.02.03,0,.02,0,.03,0,.04.01,0,.02.02.03.02.01,0,.03.02.04.03.01.02.02.04.02.06,0,.03,0,.06,0,.09,0,.02,0,.05,0,.07,0,0,0,0,0,0,0,0,0,0,0,0,.03,0,.05-.02.08-.03.04-.03.08-.05.12-.06.01,0,.02,0,.04,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.01-.02.02-.03.03-.02.01-.04.02-.05.04-.01,0-.02.02-.03.03,0,0,0,0,0,.01,0,0,0,.02,0,.03,0,0,.01.02.02.02,0,0,.02.02.02.03,0,.01,0,.02,0,.03,0,.01,0,.02,0,.03,0,0,0,.01,0,.01,0,0-.01.01-.02.02-.02,0-.03.02-.05.03-.01,0-.02,0-.03,0,0,0-.01-.01-.02-.02-.02-.02-.03-.02-.05,0-.02.02-.03.04-.03.07,0,.03,0,.05,0,.08,0,.03,0,.06,0,.09,0,.02,0,.05,0,.07,0,0,0,0,0,0,0,0,0,0,0,0-.18,0-.37,0-.55,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01,0-.03,0-.04,0-.03,0-.06,0-.08,0-.04,0-.07,0-.11,0-.02,0-.03,0-.05,0-.01,0-.02-.02-.03-.02-.01-.04-.03-.05-.06,0-.01,0-.02-.01-.03,0-.02-.03-.04-.04-.06,0,0-.02-.02-.02-.02-.02-.02-.02-.04-.01-.06,0-.02,0-.03.02-.04,0-.02.01-.03,0-.05,0-.02,0-.04.03-.05,0,0,.02-.01.02-.02.02-.01.03-.03.05-.05,0-.01.01-.02.02-.03.01-.02.03-.04.05-.05.06-.03.12-.06.18-.08.02,0,.05-.02.07-.02,0,0,0,0,0,0Z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg viewBox="0 0 1 1.35">
                                    <defs>
                                        <clipPath id="dietician" clipPathUnits="objectBoundingBox">
                                            <path d="m1,.71s-.01-.05-.04-.06c-.04-.02-.08-.04-.12-.06,0,0-.01,0-.01-.02,0,0,0,0,0,0-.03-.04-.05-.09-.08-.13,0,0-.01-.01-.02-.01-.01,0-.01,0-.02-.01,0-.03,0-.06-.02-.09,0,0,0,0,0,0,0-.02,0-.03.01-.05,0-.02,0-.04,0-.06,0,0,0-.01-.01-.01-.01,0-.01,0-.01-.01,0,0,0-.01,0-.02,0-.02,0-.04-.02-.06,0,0-.02-.02-.02-.03-.03-.03-.06-.06-.1-.07-.03,0-.07,0-.1.01,0,0,0,0,0,0,0,0-.02,0-.02,0,0,0-.05.03-.05.04,0,.02-.02.03-.03.05,0,0-.01.01-.01.02,0,.03-.01.07,0,.1,0,.02,0,.03.01.04.01.02.01.03.02.05,0,0,0,0,0,.01-.01,0-.02.02-.02.03,0,0,0,0,0,0,0,0,0,0,0,0,0,.01.01.02.03.02,0,0,0,0,0,0,0,0,0,.02.01.03.03.04.06.08.1.11,0,0,0,0-.01,0-.01,0-.03.02-.04.03-.04.03-.09.06-.14.08-.03.01-.05.04-.06.07,0,0,0,.01-.01.01-.06.02-.12.04-.18.05-.01,0-.01,0,0,.01.03.06.05.12.08.19,0,.02.01.03,0,.05,0,0,0,0,0,0,0,.02,0,.04-.02.06,0,.01,0,.02-.02.03-.02.02-.04.05-.04.08,0,.02,0,.04,0,.06,0,.03,0,.06.03.07,0,0,.02.02.02.03,0,0,.01.01.02.02,0,0,.02,0,.02.01.04.02.08.03.12.04,0,0,.01,0,.01.01,0,.02.02.03.03.04,0,0,.01.01,0,.02,0,.03,0,.07,0,.1,0,0,0,.02,0,.02,0,0,0,.01,0,.02,0,0,0,.02,0,.02,0,0,0,0,0,0,0,0,0,0,0,0,.22,0,.44,0,.67,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.03,0-.05,0-.08,0,0,0-.02,0-.03-.01-.05-.03-.1-.05-.15,0,0,0,0,0-.01.01-.02.02-.03.03-.05.01-.02.03-.05.03-.07,0-.04,0-.07,0-.11,0-.04,0-.09,0-.13,0-.03,0-.07,0-.1,0-.06,0-.12.01-.17,0-.03,0-.06,0-.1ZM.33.39s0,0,0,0c0,0,0,0,0-.01,0-.01,0-.02,0-.03,0,0,0,0,0,0,0,0,0,0,0,0,0,.01,0,.03,0,.04,0,0,0,0,0,0Z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <Image src={item.image} fill sizes="100%" alt="image" />
                            </div>

                            <div className={styles.staff__container}>
                                <div
                                    ref={item.num === "01"
                                        ? chefRef
                                        : dieticianRef}
                                    className={styles.staff__container__title}>
                                    <span className={`enName ${styles.staff__container__title__span}`}>
                                        {item.enName}
                                    </span>
                                    <div className={`name__container ${styles.staff__container__title__inner}`}>
                                        <span>
                                            {item.occupation}
                                        </span>
                                        <h3>
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>

                                <div
                                    ref={item.num === "01"
                                        ? cheftextRef
                                        : dieticiantextRef
                                    }
                                    className={`${styles.staff__container__text}`}>
                                    {
                                        [1, 2, 3].map((num, index) => {
                                            return (
                                                <div
                                                    className={`text__inner ${styles.staff__container__text__inner}`} key={index}>
                                                    <h4>
                                                        {item[`headline${num}`]}
                                                    </h4>
                                                    <p>
                                                        {item[`description${num}`]}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}