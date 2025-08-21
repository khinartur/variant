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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '48px',
                alignItems: 'center',
                maxWidth: '500px',
                margin: '0 auto',
            }}
        >
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>h1:</Text>
                    <Text variant="h1">Applications</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>h2:</Text>
                    <Text variant="h2">Hit your goal</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>plain:</Text>
                    <Text>Additional details</Text>
                </div>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>h1 (secondary):</Text>
                    <Text variant="h1" color="secondary">
                        Applications
                    </Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>h2 (secondary):</Text>
                    <Text variant="h2" color="secondary">
                        Hit your goal
                    </Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Text>plain (secondary):</Text>
                    <Text color="secondary">3/5 applications generated</Text>
                </div>
            </div>
        </div>
    ),
}
