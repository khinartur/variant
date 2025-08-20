import type {Meta, StoryObj} from '@storybook/react-vite'
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
                gap: '16px',
                width: '500px',
            }}
        >
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                rows={5}
            />
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                rows={5}
            />
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                limit={50}
                rows={5}
            />
            <Textarea
                placeholder="Describe why you are a great fit or paste your bio"
                label="Additional details"
                error
                rows={5}
            />
        </div>
    ),
}
