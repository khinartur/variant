import clsx from 'clsx'
import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {useIsMobile} from '~/shared/hooks'
import type {ApplicationFormData} from '~/shared/types'
import {Button, Input, Text, Textarea} from '~/shared/ui'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps
    extends React.FormHTMLAttributes<HTMLFormElement> {}

export const ApplicationForm = ({
    className,
    ...props
}: ApplicationFormProps) => {
    const isMobile = useIsMobile()

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<ApplicationFormData>({
        mode: 'onChange',
        defaultValues: {
            jobTitle: '',
            company: '',
            skills: '',
            details: '',
        },
    })

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
                    limit={1200}
                    error={!!errors.details}
                    {...register('details', {
                        required: true,
                        maxLength: {
                            value: 1200,
                            message:
                                'Additional details cannot exceed 1200 characters',
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
