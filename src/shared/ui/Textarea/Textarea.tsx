import styles from './Textarea.module.css'

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children?: React.ReactNode
}

export const Textarea: React.FC<TextareaProps> = ({
    className,
    children,
    ...props
}) => {
    const textareaClasses = [styles.textarea, className]
        .filter(Boolean)
        .join(' ')

    return <textarea className={textareaClasses} {...props} />
}
