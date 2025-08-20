import {create} from 'zustand'
import type {ApplicationFormData, Letter} from '../types'

type AppStoreState = {
    letters: Letter[]
    formDraft: ApplicationFormData | null
}

type AppStoreActions = {
    updateFormDraft: (draft: ApplicationFormData) => void
    addLetter: (letter: Letter) => void
    deleteLetter: (id: Letter['id']) => void
}

type AppStore = AppStoreState & AppStoreActions

export const useAppStore = create<AppStore>()(set => ({
    letters: [],
    formDraft: null,
    updateFormDraft: (draft: ApplicationFormData) => set({formDraft: draft}),
    addLetter: (letter: Letter) =>
        set(state => ({letters: [...state.letters, letter]})),
    deleteLetter: (id: Letter['id']) =>
        set(state => ({
            letters: state.letters.filter(letter => letter.id !== id),
        })),
}))
