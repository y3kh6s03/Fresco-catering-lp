import Image from "next/image";

import styles from "app/styles/cateringBottom.module.scss";

export const CateringBottom = ({ item }) => {
    return (
        <div className={styles.catering}>
            <div className={styles.catering__headline}>
                <h3>
                    <span>
                        ご利用例
                    </span>
                    {item.author}
                </h3>
            </div>

            <div className={styles.catering__inner}>
                <div className={styles.catering__inner__description}>
                    <p>
                        {item.description2}
                    </p>
                </div>
                <div className={styles.catering__inner__image}>
                    <Image src={`${item.archive3}`} fill sizes="100%" style={{ objectFit: "cover" }} alt="catering-image" />
                </div>
            </div>
        </div>
    )
}