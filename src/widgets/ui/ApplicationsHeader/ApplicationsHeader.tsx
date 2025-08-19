import {useIsMobile} from '~/shared/hooks'
import {IconPlus20} from '~/shared/icons'
import {Button, Text} from '~/shared/ui'
import styles from './ApplicationsHeader.module.css'

export const ApplicationsHeader = () => {
    const isMobile = useIsMobile()

    return (
        <div className={styles.container}>
            <Text variant="h1" size={isMobile ? '2xl' : '5xl'}>
                Applications
            </Text>
            <Button iconRight={<IconPlus20 />}>
                {isMobile ? 'Create' : 'Create new'}
            </Button>
        </div>
    )
}
