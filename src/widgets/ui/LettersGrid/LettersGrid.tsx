import type {Letter as LetterType} from '~/shared/types'
import {Letter} from '../Letter'
import styles from './LettersGrid.module.css'

interface LettersGridProps extends React.HTMLAttributes<HTMLDivElement> {
    letters: LetterType[]
}

export const LettersGrid = ({
    className,
    letters,
    ...props
}: LettersGridProps) => {
    const lettersClasses = [styles.letters, className].filter(Boolean).join(' ')

    if (letters.length === 0) {
        return null
    }

    return (
        <div className={lettersClasses} {...props}>
            {letters.map(letter => (
                <Letter key={letter.id} letter={letter} preview />
            ))}
        </div>
    )
}
