import {useAppStore} from '~/shared/store'
import {ApplicationForm, Letter} from '~/widgets'
import styles from './NewApplication.module.css'

export const NewApplication = () => {
    const {formDraft} = useAppStore()

    return (
        <div className={styles.container}>
            <ApplicationForm className={styles.form} draft={formDraft} />
            <Letter className={styles.letter} />
        </div>
    )
}
