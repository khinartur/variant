import clsx from 'clsx'
import {useIsMobile} from '~/shared/hooks'
import {Button, Input, Text, Textarea} from '~/shared/ui'
import styles from './ApplicationForm.module.css'

interface ApplicationFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ApplicationForm = ({
    className,
    ...props
}: ApplicationFormProps) => {
    const isMobile = useIsMobile()

    return (
        <div className={clsx(styles.form, className)} {...props}>
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
                            />
                        </div>
                        <div className={styles.line}>
                            <Input label="Company" placeholder="Apple" />
                        </div>
                    </>
                ) : (
                    <div className={styles.line}>
                        <Input
                            label="Job title"
                            placeholder="Product Manager"
                        />
                        <Input label="Company" placeholder="Apple" />
                    </div>
                )}
                <div className={styles.line}>
                    <Input
                        label="I am good at..."
                        placeholder="HTML, CSS and doing things in time"
                    />
                </div>
                <Textarea
                    label="Additional details"
                    placeholder="Describe why you are a great fit or paste your bio"
                    limit={1200}
                />
            </div>
            <Button size={isMobile ? 'md' : 'lg'} disabled>
                Generate Now
            </Button>
        </div>
    )
}
