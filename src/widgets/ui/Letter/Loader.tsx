import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader} />
            <div className={styles.blur} />
            <div className={styles.layer} />
        </div>
    )
}
