import clsx from 'clsx'
import {memo, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {APPLICATIONS_PROGRESS_STEPS, AppRoutes} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {IconPlus} from '~/shared/icons'
import {useAppStore} from '~/shared/store'
import {Button, Progress, Text} from '~/shared/ui'
import styles from './Banner.module.css'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Banner = memo(({className, ...props}: BannerProps) => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const {letters} = useAppStore()
    const progress = letters.length

    const onCreateClick = useCallback(() => {
        navigate(AppRoutes.newApplication)
    }, [navigate])

    if (progress >= APPLICATIONS_PROGRESS_STEPS) {
        return null
    }

    return (
        <div className={clsx(styles.banner, className)} {...props}>
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
                    iconLeft={<IconPlus width={24} height={24} />}
                    onClick={onCreateClick}
                >
                    Create New
                </Button>
            </div>
            <div className={styles.bannerFooter}>
                <Progress progress={progress} short={isMobile} />
                <Text color="secondary" size={isMobile ? 'sm' : 'lg'}>
                    {progress} out of {APPLICATIONS_PROGRESS_STEPS}
                </Text>
            </div>
        </div>
    )
})
