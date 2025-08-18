import {useIsMobile} from '~/shared/hooks'
import {IconHome20} from '~/shared/icons'
import {Button, Logo, Progress, Text} from '~/shared/ui'
import styles from './Header.module.css'

export const Header = () => {
    const isMobile = useIsMobile()

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
                <Button variant="outline" size="sm" iconLeft={<IconHome20 />} />
            </div>
        </div>
    )
}
