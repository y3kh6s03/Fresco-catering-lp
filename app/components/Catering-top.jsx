"use client"

import Image from "next/image";
import { useContext } from "react";

import styles from "app/styles/cateringTop.module.scss";
import { UserFont } from "@/app/page";


export const CateringTop = () => {
    const { Noto, NotoNum } = useContext(UserFont);
    return (
        <>
            <div className={styles.catering__hero}>
                <div className={styles.catering__hero__title}>
                    <h2 className={Noto.className}>
                        Service
                        <span className={NotoNum.className}>01</span>
                    </h2>
                </div>



                <div className={styles.catering__hero__image}>
                    <Image src={"/images/cuisine.jpg"} fill sizes="100%" style={{ objectFit: "cover" }} alt="catering-image" />
                </div>

                <svg viewBox="0 0 1 1">
                    <defs>
                        <clipPath id="clippath" clipPathUnits="objectBoundingBox">
                        <path className="cls-1" d="m.76.86s.06-.1.06-.16c0-.04-.01-.07-.02-.1.04.04.09.04.14,0,.03-.02.04-.05.06-.08h0s-.07-.03-.11-.02c-.05,0-.09.05-.09.1-.01-.02-.02-.04-.04-.06-.02-.03-.05-.06-.07-.09-.03-.03-.05-.07-.05-.11,0-.03,0-.07.03-.09.04-.02.08-.02.11,0,.02.01.04.03.07.04,0,0,0,0,0,0C.73.03.58.02.51,0h-.03C.28-.01-.03.16,0,.56c.02.23.19.39.36.43.04,0,.13.02.22-.02.08-.03.14-.08.17-.11Z"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>

            <div className={styles.catering__inner}>
                <div className={styles.catering__inner__headline}>
                    <h3>
                        あらゆるご要望に対応<br />
                        出張シェフ
                    </h3>
                </div>
                <div className={styles.catering__inner__description}>
                    <p>
                        お客様にご指定いただいた会場までプロの料理人がおうかがいし、その場で調理を行います。可能な限りお客様のご要望に寄り添うために、固定のメニューはご用意しておりません。ロケーション、料理ジャンル、食材など、まずはご相談ください。企業イベント、仲間との手ぶらBBQ、季節行事などさまざまなシーンに対応しております。料理人と管理栄養士が作るメニューは、栄養満点で本格派。心も体も喜ぶ料理をご提供します。食器や什器なども当社が準備しますので、お客様にご負担はおかけしません。
                    </p>
                </div>
            </div>
        </>
    )
}