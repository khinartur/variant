import clsx from 'clsx'
import styles from './Textarea.module.css'

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: boolean
    limit?: number
}

export const Textarea: React.FC<TextareaProps> = ({
    className,
    id,
    label,
    error,
    limit,
    value,
    onChange,
    ...props
}) => {
    const textareaId = id || `textarea-${Math.random().toString(36)}`

    const currentLength = typeof value === 'string' ? value.length : 0

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (limit && e.target.value.length > limit) {
            return
        }
        onChange?.(e)
    }

    const textareaElement = (
        <textarea
            className={clsx(styles.textarea, className, error && styles.error)}
            id={textareaId}
            value={value}
            onChange={handleChange}
            {...props}
        />
    )

    const counterElement = limit && (
        <span className={styles.limit}>
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
