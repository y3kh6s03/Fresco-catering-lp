import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import styles from "app/styles/cateringMiddle.module.scss";
import { useRef } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export const CateringMiddle = ({ item }) => {

    const archive1 = useRef(null)
    const archive2 = useRef(null)

    const archive1Animation = useScrollAnimation(archive1, 50)
    const archive2Animation = useScrollAnimation(archive2, 100)

    return (
        <div className={styles.catering}>
            <motion.div
                ref={archive1}
                style={{ y: archive1Animation, }}
                className={styles.catering__image}>
                <Image src={`${item.archive1}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </motion.div>
            <motion.div
                ref={archive2}
                style={{ y: archive2Animation, }}
                className={styles.catering__image}>
                <Image src={`${item.archive2}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </motion.div>
            <div className={styles.catering__headline}>
                <h3>
                    {item.headline1st}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.headline2nd}
                </h3>
            </div>
        </div>
    )
}