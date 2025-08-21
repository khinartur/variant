import {create} from 'zustand'
import type {ApplicationFormData, Letter} from '../types'

type AppStoreState = {
    letters: Letter[]
    formDraft: ApplicationFormData | null
}

type AppStoreActions = {
    updateFormDraft: (draft: ApplicationFormData) => void
    addLetter: (letter: Letter) => void
    updateLetter: (id: Letter['id'], letter: Letter) => void
    deleteLetter: (id: Letter['id']) => void
}

type AppStore = AppStoreState & AppStoreActions

export const useAppStore = create<AppStore>()(set => ({
    letters: [],
    formDraft: null,
    updateFormDraft: (draft: ApplicationFormData) => set({formDraft: draft}),
    addLetter: (letter: Letter) =>
        set(state => ({letters: [...state.letters, letter], formDraft: null})),
    updateLetter: (id: Letter['id'], letter: Letter) =>
        set(state => {
            const index = state.letters.findIndex(letter => letter.id === id)
            if (index !== -1) {
                state.letters[index] = letter
                state.formDraft = null
            }
            return state
        }),
    deleteLetter: (id: Letter['id']) =>
        set(state => ({
            letters: state.letters.filter(letter => letter.id !== id),
        })),
}))
