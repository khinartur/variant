import {APPLICATIONS_PROGRESS_STEPS} from '~/shared/constants'
import type {Letter as LetterType} from '~/shared/types'
import {ApplicationsHeader, Banner, LettersGrid} from '~/widgets'
import styles from './Applications.module.css'

type ApplicationsProps = {
    letters: LetterType[]
}

export const Applications = ({letters}: ApplicationsProps) => {
    return (
        <div className={styles.container}>
            <ApplicationsHeader />
            <LettersGrid className={styles.letters} letters={letters} />
            <Banner
                className={styles.banner}
                progress={letters.length}
                total={APPLICATIONS_PROGRESS_STEPS}
                onCreate={() => {}}
            />
        </div>
    )
}
