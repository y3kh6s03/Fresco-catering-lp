import Image from "next/image";

import styles from "app/styles/cateringBottom.module.scss";

export const CateringBottom = () => {
    return (
        <div className={styles.catering}>
            <div className={styles.catering__headline}>
                <h3>
                    <span>
                        ご利用例
                    </span>
                    千曲市ワーケーションウェルカムデイズ
                </h3>
            </div>

            <div className={styles.catering__inner}>
                <div className={styles.catering__inner__description}>
                    <p>
                        千曲市観光局と株式会社ふろしきやが運営する「千曲市ワーケーションウェルカムデイズ」にて、出張シェフを実施。千曲市・あんずの里や姨捨の棚田などあらゆるロケーションで青空レストランを行いました。
                    </p>
                </div>
                <div className={styles.catering__inner__image}>
                    <Image src={"/images/cuisine2.jpg"} fill sizes="100%" style={{ objectFit: "cover" }} alt="catering-image" />
                </div>
            </div>
        </div>
    )
}