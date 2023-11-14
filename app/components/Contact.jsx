import styles from "app/styles/contact.module.scss";

export const Contact =()=>{
    return(
        <>
        <div className={styles.contact}>
            <p className={styles.contact__jaText}>
                お問い合わせ
            </p>
            <span className={styles.contact__enText}>
                Contact
            </span>
            <span className={styles.contact__bar}></span>
            <span className={styles.contact__click}>
                Click the Link !!
            </span>
        </div>
        </>
    )
}