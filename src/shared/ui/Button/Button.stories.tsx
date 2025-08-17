import type {Meta, StoryObj} from '@storybook/react-vite'
import {IconCopy20, IconHome20, IconPlus20, IconRepeat24} from '~/shared/icons'
import {Button} from './Button'

const meta = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Generate Now',
    },
}

export const PrimaryWithIcon: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        iconLeft: <IconPlus20 />,
        children: 'Create New',
    },
}

export const PrimaryLoading: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        loading: true,
        iconLeft: <IconPlus20 />,
        children: 'Create New',
    },
}

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        disabled: true,
        children: 'Create New',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'lg',
        children: 'Try Again',
        iconLeft: <IconRepeat24 />,
    },
}

export const OutlineOnlyIcon: Story = {
    args: {
        variant: 'outline',
        size: 'sm',
        iconLeft: <IconHome20 />,
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'xs',
        children: 'Copy to clipboard',
        iconRight: <IconCopy20 />,
    },
}
