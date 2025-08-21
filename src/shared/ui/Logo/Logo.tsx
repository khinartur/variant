import {memo} from 'react'
import {IconLogo, IconLogoType} from '~/shared/icons'
import styles from './Logo.module.css'

interface LogoProps {
    short?: boolean
}

export const Logo: React.FC<LogoProps> = memo(({short}) => {
    return (
        <div className={styles.container}>
            <IconLogo />
            {!short && <IconLogoType />}
        </div>
    )
})
