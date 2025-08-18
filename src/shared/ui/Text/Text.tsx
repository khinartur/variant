import styles from './Text.module.css'

type TextVariant = 'h1' | 'h2' | 'primary' | 'secondary'
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
type TextElement = 'h1' | 'h2' | 'span'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TextVariant
    size?: TextSize
    as?: TextElement
}

export const Text: React.FC<TextProps> = ({
    children,
    variant = 'primary',
    size,
    as,
    className,
    ...props
}) => {
    const getElementType = (): TextElement => {
        if (as) return as
        if (variant === 'h1') return 'h1'
        if (variant === 'h2') return 'h2'
        return 'span'
    }

    const Element = getElementType()
    const textClasses = [
        styles.text,
        styles[variant],
        size && styles[`size-${size}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <Element className={textClasses} {...props}>
            {children}
        </Element>
    )
}
