import type {Meta, StoryObj} from '@storybook/react-vite'
import {Text} from '../Text'
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
            <Input placeholder="Product manager" />
            <Text variant="h1" size="2xl">
                With Label
            </Text>
            <Input placeholder="Product manager" label="Job title" />
            <Text variant="h1" size="2xl">
                Error
            </Text>
            <Input placeholder="Product manager" label="Job title" error />
            <Text variant="h1" size="2xl">
                Disabled
            </Text>
            <Input placeholder="Product manager" label="Job title" disabled />
        </div>
    ),
}
