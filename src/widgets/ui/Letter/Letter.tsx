import clsx from 'clsx'
import {useIsMobile} from '~/shared/hooks'
import {IconCopy, IconTrash} from '~/shared/icons'
import type {Letter as LetterType} from '~/shared/types'
import {Button, Text} from '~/shared/ui'
import styles from './Letter.module.css'

interface LetterProps extends React.HTMLAttributes<HTMLDivElement> {
    letter?: LetterType
    preview?: boolean
}

export const Letter = ({letter, preview, className, ...props}: LetterProps) => {
    const isMobile = useIsMobile()

    return (
        <div
            className={clsx(
                styles.letter,
                preview && styles.preview,
                className,
            )}
            {...props}
        >
            <div
                className={clsx(
                    styles.content,
                    preview && styles.overflowHidden,
                )}
            >
                <Text color="secondary" size="lg">
                    {letter?.content ||
                        'Your personalized job application will appear here...'}
                </Text>
                <div className={styles.gradient} />
            </div>
            <div
                className={clsx(styles.footer, preview && styles.footerPreview)}
            >
                {preview && (
                    <Button variant="ghost" size="xs" iconLeft={<IconTrash />}>
                        Delete
                    </Button>
                )}
                <Button variant="ghost" size="xs" iconRight={<IconCopy />}>
                    {isMobile ? 'Copy' : 'Copy to clipboard'}
                </Button>
            </div>
        </div>
    )
}
