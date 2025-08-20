import clsx from 'clsx'
import {useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {
    APPLICATION_FORM_DETAILS_LIMIT,
    DEFAULT_NEW_APPLICATION_FORM_VALUES,
} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {useAppStore} from '~/shared/store'
import type {ApplicationFormData} from '~/shared/types'
import {Button, Input, Text, Textarea} from '~/shared/ui'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {
    draft: ApplicationFormData | null
}

export const ApplicationForm = ({
    className,
    draft,
    ...props
}: ApplicationFormProps) => {
    const isMobile = useIsMobile()
    const {updateFormDraft} = useAppStore()

    const {
        register,
        subscribe,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<ApplicationFormData>({
        mode: 'onChange',
        defaultValues: draft ?? DEFAULT_NEW_APPLICATION_FORM_VALUES,
    })

    useEffect(() => {
        const unsubscribe = subscribe({
            formState: {
                values: true,
            },
            callback: ({values}) => {
                console.log('values', values)
                updateFormDraft(values)
            },
        })

        return () => unsubscribe()
    }, [subscribe, updateFormDraft])

    const onSubmit = useCallback((data: ApplicationFormData) => {
        console.log('Form data:', data)
    }, [])

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx(styles.form, className)}
            {...props}
        >
            <div className={styles.header}>
                <Text variant="h1" color="secondary">
                    New application
                </Text>
            </div>
            <div className={styles.content}>
                {isMobile ? (
                    <>
                        <div className={styles.line}>
                            <Input
                                label="Job title"
                                placeholder="Product Manager"
                                error={!!errors.jobTitle}
                                {...register('jobTitle', {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className={styles.line}>
                            <Input
                                label="Company"
                                placeholder="Apple"
                                error={!!errors.company}
                                {...register('company', {
                                    required: true,
                                })}
                            />
                        </div>
                    </>
                ) : (
                    <div className={styles.line}>
                        <Input
                            label="Job title"
                            placeholder="Product Manager"
                            error={!!errors.jobTitle}
                            {...register('jobTitle', {
                                required: true,
                            })}
                        />
                        <Input
                            label="Company"
                            placeholder="Apple"
                            error={!!errors.company}
                            {...register('company', {
                                required: true,
                            })}
                        />
                    </div>
                )}
                <div className={styles.line}>
                    <Input
                        label="I am good at..."
                        placeholder="HTML, CSS and doing things in time"
                        error={!!errors.skills}
                        {...register('skills', {
                            required: true,
                        })}
                    />
                </div>
                <Textarea
                    label="Additional details"
                    placeholder="Describe why you are a great fit or paste your bio"
                    limit={APPLICATION_FORM_DETAILS_LIMIT}
                    error={!!errors.details}
                    {...register('details', {
                        required: true,
                        maxLength: {
                            value: APPLICATION_FORM_DETAILS_LIMIT,
                            message: `Additional details cannot exceed ${APPLICATION_FORM_DETAILS_LIMIT} characters`,
                        },
                    })}
                />
            </div>
            <Button
                type="submit"
                size={isMobile ? 'md' : 'lg'}
                disabled={!isValid}
            >
                Generate Now
            </Button>
        </form>
    )
}
