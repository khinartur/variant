import {IconLogo, IconLogoType} from '~/shared/icons'
import styles from './Logo.module.css'

interface LogoProps {
    short?: boolean
}

export const Logo: React.FC<LogoProps> = ({short}) => {
    return (
        <div className={styles.container}>
            <IconLogo />
            {!short && <IconLogoType />}
        </div>
    )
}
