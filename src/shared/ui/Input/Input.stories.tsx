import type {Meta, StoryObj} from '@storybook/react-vite'
import {Input} from './Input'

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <Input placeholder="Product manager" />
            <Input placeholder="Product manager" label="Job title" />
            <Input placeholder="Product manager" label="Job title" error />
        </div>
    ),
}
