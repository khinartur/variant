import clsx from 'clsx'
import {memo} from 'react'
import {APPLICATIONS_PROGRESS_STEPS} from '~/shared/constants'
import {IconCheck} from '~/shared/icons'
import styles from './Progress.module.css'

interface ProgressProps {
    progress: number
    short?: boolean
}

export const Progress: React.FC<ProgressProps> = memo(
    ({progress: progressProp, short}) => {
        const progress = Math.min(progressProp, APPLICATIONS_PROGRESS_STEPS)

        if (progress >= APPLICATIONS_PROGRESS_STEPS) {
            return <IconCheck />
        }

        return (
            <div className={styles.container}>
                {new Array(progress).fill(null).map((_, idx) => (
                    <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: no other data for index
                        key={idx}
                        className={clsx(
                            styles.step,
                            styles.filled,
                            short && styles.short,
                        )}
                    />
                ))}
                {new Array(APPLICATIONS_PROGRESS_STEPS - progress)
                    .fill(null)
                    .map((_, idx) => (
                        <div
                            // biome-ignore lint/suspicious/noArrayIndexKey: no other data for index
                            key={idx}
                            className={clsx(styles.step, short && styles.short)}
                        />
                    ))}
            </div>
        )
    },
)
