import type {Meta, StoryObj} from '@storybook/react-vite'
import {Text} from './Text'

const meta = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '48px'}}>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1">Applications</Text>
                <Text variant="h2">Hit your goal</Text>
                <Text>Additional details</Text>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1" color="secondary">
                    Applications
                </Text>
                <Text variant="h2" color="secondary">
                    Hit your goal
                </Text>
                <Text color="secondary">3/5 applications generated</Text>
            </div>
        </div>
    ),
}
