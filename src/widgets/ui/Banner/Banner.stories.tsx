import type {Meta, StoryObj} from '@storybook/react-vite'
import {Banner} from './Banner'

const meta = {
    title: 'Widgets/Banner',
    component: Banner,
    tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        progress: 0,
        total: 5,
        onCreate: () => {},
    },
}
