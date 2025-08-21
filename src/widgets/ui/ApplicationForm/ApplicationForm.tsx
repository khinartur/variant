import clsx from 'clsx'
import {memo, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {
    APPLICATION_FORM_DETAILS_LIMIT,
    DEFAULT_NEW_APPLICATION_FORM_VALUES,
} from '~/shared/constants'
import {useIsMobile} from '~/shared/hooks'
import {IconRepeat} from '~/shared/icons'
import {useAppStore} from '~/shared/store'
import type {ApplicationFormData, Letter} from '~/shared/types'
import {Button, Input, Text, Textarea} from '~/shared/ui'
import {buildFormTitle} from '~/shared/utils'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {
    letter?: Letter
    processing: boolean
    onGenerate: (data: ApplicationFormData) => Promise<void>
}

export const ApplicationForm = memo(
    ({
        className,
        letter,
        onGenerate,
        processing,
        ...props
    }: ApplicationFormProps) => {
        const isMobile = useIsMobile()
        const {formDraft, updateFormDraft} = useAppStore()
        const preview = !!letter
        const draft = letter?.formData || formDraft

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
                    updateFormDraft(values)
                },
            })

            return () => unsubscribe()
        }, [subscribe, updateFormDraft])

        return (
            <form
                onSubmit={handleSubmit(onGenerate)}
                className={clsx(styles.form, className)}
                {...props}
            >
                {preview && draft && (
                    <div className={styles.header}>
                        <Text variant="h1" className={styles.truncate}>
                            {buildFormTitle(draft)}
                        </Text>
                    </div>
                )}
                <div className={styles.content}>
                    {isMobile ? (
                        <>
                            <div className={styles.line}>
                                <Input
                                    label="Job title"
                                    placeholder="Product Manager"
                                    disabled={processing}
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
                                    disabled={processing}
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
                                disabled={processing}
                                error={!!errors.jobTitle}
                                {...register('jobTitle', {
                                    required: true,
                                })}
                            />
                            <Input
                                label="Company"
                                placeholder="Apple"
                                disabled={processing}
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
                            disabled={processing}
                            error={!!errors.skills}
                            {...register('skills', {
                                required: true,
                            })}
                        />
                    </div>
                    <Textarea
                        className={styles.textarea}
                        label="Additional details"
                        placeholder="Describe why you are a great fit or paste your bio"
                        limit={APPLICATION_FORM_DETAILS_LIMIT}
                        disabled={processing}
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
                {preview ? (
                    <Button
                        type="submit"
                        variant="outline"
                        size={isMobile ? 'md' : 'lg'}
                        iconLeft={<IconRepeat />}
                        disabled={!isValid}
                        loading={processing}
                    >
                        Try Again
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        size={isMobile ? 'md' : 'lg'}
                        loading={processing}
                        disabled={!isValid}
                    >
                        Generate Now
                    </Button>
                )}
            </form>
        )
    },
)
