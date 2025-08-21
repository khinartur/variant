import type {Meta, StoryObj} from '@storybook/react-vite'
import {Text} from '../Text'
import {Textarea} from './Textarea'

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'center',
                maxWidth: '500px',
                margin: '0 auto',
            }}
        >
            <Text variant="h1" size="2xl">
                No Label
            </Text>
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                rows={5}
            />
            <Text variant="h1" size="2xl">
                With Label
            </Text>
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                rows={5}
            />
            <Text variant="h1" size="2xl">
                With Label and Limit
            </Text>
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                limit={50}
                rows={5}
            />
            <Text variant="h1" size="2xl">
                Error
            </Text>
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                error
                rows={5}
            />
            <Text variant="h1" size="2xl">
                Disabled
            </Text>
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                disabled
                rows={5}
            />
        </div>
    ),
}
