import clsx from 'clsx'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
    label?: string
}

export const Input: React.FC<InputProps> = ({
    id,
    className,
    error,
    label,
    ...props
}) => {
    const inputId = id || `input-${Math.random().toString(36)}`

    const inputElement = (
        <input
            type="text"
            className={clsx(styles.input, className, error && styles.error)}
            id={inputId}
            {...props}
        />
    )

    if (label) {
        return (
            <label className={styles.container} htmlFor={inputId}>
                <span className={styles.label}>{label}</span>
                {inputElement}
            </label>
        )
    }

    return inputElement
}
