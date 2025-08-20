import {memo, useCallback, useState} from 'react'
import {useIsMobile} from '~/shared/hooks'
import {IconCopy} from '~/shared/icons'
import {Button} from '~/shared/ui'
import {copyToClipboard} from '~/shared/utils'

interface CopyToClipboardButtonProps {
    content: string
}

export const CopyToClipboardButton = memo(
    ({content}: CopyToClipboardButtonProps) => {
        const isMobile = useIsMobile()
        const [copied, setCopied] = useState(false)

        const toggleCopied = useCallback(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }, [])

        const onCopy = useCallback(() => {
            copyToClipboard(content)
            toggleCopied()
        }, [content, toggleCopied])

        return (
            <Button
                variant="ghost"
                size="xs"
                iconRight={<IconCopy />}
                onClick={onCopy}
            >
                {copied ? 'Copied!' : isMobile ? 'Copy' : 'Copy to clipboard'}
            </Button>
        )
    },
)
