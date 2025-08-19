import {ApplicationForm, Letter} from '~/widgets'
import styles from './NewApplication.module.css'

export const NewApplication = () => {
    return (
        <div className={styles.container}>
            <ApplicationForm className={styles.form} />
            <Letter className={styles.letter} />
        </div>
    )
}
