import {memo} from 'react'
import {Banner, ApplicationsHeader as Header, LettersGrid} from '~/widgets'
import styles from './Applications.module.css'

export const Applications = memo(() => {
    return (
        <div className={styles.container}>
            <Header />
            <LettersGrid className={styles.letters} />
            <Banner className={styles.banner} />
        </div>
    )
})
