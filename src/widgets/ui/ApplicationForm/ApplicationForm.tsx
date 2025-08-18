import {Button, Input, Text, Textarea} from '~/shared/ui'
import styles from './ApplicationForm.module.css'

export const ApplicationForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.header}>
                <Text variant="h1" color="secondary">
                    New application
                </Text>
            </div>
            <div className={styles.content}>
                <div className={styles.line}>
                    <Input label="Job title" placeholder="Product Manager" />
                    <Input label="Company" placeholder="Apple" />
                </div>
                <div className={styles.line}>
                    <Input
                        label="I am good at..."
                        placeholder="HTML, CSS and doing things in time"
                    />
                </div>
                <div className={styles.line}>
                    <Textarea
                        label="Additional details"
                        placeholder="Describe why you are a great fit or paste your bio"
                        limit={1200}
                    />
                </div>
            </div>
            <Button size="lg" disabled>
                Generate Now
            </Button>
        </div>
    )
}
