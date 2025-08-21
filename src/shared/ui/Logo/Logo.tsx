import {memo, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {IconLogo, IconLogoType} from '~/shared/icons'
import styles from './Logo.module.css'

interface LogoProps {
    short?: boolean
}

export const Logo: React.FC<LogoProps> = memo(({short}) => {
    const navigate = useNavigate()

    const onClick = useCallback(() => {
        navigate(AppRoutes.applications)
    }, [navigate])

    return (
        <div className={styles.container} onClick={onClick}>
            <IconLogo />
            {!short && <IconLogoType />}
        </div>
    )
})
