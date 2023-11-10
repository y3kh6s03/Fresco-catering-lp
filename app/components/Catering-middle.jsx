import Image from "next/image"

import styles from "app/styles/cateringMiddle.module.scss";

export const CateringMiddle = () => {
    return (
        <div className={styles.catering}>
            <div className={styles.catering__image}>
                <Image src={"/images/cuisine2.jpg"} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </div>
            <div className={styles.catering__image}>
                <Image src={"/images/cuisine2.jpg"} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </div>
            <div className={styles.catering__headline}>
                <h3>
                    あなたの好きな場所で<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;あなただけの食事を楽しみませんか？
                </h3>
            </div>
        </div>
    )
}