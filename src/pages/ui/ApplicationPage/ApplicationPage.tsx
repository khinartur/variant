import {memo, useCallback, useEffect, useRef, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {generateCoverLetter} from '~/shared/api'
import {AppRoutes} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {useAppStore} from '~/shared/store'
import type {ApplicationFormData} from '~/shared/types'
import {buildAppRoutePath} from '~/shared/utils'
import {ApplicationForm, Banner, Letter} from '~/widgets'
import styles from './ApplicationPage.module.css'

export const ApplicationPage = memo(() => {
    const {id} = useParams<{id: string}>()
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const {addLetter, updateLetter} = useAppStore()
    const existingLetter = useAppStore(state =>
        state.letters.find(letter => letter.id === id),
    )
    const [loading, setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const letterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (id && !existingLetter) {
            navigate(AppRoutes.applications)
        }
    }, [id, existingLetter, navigate])

    const scrollToLetter = useCallback(() => {
        setTimeout(() => {
            letterRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }, 500)
    }, [])

    const scrollToForm = useCallback(() => {
        formRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, [])

    const onCreateNew = useCallback(() => {
        formRef.current?.reset()
        scrollToForm()
    }, [scrollToForm])

    const onGenerate = useCallback(
        async (data: ApplicationFormData) => {
            setLoading(true)
            if (isMobile) {
                scrollToLetter()
            }

            const newLetterContent = await generateCoverLetter(data)
            const newLetter = {
                id: existingLetter ? existingLetter.id : crypto.randomUUID(),
                content: newLetterContent,
                formData: data,
            }
            if (existingLetter) {
                updateLetter(existingLetter.id, newLetter)
            } else {
                addLetter(newLetter)
            }
            navigate(
                buildAppRoutePath(AppRoutes.application, {id: newLetter.id}),
            )
            setLoading(false)
        },
        [
            addLetter,
            updateLetter,
            navigate,
            scrollToLetter,
            existingLetter,
            isMobile,
        ],
    )

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ApplicationForm
                    ref={formRef}
                    className={styles.form}
                    letter={existingLetter}
                    onGenerate={onGenerate}
                    processing={loading}
                />
                <Letter
                    ref={letterRef}
                    className={styles.letter}
                    loading={loading}
                    letter={existingLetter}
                />
            </div>
            {existingLetter && (
                <Banner className={styles.banner} onCreateNew={onCreateNew} />
            )}
        </div>
    )
})
