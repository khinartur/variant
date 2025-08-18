import type {Meta, StoryObj} from '@storybook/react-vite'
import {Input} from './Input'

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        placeholder: 'Product manager',
        error: false,
    },
}
