import clsx from 'clsx'
import {useAppStore} from '~/shared/store'
import {Letter} from '../Letter'
import styles from './LettersGrid.module.css'

interface LettersGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LettersGrid = ({className, ...props}: LettersGridProps) => {
    const {letters} = useAppStore()

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
