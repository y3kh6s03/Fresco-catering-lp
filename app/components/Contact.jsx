import Link from "next/link";

import styles from "app/styles/contact.module.scss";
import { useContext } from "react";
import { UseFont } from "@/app/page";

export const Contact = () => {
    const { Noto } = useContext(UseFont);
    return (
        <>
            <Link href={"https://fresco-c.com/WP/contact/"} className={styles.contact}>
                <div className={styles.contact__inner}>
                    <p className={styles.contact__inner__jaText}>
                        お問い合わせ
                    </p>
                    <span className={`${Noto.className} ${styles.contact__inner__enText}`}>
                        Contact
                    </span>
                </div>
                <span className={styles.contact__bar}></span>
                <span className={`${Noto.className} ${styles.contact__click}`}>
                    Click the Link !!
                </span>
            </Link>

            <small className={styles.copy}>© 2023 Fresco company .All rights reserved.</small>
        </>
    )
}