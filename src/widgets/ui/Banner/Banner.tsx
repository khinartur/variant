import {useIsMobile} from '~/shared/hooks'
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
    const isMobile = useIsMobile()
    const bannerClasses = [styles.banner, className].filter(Boolean).join(' ')

    if (progress >= total) {
        return null
    }

    return (
        <div className={bannerClasses} {...props}>
            <div className={styles.bannerContent}>
                <Text variant="h2" size={isMobile ? '2xl' : '4xl'}>
                    Hit your goal
                </Text>
                <Text color="secondary" size={isMobile ? 'sm' : 'lg'}>
                    Generate and send out couple more job applications today to
                    get hired faster
                </Text>
                <Button
                    size={isMobile ? 'md' : 'lg'}
                    iconLeft={<IconPlus24 />}
                    onClick={onCreate}
                >
                    Create New
                </Button>
            </div>
            <div className={styles.bannerFooter}>
                <Progress progress={progress} short={isMobile} />
                <Text color="secondary" size={isMobile ? 'sm' : 'lg'}>
                    {progress} out of {total}
                </Text>
            </div>
        </div>
    )
}
