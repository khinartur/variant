import {APPLICATIONS_PROGRESS_STEPS} from '~/shared/constants'
import {IconPlus20} from '~/shared/icons'
import type {Letter as LetterType} from '~/shared/types'
import {Button, Text} from '~/shared/ui'
import {Banner, Letter} from '~/widgets'
import styles from './Applications.module.css'

type ApplicationsProps = {
    letters: LetterType[]
}

export const Applications = ({letters}: ApplicationsProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text variant="h1">Applications</Text>
                <Button iconRight={<IconPlus20 />}>Create new</Button>
            </div>
            {letters.length > 0 && (
                <div className={styles.letters}>
                    {letters.map(letter => (
                        <Letter key={letter.id} letter={letter} preview />
                    ))}
                </div>
            )}
            {letters.length < APPLICATIONS_PROGRESS_STEPS && (
                <Banner
                    className={styles.banner}
                    progress={letters.length}
                    total={APPLICATIONS_PROGRESS_STEPS}
                    onCreate={() => {}}
                />
            )}
        </div>
    )
}
