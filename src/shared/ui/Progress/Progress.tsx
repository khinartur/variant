import {APPLICATIONS_PROGRESS_STEPS} from '~/shared/constants'
import {IconCheck28} from '~/shared/icons'
import styles from './Progress.module.css'

interface ProgressProps {
    progress: number
    short?: boolean
}

export const Progress: React.FC<ProgressProps> = ({
    progress: progressProp,
    short,
}) => {
    const progress = Math.min(progressProp, APPLICATIONS_PROGRESS_STEPS)

    if (progress >= APPLICATIONS_PROGRESS_STEPS) {
        return <IconCheck28 />
    }

    return (
        <div className={styles.container}>
            {new Array(progress).fill(null).map((_, idx) => (
                <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: no other data for index
                    key={idx}
                    className={[
                        styles.step,
                        styles.filled,
                        short && styles.short,
                    ]
                        .filter(Boolean)
                        .join(' ')}
                />
            ))}
            {new Array(APPLICATIONS_PROGRESS_STEPS - progress)
                .fill(null)
                .map((_, idx) => (
                    <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: no other data for index
                        key={idx}
                        className={[styles.step, short && styles.short]
                            .filter(Boolean)
                            .join(' ')}
                    />
                ))}
        </div>
    )
}
