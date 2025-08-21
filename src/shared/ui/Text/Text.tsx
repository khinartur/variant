import clsx from 'clsx'
import {memo} from 'react'
import styles from './Text.module.css'

type TextVariant = 'h1' | 'h2' | 'plain'
type TextColor = 'primary' | 'secondary'
type TextSize =
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
type TextElement = 'h1' | 'h2' | 'span'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TextVariant
    color?: TextColor
    size?: TextSize
    as?: TextElement
}

export const Text: React.FC<TextProps> = memo(
    ({
        children,
        variant = 'plain',
        color = 'primary',
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
        const textClasses = clsx(
            styles.text,
            styles[variant],
            styles[color],
            size && styles[`size-${size}`],
            className,
        )

        return (
            <Element className={textClasses} {...props}>
                {children}
            </Element>
        )
    },
)
