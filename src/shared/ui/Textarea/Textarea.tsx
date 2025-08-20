import clsx from 'clsx'
import {useMemo, useState} from 'react'
import styles from './Textarea.module.css'

interface TextareaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
    defaultValue?: string
    label?: string
    error?: boolean
    limit?: number
}

export const Textarea: React.FC<TextareaProps> = ({
    className,
    id,
    defaultValue = '',
    label,
    error,
    limit,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue)
    const textareaId = useMemo(
        () => id || `textarea-${Math.random().toString(36)}`,
        [id],
    )

    const currentLength = value.length
    const isLimitExceeded = limit && currentLength > limit
    const isError = error || isLimitExceeded

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value

        setValue(newValue)
        onChange?.(e)
    }

    const textareaElement = (
        <textarea
            className={clsx(
                styles.textarea,
                className,
                isError && styles.error,
            )}
            id={textareaId}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )

    const counterElement = limit && (
        <span
            className={clsx(styles.limit, isLimitExceeded && styles.limitError)}
        >
            {currentLength}/{limit}
        </span>
    )

    if (label || limit) {
        return (
            <div className={styles.container}>
                {label && (
                    <label htmlFor={textareaId}>
                        <span className={styles.label}>{label}</span>
                    </label>
                )}
                {textareaElement}
                {counterElement}
            </div>
        )
    }

    return textareaElement
}
