import {memo, useCallback} from 'react'
import {useMatch, useNavigate} from 'react-router-dom'
import {APPLICATIONS_PROGRESS_STEPS, AppRoutes} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {IconHome} from '~/shared/icons'
import {useAppStore} from '~/shared/store'
import {Button, Logo, Progress, Text} from '~/shared/ui'
import styles from './Header.module.css'

export const Header = memo(() => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const isHomePage = useMatch(AppRoutes.applications)
    const {letters} = useAppStore()
    const progress = letters.length

    const onHomeClick = useCallback(() => {
        navigate(AppRoutes.applications)
    }, [navigate])

    return (
        <div className={styles.header}>
            <Logo short={isMobile} />
            <div className={styles.right}>
                <div className={styles.progress}>
                    <Text color="secondary" size={isMobile ? 'sm' : 'lg'}>
                        {isMobile
                            ? `${progress}/${APPLICATIONS_PROGRESS_STEPS} generated`
                            : `${progress}/${APPLICATIONS_PROGRESS_STEPS} applications generated`}
                    </Text>
                    <Progress short progress={progress} />
                </div>
                {!isHomePage && (
                    <Button
                        variant="outline"
                        size="sm"
                        iconLeft={<IconHome />}
                        onClick={onHomeClick}
                    />
                )}
            </div>
        </div>
    )
})
