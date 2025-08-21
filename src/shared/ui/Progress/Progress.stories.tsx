import type {Meta, StoryObj} from '@storybook/react-vite'
import {Progress} from './Progress'

const meta = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    args: {
        progress: 0,
    },
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
            }}
        >
            <Progress progress={0} />
            <Progress progress={3} />
            <Progress progress={0} short />
            <Progress progress={3} short />
            <Progress progress={5} />
        </div>
    ),
}
