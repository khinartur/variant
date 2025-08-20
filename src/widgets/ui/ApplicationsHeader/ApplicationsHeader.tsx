import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {IconPlus} from '~/shared/icons'
import {Button, Text} from '~/shared/ui'
import styles from './ApplicationsHeader.module.css'

export const ApplicationsHeader = () => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()

    const onCreateClick = useCallback(() => {
        navigate(AppRoutes.newApplication)
    }, [navigate])

    return (
        <div className={styles.container}>
            <Text variant="h1" size={isMobile ? '2xl' : '5xl'}>
                Applications
            </Text>
            <Button iconRight={<IconPlus />} onClick={onCreateClick}>
                {isMobile ? 'Create' : 'Create new'}
            </Button>
        </div>
    )
}
