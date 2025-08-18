import type {Meta, StoryObj} from '@storybook/react-vite'
import {Progress} from './Progress'

const meta = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        progress: 0,
        short: false,
    },
}
