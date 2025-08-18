import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
}

export const Input: React.FC<InputProps> = ({className, error, ...props}) => {
    const inputClasses = [styles.input, className, error && styles.error]
        .filter(Boolean)
        .join(' ')

    return <input type="text" className={inputClasses} {...props} />
}
