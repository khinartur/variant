import clsx from 'clsx'
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
    if (letters.length === 0) {
        return null
    }

    return (
        <div className={clsx(styles.letters, className)} {...props}>
            {letters.map(letter => (
                <Letter key={letter.id} letter={letter} preview />
            ))}
        </div>
    )
}
