import type {IDBPDatabase} from 'idb'
import {useEffect} from 'react'
import {useAppStore} from '~/shared/store'
import type {Letter} from '~/shared/types'
import {type AltShiftDBSchema, saveLettersToDB} from '~/shared/utils'

export const useBootstrap = (
    db: IDBPDatabase<AltShiftDBSchema>,
    savedLetters: Letter[],
) => {
    useAppStore.setState({letters: savedLetters})

    useEffect(() => {
        const unsubscribe = useAppStore.subscribe(
            state => state.letters,
            letters => {
                saveLettersToDB(db, letters)
            },
        )

        return () => unsubscribe()
    }, [db])
}
