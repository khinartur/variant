import {IconPlus24} from '~/shared/icons'
import {Button, Progress, Text} from '~/shared/ui'
import styles from './Banner.module.css'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    progress: number
    total: number
    onCreate: () => void
}

export const Banner = ({
    className,
    progress,
    total,
    onCreate,
    ...props
}: BannerProps) => {
    const bannerClasses = [styles.banner, className].filter(Boolean).join(' ')

    return (
        <div className={bannerClasses} {...props}>
            <div className={styles.bannerContent}>
                <Text variant="h2">Hit your goal</Text>
                <Text color="secondary" size="lg">
                    Generate and send out couple more job applications today to
                    get hired faster
                </Text>
                <Button size="lg" iconLeft={<IconPlus24 />} onClick={onCreate}>
                    Create New
                </Button>
            </div>
            <div className={styles.bannerFooter}>
                <Progress progress={progress} />
                <Text color="secondary" size="lg">
                    {progress} out of {total}
                </Text>
            </div>
        </div>
    )
}
