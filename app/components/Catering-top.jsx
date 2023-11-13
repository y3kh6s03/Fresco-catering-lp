"use client"

import Image from "next/image";
import { useContext } from "react";

import styles from "app/styles/cateringTop.module.scss";
import { UseFont } from "@/app/page";


export const CateringTop = ({ item }) => {
    const { Noto, NotoNum } = useContext(UseFont);
    return (
        <>
            <div className={styles.catering__hero}>
                <div className={styles.catering__hero__title}>
                    <h2 className={Noto.className}>
                        Service
                        <span className={NotoNum.className}>{item.num}</span>
                    </h2>
                </div>



                <div className={styles.catering__hero__image}>
                    <Image src={`${item.image1}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="catering-image" />
                </div>

                <svg viewBox="0 0 1 1">
                    <defs>
                        <clipPath id="clippath" clipPathUnits="objectBoundingBox">
                            <path className="cls-1" d="m.76.86s.06-.1.06-.16c0-.04-.01-.07-.02-.1.04.04.09.04.14,0,.03-.02.04-.05.06-.08h0s-.07-.03-.11-.02c-.05,0-.09.05-.09.1-.01-.02-.02-.04-.04-.06-.02-.03-.05-.06-.07-.09-.03-.03-.05-.07-.05-.11,0-.03,0-.07.03-.09.04-.02.08-.02.11,0,.02.01.04.03.07.04,0,0,0,0,0,0C.73.03.58.02.51,0h-.03C.28-.01-.03.16,0,.56c.02.23.19.39.36.43.04,0,.13.02.22-.02.08-.03.14-.08.17-.11Z" />
                        </clipPath>
                    </defs>
                </svg>

            </div>

            <div className={styles.catering__inner}>
                <div className={styles.catering__inner__headline}>
                    <h3>
                        {item.copy}
                    </h3>
                </div>
                <div className={styles.catering__inner__description}>
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    )
}