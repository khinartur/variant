import {useCallback, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useAppStore} from '~/shared/store'
import type {ApplicationFormData} from '~/shared/types'
import {buildAppRoutePath} from '~/shared/utils'
import {generateTemplateLetter} from '~/shared/utils/letter'
import {ApplicationForm, Banner, Letter} from '~/widgets'
import styles from './ApplicationPage.module.css'

export const ApplicationPage = () => {
    const {id} = useParams<{id: string}>()
    const navigate = useNavigate()
    const {addLetter} = useAppStore()
    const existingLetter = useAppStore(state =>
        state.letters.find(letter => letter.id === id),
    )
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id && !existingLetter) {
            navigate(AppRoutes.applications)
        }
    }, [id, existingLetter, navigate])

    const onGenerate = useCallback(
        async (data: ApplicationFormData) => {
            setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 3000))
            const newLetter = generateTemplateLetter(data)
            addLetter(newLetter)
            navigate(
                buildAppRoutePath(AppRoutes.application, {id: newLetter.id}),
            )
            setLoading(false)
        },
        [addLetter, navigate],
    )

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ApplicationForm
                    className={styles.form}
                    letter={existingLetter}
                    onGenerate={onGenerate}
                    processing={loading}
                />
                <Letter
                    className={styles.letter}
                    loading={loading}
                    letter={existingLetter}
                />
            </div>
            {existingLetter && <Banner className={styles.banner} />}
        </div>
    )
}
