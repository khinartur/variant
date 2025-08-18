import styles from './Progress.module.css'

type Progress = 0 | 1 | 2 | 3 | 4 | 5

const PROGRESS_STEPS = 5

interface ProgressProps {
    progress: Progress
    short?: boolean
}

export const Progress: React.FC<ProgressProps> = ({
    progress: progressProp,
    short,
}) => {
    const progress = Math.min(progressProp, PROGRESS_STEPS)

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
            {new Array(PROGRESS_STEPS - progress).fill(null).map((_, idx) => (
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
