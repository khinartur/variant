import clsx from 'clsx'
import {memo, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {IconTrash} from '~/shared/icons'
import {useAppStore} from '~/shared/store'
import type {Letter as LetterType} from '~/shared/types'
import {Button, Text} from '~/shared/ui'
import {buildAppRoutePath} from '~/shared/utils'
import {CopyToClipboardButton} from '../CopyToClipboardButton'
import styles from './Letter.module.css'
import {Loader} from './Loader'

interface LetterProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean
    letter?: LetterType
    preview?: boolean
}

export const Letter = memo(
    ({loading, letter, preview, className, ...props}: LetterProps) => {
        const navigate = useNavigate()
        const {deleteLetter} = useAppStore()

        const onClick = useCallback(() => {
            if (preview && letter?.id) {
                navigate(
                    buildAppRoutePath(AppRoutes.application, {id: letter.id}),
                )
            }
        }, [preview, letter?.id, navigate])

        const onDelete = useCallback(() => {
            if (letter?.id) {
                deleteLetter(letter.id)
            }
        }, [deleteLetter, letter?.id])

        return (
            <div
                className={clsx(
                    styles.letter,
                    preview && styles.preview,
                    !letter && styles.empty,
                    className,
                )}
                onClick={preview ? onClick : undefined}
                {...props}
            >
                {loading ? (
                    <Loader />
                ) : (
                    <>
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
                            className={clsx(
                                styles.footer,
                                preview && styles.footerPreview,
                            )}
                        >
                            {preview && (
                                <Button
                                    variant="ghost"
                                    size="xs"
                                    iconLeft={<IconTrash />}
                                    onClick={onDelete}
                                >
                                    Delete
                                </Button>
                            )}
                            {letter?.content && (
                                <CopyToClipboardButton
                                    content={letter.content}
                                />
                            )}
                        </div>
                    </>
                )}
            </div>
        )
    },
)
