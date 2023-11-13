import Image from "next/image"

import styles from "app/styles/cateringMiddle.module.scss";

export const CateringMiddle = ({ item }) => {
    return (
        <div className={styles.catering}>
            <div className={styles.catering__image}>
                <Image src={`${item.archive1}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </div>
            <div className={styles.catering__image}>
                <Image src={`${item.archive2}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="archive-image" />
            </div>
            <div className={styles.catering__headline}>
                <h3>
                    {item.headline1st}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.headline2nd}
                </h3>
            </div>
        </div>
    )
}