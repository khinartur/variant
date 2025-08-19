import {useCallback} from 'react'
import {useMatch, useNavigate} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {IconHome20} from '~/shared/icons'
import {Button, Logo, Progress, Text} from '~/shared/ui'
import styles from './Header.module.css'

export const Header = () => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const isHomePage = useMatch(AppRoutes.applications)

    const onHomeClick = useCallback(() => {
        navigate(AppRoutes.applications)
    }, [navigate])

    return (
        <div className={styles.header}>
            <Logo short={isMobile} />
            <div className={styles.right}>
                <div className={styles.progress}>
                    <Text color="secondary" size="lg">
                        {isMobile
                            ? '3/5 generated'
                            : '3/5 applications generated'}
                    </Text>
                    <Progress short progress={3} />
                </div>
                {!isHomePage && (
                    <Button
                        variant="outline"
                        size="sm"
                        iconLeft={<IconHome20 />}
                        onClick={onHomeClick}
                    />
                )}
            </div>
        </div>
    )
}
