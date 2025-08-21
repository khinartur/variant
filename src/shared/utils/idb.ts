import {type IDBPDatabase, openDB} from 'idb'
import type {Letter} from '../types'

const DB_NAME = 'AltShiftAppDB'
const DB_VERSION = 1

export type AltShiftDBSchema = {
    state: {
        letters: Letter[]
    }
}

export const initDB = async () => {
    const db = await openDB<AltShiftDBSchema>(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('state')) {
                db.createObjectStore('state')
            }
        },
    })

    return db
}

export const saveLettersToDB = async (
    db: IDBPDatabase<AltShiftDBSchema>,
    letters: Letter[],
) => {
    await db.put('state', letters, 'letters')
}

export const loadLettersFromDB = async (
    db: IDBPDatabase<AltShiftDBSchema>,
): Promise<Letter[]> => {
    const result = await db.get('state', 'letters')
    if (!result) {
        return []
    }
    return result
}
