import {IconLoading24} from '~/shared/icons'
import type {ComponentSize} from '~/shared/styles/types'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ComponentSize
    variant?: ButtonVariant
    loading?: boolean
    fullWidth?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    size = 'md',
    variant = 'primary',
    loading = false,
    fullWidth = false,
    disabled,
    className,
    iconLeft,
    iconRight,
    children,
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[size],
        styles[variant],
        loading && styles.loading,
        fullWidth && styles.fullWidth,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button className={buttonClasses} disabled={disabled} {...props}>
            {loading && <IconLoading24 />}
            {!loading && (
                <>
                    {iconLeft}
                    {children}
                    {iconRight}
                </>
            )}
        </button>
    )
}
