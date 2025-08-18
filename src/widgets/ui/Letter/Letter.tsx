import {IconCopy20, IconTrash20} from '~/shared/icons'
import {Button, Text} from '~/shared/ui'
import styles from './Letter.module.css'

interface LetterProps {
    letter?: string
    preview?: boolean
}

export const Letter = ({letter, preview}: LetterProps) => {
    const letterClasses = [styles.letter, preview && styles.preview]
        .filter(Boolean)
        .join(' ')
    const footerClasses = [styles.footer, preview && styles.footerPreview]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={letterClasses}>
            <div className={styles.content}>
                <Text color="secondary" size="lg">
                    {letter ||
                        'Your personalized job application will appear here...'}
                </Text>
                {preview && <div className={styles.gradient} />}
            </div>
            <div className={footerClasses}>
                {preview && (
                    <Button
                        variant="ghost"
                        size="xs"
                        iconLeft={<IconTrash20 />}
                    >
                        Delete
                    </Button>
                )}
                <Button variant="ghost" size="xs" iconRight={<IconCopy20 />}>
                    Copy to clipboard
                </Button>
            </div>
        </div>
    )
}
